import type { LeadPayload } from "@/lib/lead";

export const LEAD_ERROR_MESSAGE =
  "Не удалось отправить данные. Попробуйте еще раз или напишите на contact@scaleloop.ai.";

export const LEAD_SUCCESS_MESSAGE =
  "Спасибо. Данные отправлены. Мы свяжемся с вами.";

export async function submitLead(
  payload: LeadPayload
): Promise<{ success: boolean; error?: string }> {
  const res = await fetch("/api/lead", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = (await res.json()) as { success?: boolean; error?: string };

  if (!res.ok || !data.success) {
    return {
      success: false,
      error: data.error || LEAD_ERROR_MESSAGE,
    };
  }

  return { success: true };
}
