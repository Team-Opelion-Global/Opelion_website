import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    const name = body.name?.trim() || "";
    const email = body.email?.trim() || "";
    const message = body.message?.trim() || "";

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const endpoint = process.env.GOOGLE_SHEETS_WEBHOOK_URL || "https://script.google.com/macros/s/AKfycbxgiAMMuffaAtW_VbG-OhQUoAxccG_tmdI_w2uHSTeJD2kLZpCKVvsLO6fgcCicfhG6/exec";

    if (!endpoint) {
      return NextResponse.json(
        { error: "Google Sheets integration is not configured yet." },
        { status: 500 }
      );
    }

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          source: "website-contact-form",
          submittedAt: new Date().toISOString(),
        }),
        cache: "no-store",
      });

      const responseText = await response.text();
      console.log("Google Sheets Response:", response.status, responseText);

      if (!response.ok) {
        throw new Error(`Google Sheets returned ${response.status}: ${responseText}`);
      }

      return NextResponse.json(
        { message: "Thanks. Your details have been recorded successfully." },
        { status: 200 }
      );
    } catch (error) {
      console.error("Contact form error:", error);
      const message =
        error instanceof Error
          ? error.message
          : "Failed to submit contact form.";

      return NextResponse.json({ error: message }, { status: 500 });
    }
  } catch (error) {
    console.error("Contact form validation error:", error);
    const message =
      error instanceof Error
        ? error.message
        : "Failed to submit contact form.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
