// api/send-otp.js  — Vercel Serverless Function (ES Module)
import crypto from 'crypto';
import https from 'https';

const SECRET = process.env.OTP_SECRET || 'nestfinder-otp-secret-change-me';

function generateOTP() {
  return String(crypto.randomInt(100000, 999999));
}

function signToken(email, otp) {
  const exp = Date.now() + 10 * 60 * 1000;
  const payload = Buffer.from(JSON.stringify({ email, otp, exp })).toString('base64url');
  const sig = crypto.createHmac('sha256', SECRET).update(payload).digest('base64url');
  return `${payload}.${sig}`;
}

function escHtml(str) {
  return String(str || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function buildEmailHTML(name, otp, propertyTitle) {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1.0"/><title>Your NestFinder OTP</title></head>
<body style="margin:0;padding:0;background:#F5F7FA;font-family:'Segoe UI',Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#F5F7FA;padding:32px 0;">
<tr><td align="center">
<table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.10);">
<tr><td style="background:linear-gradient(135deg,#C0392B 0%,#E13642 100%);padding:28px 36px;text-align:center;">
<h1 style="color:#fff;margin:0;font-size:24px;font-weight:800;">🏠 NestFinder</h1>
<p style="color:rgba(255,255,255,0.85);margin:6px 0 0;font-size:13px;">India's Trusted Property Platform</p>
</td></tr>
<tr><td style="background:#FFFFFF;padding:36px 36px 28px;">
<p style="color:#212121;font-size:16px;margin:0 0 8px;">Hi <strong>${escHtml(name)}</strong>,</p>
<p style="color:#424242;font-size:14px;line-height:1.6;margin:0 0 24px;">
You're one step away from connecting with the property owner. Use the OTP below to verify your identity and
${propertyTitle ? `view contact details for <strong>${escHtml(propertyTitle)}</strong>.` : 'complete your enquiry.'}
</p>
<div style="background:#F5F7FA;border:2px dashed #E0E0E0;border-radius:10px;padding:24px;text-align:center;margin:0 0 24px;">
<p style="color:#757575;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;margin:0 0 10px;">Your One-Time Password</p>
<div style="display:inline-block;background:#212121;border-radius:8px;padding:14px 32px;">
<span style="font-family:'Courier New',Courier,monospace;font-size:36px;font-weight:900;letter-spacing:10px;color:#E13642;">${otp}</span>
</div>
<p style="color:#9E9E9E;font-size:12px;margin:12px 0 0;">⏱ Valid for <strong>10 minutes</strong> only</p>
</div>
<p style="color:#757575;font-size:13px;line-height:1.6;margin:0 0 8px;">Enter this OTP in the NestFinder verification screen. Do not share this code.</p>
<p style="color:#9E9E9E;font-size:12px;margin:0;">If you did not request this, please ignore this email.</p>
</td></tr>
<tr><td style="background:#fff;padding:0 36px;"><div style="height:1px;background:#F0F0F0;"></div></td></tr>
<tr><td style="background:#FAFAFA;padding:20px 36px;text-align:center;">
<p style="color:#BDBDBD;font-size:11px;margin:0 0 4px;">© 2026 NestFinder · India's #1 Property Platform</p>
<p style="color:#BDBDBD;font-size:11px;margin:0;">This is an automated message — please do not reply.</p>
</td></tr>
</table>
</td></tr></table>
</body></html>`;
}

function sendEmail(apiKey, to, subject, html) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({
      from: process.env.FROM_EMAIL || 'onboarding@resend.dev',
      to: [to],
      subject: subject,
      html: html
    });

    const options = {
      hostname: 'api.resend.com',
      path: '/emails',
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + apiKey,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(body)
      }
    };

    const req = https.request(options, (resp) => {
      let data = '';
      resp.on('data', chunk => data += chunk);
      resp.on('end', () => {
        if (resp.statusCode >= 200 && resp.statusCode < 300) {
          resolve(data);
        } else {
          reject(new Error(`Resend API ${resp.statusCode}: ${data}`));
        }
      });
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

// Function to call Supabase REST API via https
function insertContact(supabaseUrl, supabaseAnonKey, contactData) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify(contactData);
    const url = new URL(supabaseUrl);
    const options = {
      hostname: url.hostname,
      path: '/rest/v1/contacts',
      method: 'POST',
      headers: {
        'apikey': supabaseAnonKey,
        'Authorization': 'Bearer ' + supabaseAnonKey,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation', // To get the inserted row back
        'Content-Length': Buffer.byteLength(body)
      }
    };

    const req = https.request(options, (resp) => {
      let data = '';
      resp.on('data', chunk => data += chunk);
      resp.on('end', () => {
        if (resp.statusCode >= 200 && resp.statusCode < 300) {
          try {
            const records = JSON.parse(data);
            resolve(records[0]); // Return the first record (inserted row)
          } catch (e) {
            reject(new Error('Failed to parse Supabase response: ' + data));
          }
        } else {
          reject(new Error(`Supabase API ${resp.statusCode}: ${data}`));
        }
      });
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
    const { name, email, phone, propertyId, propertyTitle, mode } = req.body || {};

    if (!name || !email || !phone) {
      return res.status(400).json({ error: 'Missing required fields: name, email, phone' });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    if (!RESEND_API_KEY) {
      return res.status(500).json({ error: 'Email service not configured. Please set RESEND_API_KEY.' });
    }

    const SUPABASE_URL = process.env.SUPABASE_URL;
    const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;
    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
      return res.status(500).json({ error: 'Supabase service not configured. Please set SUPABASE_URL and SUPABASE_ANON_KEY.' });
    }

    const otp = generateOTP();
    const token = signToken(email, otp);

    // 1. Call Supabase (Insert Contact) - DO THIS FIRST so record exists even if email fails
    const record = await insertContact(SUPABASE_URL, SUPABASE_ANON_KEY, {
      name,
      phone,
      email,
      property_id: propertyId,
      property_title: propertyTitle,
      otp: otp,
      mode: mode || 'contact',
      verified: false
    });

    // 2. Call Resend (Send Email)
    try {
      await sendEmail(RESEND_API_KEY, email, `${otp} is your NestFinder verification code`, buildEmailHTML(name, otp, propertyTitle));
    } catch (err) {
      console.error('Email failed:', err.message);

      // Custom helpful message for Resend 403
      if (err.message.includes('403')) {
        return res.status(200).json({
          token,
          recordId: record ? record.id : null,
          message: 'OTP initiated (Supabase OK), but Resend blocked the email. Note: Free accounts can only send to vivek1706@gmail.com. Check Supabase for the OTP code!'
        });
      }
      throw err; // Re-throw other errors
    }

    return res.status(200).json({
      token,
      recordId: record ? record.id : null,
      message: 'OTP sent and contact initiated'
    });

  } catch (err) {
    console.error('send-otp error:', err);
    return res.status(500).json({ error: err.message || 'Server error. Please try again.' });
  }
}
