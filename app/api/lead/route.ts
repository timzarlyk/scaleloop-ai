import { NextResponse } from "next/server";
import {
  isHoneypotTriggered,
  sanitizeLeadPayload,
  validateLead,
  type LeadPayload,
} from "@/lib/lead";
import { sendLeadEmail } from "@/lib/notifications/sendLeadEmail";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as LeadPayload;
    const lead = sanitizeLeadPayload(body);

    if (isHoneypotTriggered(lead)) {
      return NextResponse.json({ success: true });
    }

    const validationError = validateLead(lead);
    if (validationError) {
      return NextResponse.json(
        { success: false, error: validationError },
        { status: 400 }
      );
    }

    await sendLeadEmail(lead);

    if (process.env.NODE_ENV === "development") {
      console.log("[lead] email sent", {
        source: lead.source || "unknown",
        formName: lead.formName || "unknown",
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("[lead] send failed", error);
    }

    return NextResponse.json(
      { success: false, error: "Не удалось отправить заявку" },
      { status: 500 }
    );
  }
}
