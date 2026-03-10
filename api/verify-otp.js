// api/verify-otp.js  — Vercel Serverless Function (ES Module)
import crypto from 'crypto';
import https from 'https';

const SECRET = process.env.OTP_SECRET || 'nestfinder-otp-secret-change-me';

function verifyToken(token, enteredOtp) {
    const parts = (token || '').split('.');
    if (parts.length !== 2) return { valid: false, error: 'Invalid token format' };

    const [payload, sig] = parts;

    const expected = crypto.createHmac('sha256', SECRET).update(payload).digest('base64url');
    const sigBuf = Buffer.from(sig, 'base64url');
    const expBuf = Buffer.from(expected, 'base64url');

    if (sigBuf.length !== expBuf.length || !crypto.timingSafeEqual(sigBuf, expBuf)) {
        return { valid: false, error: 'Invalid or tampered token' };
    }

    let data;
    try {
        data = JSON.parse(Buffer.from(payload, 'base64url').toString('utf-8'));
    } catch {
        return { valid: false, error: 'Malformed token payload' };
    }

    if (Date.now() > data.exp) {
        return { valid: false, error: 'OTP has expired. Please request a new one.' };
    }

    const entered = Buffer.from(String(enteredOtp));
    const actual = Buffer.from(String(data.otp));
    if (entered.length !== actual.length || !crypto.timingSafeEqual(entered, actual)) {
        return { valid: false, error: 'Incorrect OTP. Please try again.' };
    }

    return { valid: true, email: data.email };
}

// Function to update Supabase row to verified=true
function updateContactVerified(supabaseUrl, supabaseAnonKey, recordId) {
    return new Promise((resolve, reject) => {
        const body = JSON.stringify({ verified: true });
        const url = new URL(supabaseUrl);
        const options = {
            hostname: url.hostname,
            path: `/rest/v1/contacts?id=eq.${recordId}`,
            method: 'PATCH',
            headers: {
                'apikey': supabaseAnonKey,
                'Authorization': 'Bearer ' + supabaseAnonKey,
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(body)
            }
        };

        const req = https.request(options, (resp) => {
            if (resp.statusCode >= 200 && resp.statusCode < 300) {
                resolve();
            } else {
                let data = '';
                resp.on('data', chunk => data += chunk);
                resp.on('end', () => reject(new Error(`Supabase Patch ${resp.statusCode}: ${data}`)));
            }
        });

        req.on('error', reject);
        req.write(body);
        req.end();
    });
}

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') return res.status(200).end();
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

    try {
        const { token, enteredOtp, recordId } = req.body || {};

        if (!token || !enteredOtp) {
            return res.status(400).json({ error: 'Missing token or OTP' });
        }

        const result = verifyToken(token, String(enteredOtp).trim());

        if (!result.valid) {
            return res.status(400).json({ error: result.error });
        }

        // Update Supabase if recordId is provided
        if (recordId) {
            const SUPABASE_URL = process.env.SUPABASE_URL;
            const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;
            if (SUPABASE_URL && SUPABASE_ANON_KEY) {
                await updateContactVerified(SUPABASE_URL, SUPABASE_ANON_KEY, recordId);
            }
        }

        return res.status(200).json({ ok: true, email: result.email });
    } catch (err) {
        console.error('verify-otp error:', err);
        return res.status(500).json({ error: err.message || 'Server error during verification' });
    }
}
