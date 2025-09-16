import sgMail from "@sendgrid/mail";

export const runtime = "nodejs";

function getEnv(name: string, fallback?: string): string {
  const v = process.env[name] ?? fallback;
  if (!v) throw new Error(`Missing env: ${name}`);
  return v;
}

function sanitize(input: string): string {
  return input?.toString().trim().slice(0, 1000) ?? "";
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const firstName = sanitize(body.firstName);
    const lastName = sanitize(body.lastName);
    const email = sanitize(body.email);
    const company = sanitize(body.company);
    const phone = sanitize(body.phone);
    const message = sanitize(body.message);
    const workflowType = sanitize(body.workflowType);
    const formType = sanitize(body.type); // "demo" | "automate"

    if (!firstName || !lastName || !email) {
      return Response.json({ error: "Missing required fields" }, { status: 400 });
    }

    const SENDGRID_API_KEY = getEnv("SENDGRID_API_KEY");
    const TO_EMAIL = getEnv("SENDGRID_TO_EMAIL", getEnv("SENDGRID_FROM_EMAIL", ""));
    const FROM_EMAIL = getEnv("SENDGRID_FROM_EMAIL");

    sgMail.setApiKey(SENDGRID_API_KEY);

    const subject = formType === "demo"
      ? `New Demo Request – ${firstName} ${lastName} (${company || "No company"})`
      : `New Automation Inquiry – ${firstName} ${lastName} (${company || "No company"})`;

    const html = `
      <div style="font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; line-height:1.6; color:#0f172a;">
        <h2 style="margin:0 0 12px">${subject}</h2>
        <p style="margin:4px 0"><strong>Form:</strong> ${formType || "unknown"}</p>
        <p style="margin:4px 0"><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p style="margin:4px 0"><strong>Email:</strong> ${email}</p>
        ${company ? `<p style="margin:4px 0"><strong>Company:</strong> ${company}</p>` : ""}
        ${phone ? `<p style="margin:4px 0"><strong>Phone:</strong> ${phone}</p>` : ""}
        ${workflowType ? `<p style=\"margin:4px 0\"><strong>Workflow Type:</strong> ${workflowType}</p>` : ""}
        ${message ? `<p style=\"margin:12px 0 0\"><strong>Message</strong></p><p style=\"white-space:pre-wrap; background:#f8fafc; padding:12px; border-radius:8px;\">${message}</p>` : ""}
      </div>
    `;

    const text = `New inquiry\n\nForm: ${formType}\nName: ${firstName} ${lastName}\nEmail: ${email}\nCompany: ${company}\nPhone: ${phone}\nWorkflow Type: ${workflowType}\n\nMessage:\n${message}`;

    await sgMail.send({
      to: TO_EMAIL,
      from: FROM_EMAIL,
      subject,
      text,
      html,
    });

    return Response.json({ ok: true });
  } catch (error: unknown) {
    console.error("/api/contact error", error);
    const msg = error instanceof Error ? error.message : "Unknown error";
    return Response.json({ error: msg }, { status: 500 });
  }
}

