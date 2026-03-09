// api/verify-otp.js  — Vercel Serverless Function
// Verifies the HMAC-signed token + entered OTP without any database

const crypto = require('crypto');

const SECRET = process.env.OTP_SECRET || 'nestfinder-otp-secret-change-me';

function verifyToken(token, enteredOtp) {
    const parts = (token || '').split('.');
    if (parts.length !== 2) return { valid: false, error: 'Invalid token format' };

    const [payload, sig] = parts;

    // Verify HMAC signature
    const expected = crypto.createHmac('sha256', SECRET).update(payload).digest('base64url');
    const sigBuf = Buffer.from(sig, 'base64url');
    const expBuf = Buffer.from(expected, 'base64url');

    // Constant-time comparison to prevent timing attacks
    if (sigBuf.length !== expBuf.length || !crypto.timingSafeEqual(sigBuf, expBuf)) {
        return { valid: false, error: 'Invalid or tampered token' };
    }

    // Decode payload
    let data;
    try {
        data = JSON.parse(Buffer.from(payload, 'base64url').toString('utf-8'));
    } catch {
        return { valid: false, error: 'Malformed token payload' };
    }

    // Check expiry
    if (Date.now() > data.exp) {
        return { valid: false, error: 'OTP has expired. Please request a new one.' };
    }

    // Compare OTP (constant-time)
    const entered = Buffer.from(String(enteredOtp));
    const actual = Buffer.from(String(data.otp));
    if (entered.length !== actual.length || !crypto.timingSafeEqual(entered, actual)) {
        return { valid: false, error: 'Incorrect OTP. Please try again.' };
    }

    return { valid: true, email: data.email };
}

module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') return res.status(200).end();
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

    const { token, enteredOtp } = req.body || {};

    if (!token || !enteredOtp) {
        return res.status(400).json({ error: 'Missing token or OTP' });
    }

    const result = verifyToken(token, String(enteredOtp).trim());

    if (!result.valid) {
        return res.status(400).json({ error: result.error });
    }

    return res.status(200).json({ ok: true, email: result.email });
};
