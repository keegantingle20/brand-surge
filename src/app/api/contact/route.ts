import { Resend } from "resend";

function escapeHtml(value: unknown): string {
  const s = String(value ?? "");
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function subjectSnippet(value: unknown, max = 120): string {
  return String(value ?? "")
    .replace(/[\r\n]+/g, " ")
    .trim()
    .slice(0, max);
}

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return Response.json(
      { success: false, error: "Email is not configured." },
      { status: 500 },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return Response.json({ success: false, error: "Invalid JSON" }, { status: 400 });
  }

  const name = body.name;
  const company = body.company;
  const email = body.email;
  const companyType = body.companyType;
  const challenge = body.challenge;
  const conversations = body.conversations;

  if (
    typeof name !== "string" ||
    !name.trim() ||
    typeof company !== "string" ||
    !company.trim() ||
    typeof email !== "string" ||
    !email.trim()
  ) {
    return Response.json(
      { success: false, error: "Name, company, and email are required." },
      { status: 400 },
    );
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: "Brand Surge <onboarding@resend.dev>",
    to: "koby@brand-surge.com",
    replyTo: email.trim(),
    subject: `New pipeline audit request from ${subjectSnippet(name)} at ${subjectSnippet(company)}`,
    html: `
      <h2>New Pipeline Audit Request</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Company:</strong> ${escapeHtml(company)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Company Type:</strong> ${escapeHtml(companyType)}</p>
      <p><strong>Pipeline Challenge:</strong> ${escapeHtml(challenge)}</p>
      <p><strong>Monthly Conversations:</strong> ${escapeHtml(conversations)}</p>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return Response.json(
      { success: false, error: "Failed to send message." },
      { status: 502 },
    );
  }

  return Response.json({ success: true });
}
