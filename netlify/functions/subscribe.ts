import type { Handler } from '@netlify/functions';

const BEEHIIV_API_KEY = process.env.BEEHIIV_API_KEY!;
const BEEHIIV_PUBLICATION_ID = process.env.BEEHIIV_PUBLICATION_ID!;
const RESEND_API_KEY = process.env.RESEND_API_KEY!;
const FROM_EMAIL = process.env.FROM_EMAIL!;
const CHECKLIST_PDF_URL = process.env.CHECKLIST_PDF_URL!;

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  let email: string;
  let name: string | undefined;

  try {
    const body = JSON.parse(event.body || '{}');
    email = body.email?.trim();
    name = body.name?.trim();
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid request body' }) };
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Valid email required' }) };
  }

  const firstName = name ? name.split(' ')[0] : null;

  // Subscribe to Beehiiv
  const beehiivPayload: Record<string, unknown> = {
    email,
    reactivate_existing: true,
    send_welcome_email: false,
    utm_source: 'howtoicf.com',
    utm_medium: 'organic',
    utm_campaign: 'icf-readiness-checklist',
  };

  if (name) {
    const parts = name.split(' ');
    beehiivPayload.first_name = parts[0];
    if (parts.length > 1) beehiivPayload.last_name = parts.slice(1).join(' ');
  }

  const beehiivRes = await fetch(
    `https://api.beehiiv.com/v2/publications/${BEEHIIV_PUBLICATION_ID}/subscriptions`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${BEEHIIV_API_KEY}`,
      },
      body: JSON.stringify(beehiivPayload),
    }
  );

  if (!beehiivRes.ok) {
    const text = await beehiivRes.text();
    console.error('beehiiv error', beehiivRes.status, text);
    return { statusCode: 502, body: JSON.stringify({ error: 'Subscription failed' }) };
  }

  // Send checklist via Resend
  const greeting = firstName ? `Hey ${firstName},` : 'Hey,';
  const resendRes = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: email,
      subject: 'Your ICF Project Readiness Checklist',
      html: `
        <p>${greeting}</p>
        <p>Here's your 25-point ICF Project Readiness Checklist. Everything you need cleared before you stack a single block.</p>
        <p><a href="${CHECKLIST_PDF_URL}" style="background:#f59e0b;color:#000;padding:12px 24px;font-weight:700;text-decoration:none;display:inline-block;">Download Your Checklist</a></p>
        <p>If the button doesn't work, copy this link into your browser:<br>${CHECKLIST_PDF_URL}</p>
        <p>— Eric<br>HowToICF</p>
      `,
    }),
  });

  if (!resendRes.ok) {
    const text = await resendRes.text();
    console.error('resend error', resendRes.status, text);
  }

  // Notify Eric of new checklist subscriber
  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: 'eric@icfnearme.com',
      subject: `New Checklist Subscriber — ${name || email}`,
      html: `
        <div style="background:#1A1A1A;padding:32px;font-family:sans-serif;max-width:560px;">
          <p style="color:#C8883A;font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;margin:0 0 16px;">New Checklist Download — howtoicf.com</p>
          <table style="border-collapse:collapse;width:100%;">
            ${name ? `<tr><td style="padding:6px 12px 6px 0;color:#9A9087;font-size:13px;white-space:nowrap;">Name</td><td style="padding:6px 0;color:#F0EBE3;font-size:13px;">${name}</td></tr>` : ''}
            <tr><td style="padding:6px 12px 6px 0;color:#9A9087;font-size:13px;white-space:nowrap;">Email</td><td style="padding:6px 0;color:#F0EBE3;font-size:13px;">${email}</td></tr>
          </table>
        </div>
      `,
    }),
  });

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ok: true }),
  };
};
