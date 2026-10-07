import type { Handler } from '@netlify/functions';

const BEEHIIV_API_KEY = process.env.BEEHIIV_API_KEY!;
const BEEHIIV_PUBLICATION_ID = process.env.BEEHIIV_PUBLICATION_ID!;
const RESEND_API_KEY = process.env.RESEND_API_KEY!;
const FROM_EMAIL = process.env.FROM_EMAIL!;

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  let body: Record<string, string>;
  try {
    body = JSON.parse(event.body || '{}');
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid request body' }) };
  }

  const {
    name, company, email, phone, location, region, role,
    'project-type': projectType, footage, timeline, notes,
    source, utm_source, utm_medium, utm_campaign, utm_content, utm_term,
  } = body;

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Valid email required' }) };
  }

  // Add to Beehiiv tagged as pricing lead
  const nameParts = name?.trim().split(' ') ?? [];
  const beehiivPayload: Record<string, unknown> = {
    email,
    reactivate_existing: true,
    send_welcome_email: false,
    utm_source: utm_source || 'howtoicf.com',
    utm_medium: utm_medium || 'organic',
    utm_campaign: utm_campaign || 'pricing-request',
  };
  if (nameParts[0]) beehiivPayload.first_name = nameParts[0];
  if (nameParts.length > 1) beehiivPayload.last_name = nameParts.slice(1).join(' ');

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
    console.error('beehiiv error', beehiivRes.status, await beehiivRes.text());
  }

  // Send notification email to Eric with full project details
  const esc = (value: string) =>
    String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const utm = [utm_source, utm_medium, utm_campaign, utm_content, utm_term].filter(Boolean).join(' / ');
  const row = (label: string, raw: string) => {
    const value = raw ? esc(raw) : '';
    return value ? `<tr><td style="padding:6px 12px 6px 0;color:#9A9087;font-size:13px;white-space:nowrap;vertical-align:top;">${label}</td><td style="padding:6px 0;color:#F0EBE3;font-size:13px;">${value}</td></tr>` : '';
  };

  const resendRes = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: 'eric@icfnearme.com',
      subject: `Pricing Request — ${name || 'Unknown'}${company ? ` · ${company}` : ''}${region ? ` · ${region}` : ''}`,
      html: `
        <div style="background:#1A1A1A;padding:32px;font-family:sans-serif;max-width:560px;">
          <p style="color:#C8883A;font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;margin:0 0 16px;">New Pricing Request — howtoicf.com</p>
          <table style="border-collapse:collapse;width:100%;">
            ${row('Name', name)}
            ${row('Company', company)}
            ${row('Email', email)}
            ${row('Phone', phone)}
            ${row('Region', region)}
            ${row('Location', location)}
            ${row('Role', role)}
            ${row('Project Type', projectType)}
            ${row('Est. Linear Footage', footage)}
            ${row('Timeline', timeline)}
            ${row('Notes', notes)}
            ${row('Form', source)}
            ${row('UTM', utm)}
          </table>
        </div>
      `,
    }),
  });

  const resendBody = await resendRes.text();
  if (!resendRes.ok) {
    console.error('resend error', resendRes.status, resendBody);
  } else {
    console.log('resend ok', resendBody);
  }

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ok: true }),
  };
};
