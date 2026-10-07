import type { Handler } from '@netlify/functions';

const BEEHIIV_API_KEY = process.env.BEEHIIV_API_KEY!;
const BEEHIIV_PUBLICATION_ID = process.env.BEEHIIV_PUBLICATION_ID!;
const RESEND_API_KEY = process.env.RESEND_API_KEY!;
const FROM_EMAIL = process.env.FROM_EMAIL!;
// Comma-separated override
const NOTIFY_EMAILS = (process.env.NOTIFY_EMAIL || 'eric@strongholdicf.com')
  .split(',')
  .map((address) => address.trim())
  .filter(Boolean);
const REPLY_TO = 'eric@strongholdicf.com';

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
      to: NOTIFY_EMAILS,
      reply_to: email,
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

  // Confirm receipt to the person who filled out the form
  const firstName = nameParts[0] ? esc(nameParts[0]) : '';
  const confirmRes = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: `Eric Kimbriel <${FROM_EMAIL}>`,
      to: email,
      reply_to: REPLY_TO,
      subject: 'Got your ICF project 👷‍♂️',
      html: `
        <p>${firstName ? `Hey ${firstName},` : 'Hey,'}</p>
        <p>Your project came through${region ? ` for the ${esc(region.replace(/ US$/, ''))}` : ''}. It came to me, not a queue. I will call or text you back at the number you gave.</p>
        <p>If it is urgent, call or text me at 605-269-7898, or reply to this email.</p>
        <p>Eric Kimbriel<br>National Sales, Stronghold ICF<br>605-269-7898 · eric@strongholdicf.com</p>
        <p style="color:#777;font-size:12px;">HowToICF.com is an independent site run by Eric Kimbriel, a Stronghold ICF sales representative. It is not owned or operated by Stronghold Insulation Systems. Product specifications and warranty terms come from Stronghold at strongholdicf.com.</p>
      `,
    }),
  });

  if (!confirmRes.ok) {
    console.error('resend confirmation error', confirmRes.status, await confirmRes.text());
  } else {
    console.log('resend confirmation ok', await confirmRes.text());
  }

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ok: true }),
  };
};
