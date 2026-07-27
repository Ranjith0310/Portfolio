import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET(req: NextRequest) {
  const session = req.cookies.get("admin_session");
  if (session?.value !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { data, error } = await resend.emails.list();
  if (error) return NextResponse.json({ error }, { status: 500 });
  return NextResponse.json(data);
}
