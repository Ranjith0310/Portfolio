import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = req.cookies.get("admin_session");
  if (session?.value !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const { data, error } = await resend.emails.get(id);
  if (error) return NextResponse.json({ error }, { status: 500 });
  return NextResponse.json(data);
}
