import { NextResponse } from "next/server";

interface LeadPayload {
  fullName: string;
  email: string;
  phone: string;
  sessionType: string;
  preferredLocation?: string;
  preferredDate: string;
  message?: string;
}

function buildEmailHtml(data: LeadPayload): string {
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /></head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; color: #1c1917; background: #f9f7f4; padding: 32px 0;">
  <div style="max-width: 560px; margin: 0 auto; background: #fff; border-radius: 12px; overflow: hidden; border: 1px solid #e7e5e4;">
    <div style="background: #1c1917; padding: 24px 32px;">
      <p style="color: #fbbf24; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 4px;">New Lead</p>
      <h1 style="color: #fff; font-size: 22px; margin: 0;">Tuhami Photography</h1>
    </div>
    <div style="padding: 32px;">
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #f5f5f4; width: 40%; color: #78716c; font-size: 13px; font-weight: 600;">Full Name</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #f5f5f4; font-size: 14px; color: #1c1917;">${data.fullName}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #f5f5f4; color: #78716c; font-size: 13px; font-weight: 600;">Email</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #f5f5f4; font-size: 14px;"><a href="mailto:${data.email}" style="color: #d97706;">${data.email}</a></td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #f5f5f4; color: #78716c; font-size: 13px; font-weight: 600;">Phone</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #f5f5f4; font-size: 14px;">${data.phone}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #f5f5f4; color: #78716c; font-size: 13px; font-weight: 600;">Session Type</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #f5f5f4; font-size: 14px; font-weight: 600; color: #d97706;">${data.sessionType}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #f5f5f4; color: #78716c; font-size: 13px; font-weight: 600;">Preferred Date</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #f5f5f4; font-size: 14px;">${data.preferredDate}</td>
        </tr>
        ${
          data.preferredLocation
            ? `<tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #f5f5f4; color: #78716c; font-size: 13px; font-weight: 600;">Location</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #f5f5f4; font-size: 14px;">${data.preferredLocation}</td>
        </tr>`
            : ""
        }
        ${
          data.message
            ? `<tr>
          <td style="padding: 10px 0; color: #78716c; font-size: 13px; font-weight: 600; vertical-align: top;">Message</td>
          <td style="padding: 10px 0; font-size: 14px; color: #1c1917; line-height: 1.6;">${data.message.replace(/\n/g, "<br/>")}</td>
        </tr>`
            : ""
        }
      </table>
      <div style="margin-top: 28px; padding: 16px; background: #fef3c7; border-radius: 8px;">
        <p style="margin: 0; font-size: 13px; color: #92400e;">
          <strong>Reply directly to this email</strong> to reach the lead at ${data.email}.
        </p>
      </div>
    </div>
    <div style="padding: 16px 32px; background: #f9f7f4; border-top: 1px solid #e7e5e4;">
      <p style="margin: 0; font-size: 11px; color: #a8a29e;">Tuhami Photography · photo.tuhamiconsulting.com · East Valley &amp; Scottsdale, AZ</p>
    </div>
  </div>
</body>
</html>
  `.trim();
}

export async function POST(request: Request) {
  let data: LeadPayload;

  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  // Basic server-side validation
  if (!data.fullName || !data.email || !data.phone || !data.sessionType || !data.preferredDate) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 422 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 422 });
  }

  const errors: string[] = [];

  // ── Send email via Resend ──────────────────────────────────────────────────
  const resendKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.LEADS_TO_EMAIL;

  if (resendKey && toEmail) {
    try {
      const { Resend } = await import("resend");
      const resend = new Resend(resendKey);

      const { error: resendError } = await resend.emails.send({
        from: "Tuhami Photography <booking@tuhamiconsulting.com>",
        to: [toEmail],
        replyTo: data.email,
        subject: `New Lead: ${data.sessionType} — ${data.fullName}`,
        html: buildEmailHtml(data),
      });

      if (resendError) {
        console.error("[lead/route] Resend error:", resendError);
        errors.push("Email delivery failed");
      }
    } catch (err) {
      console.error("[lead/route] Resend exception:", err);
      errors.push("Email service unavailable");
    }
  } else {
    console.warn("[lead/route] Resend not configured — skipping email.");
  }

  // ── Insert into Supabase ───────────────────────────────────────────────────
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_ANON_KEY;

  if (supabaseUrl && supabaseKey) {
    try {
      const { createClient } = await import("@supabase/supabase-js");
      const supabase = createClient(supabaseUrl, supabaseKey);

      const { error: dbError } = await supabase.from("leads").insert({
        full_name: data.fullName,
        email: data.email,
        phone: data.phone,
        session_type: data.sessionType,
        preferred_location: data.preferredLocation ?? null,
        preferred_date: data.preferredDate,
        message: data.message ?? null,
      });

      if (dbError) {
        console.error("[lead/route] Supabase error:", dbError);
        errors.push("Database insert failed");
      }
    } catch (err) {
      console.error("[lead/route] Supabase exception:", err);
      errors.push("Database service unavailable");
    }
  } else {
    console.warn("[lead/route] Supabase not configured — skipping DB insert.");
  }

  // Return success even if integrations fail — the lead was received
  return NextResponse.json(
    {
      success: true,
      ...(errors.length > 0 && { warnings: errors }),
    },
    { status: 200 }
  );
}
