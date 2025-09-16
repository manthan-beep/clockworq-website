// Email functionality disabled for now
// import sgMail from "@sendgrid/mail";

export const runtime = "nodejs";

// function getEnv(name: string, fallback?: string): string {
//   const v = process.env[name] ?? fallback;
//   if (!v) throw new Error(`Missing env: ${name}`);
//   return v;
// }

// function sanitize(input: string): string {
//   return input?.toString().trim().slice(0, 1000) ?? "";
// }

export async function POST(_req: Request) {
  // Email functionality disabled for now
  return Response.json({ error: "Contact form temporarily disabled" }, { status: 503 });
}

