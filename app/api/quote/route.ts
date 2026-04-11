import { NextResponse } from "next/server";

type QuotePayload = {
  productName?: string;
  quantity?: string;
  incoterms?: string;
  packaging?: string;
  productType?: string;
  companyName?: string;
  email?: string;
  whatsappPhone?: string;
  orderType?: string;
  country?: string;
  destinationPort?: string;
  specificRequirements?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as QuotePayload;

    const productName = body.productName?.trim() || "";
    const quantity = body.quantity?.trim() || "";
    const incoterms = body.incoterms?.trim() || "";
    const packaging = body.packaging?.trim() || "";
    const productType = body.productType?.trim() || "";
    const companyName = body.companyName?.trim() || "";
    const email = body.email?.trim() || "";
    const whatsappPhone = body.whatsappPhone?.trim() || "";
    const orderType = body.orderType?.trim() || "";
    const country = body.country?.trim() || "";
    const destinationPort = body.destinationPort?.trim() || "";
    const specificRequirements = body.specificRequirements?.trim() || "";

    // Validate required fields
    if (!productName || !quantity || !incoterms || !packaging || !companyName || !email || !orderType || !country || !destinationPort) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const endpoint = process.env.GOOGLE_SHEETS_QUOTE_WEBHOOK_URL || "https://script.google.com/macros/s/AKfycbyQ8NELxLLyEVVP758-e3Zr2AeR5mzBB4S1DSNC8mEnWZvaBDs7flgZ9ugto9D8-5zo0w/exec";

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
          productName,
          quantity,
          incoterms,
          packaging,
          productType,
          companyName,
          email,
          whatsappPhone,
          orderType,
          country,
          destinationPort,
          specificRequirements,
          source: "website-quote-request",
          submittedAt: new Date().toISOString(),
        }),
        cache: "no-store",
      });

      const responseText = await response.text();
      console.log("Google Sheets Response:", response.status, responseText);

      if (!response.ok) {
        throw new Error(`Google Sheets returned status ${response.status}`);
      }

      return NextResponse.json(
        {
          message: "Quote request submitted successfully!",
          timestamp: new Date().toISOString(),
        },
        { status: 200 }
      );
    } catch (error) {
      console.error("Google Sheets integration error:", error);
      return NextResponse.json(
        { error: "Failed to submit quote request. Please try again." },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Quote API error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
