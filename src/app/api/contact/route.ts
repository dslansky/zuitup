import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const ContactSchema = z.object({
  fullName: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().min(7).max(20),
  occasion: z.enum(["Shabbos", "Yom Tov", "Bar Mitzvah", "Wedding", "Other"]),
  message: z.string().min(5).max(1000),
});

export async function POST(req: NextRequest) {
  try {
    const json = await req.json();
    const data = ContactSchema.safeParse(json);
    if (!data.success) {
      return NextResponse.json({ error: "Invalid payload", issues: data.error.issues }, { status: 400 });
    }

    const { fullName, phone, email, occasion, message } = data.data;
    const summary = `Zuit Up Lead — Name: ${fullName} | Phone: ${phone} | Email: ${email} | Occasion: ${occasion} | Msg: ${message.replace(/\s+/g, " ").trim()}`;

    // Here you could send to an email/SMS/Slack provider
    console.log(summary);

    return NextResponse.json({ ok: true, summary });
  } catch (_err) {
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  }
}


