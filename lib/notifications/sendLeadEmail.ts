import { Resend } from "resend";
import type { SanitizedLead } from "@/lib/lead";

function env(name: string): string | undefined {
  const value = process.env[name];
  return value?.trim() || undefined;
}

function display(value: string): string {
  return value || "—";
}

function buildSubject(source: string): string {
  if (source) {
    return `Новая заявка с сайта ScaleLoop.ai — ${source}`;
  }
  return "Новая заявка с сайта ScaleLoop.ai";
}

function buildText(lead: SanitizedLead, createdAt: string): string {
  const lines = [
    "Новая заявка ScaleLoop.ai",
    "",
    `Источник: ${display(lead.source)}`,
    `Страница: ${display(lead.page)}`,
    `Форма: ${display(lead.formName)}`,
    "",
    `Имя: ${display(lead.name)}`,
    `Должность: ${display(lead.position)}`,
    `Компания: ${display(lead.company)}`,
    `Телефон: ${display(lead.phone)}`,
    `Почта: ${display(lead.email)}`,
    "",
    `Дата и время встречи: ${display(lead.meetingDateTime)}`,
    `Место встречи: ${display(lead.meetingPlace)}`,
    "",
    "Сообщение / комментарий:",
    display(lead.message),
    "",
    "Дополнительные данные:",
    display(lead.metadata || formatExtras(lead)),
    "",
    "Дата отправки:",
    createdAt,
  ];

  return lines.join("\n");
}

function formatExtras(lead: SanitizedLead): string {
  const extras = [
    lead.service ? `Услуга: ${lead.service}` : "",
    lead.industry ? `Отрасль: ${lead.industry}` : "",
    lead.budget ? `Бюджет: ${lead.budget}` : "",
  ].filter(Boolean);

  return extras.length > 0 ? extras.join("\n") : "—";
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildHtml(lead: SanitizedLead, createdAt: string): string {
  const row = (label: string, value: string) =>
    `<p><strong>${escapeHtml(label)}</strong> ${escapeHtml(display(value))}</p>`;

  const extras = lead.metadata || formatExtras(lead);

  return `
    <div style="font-family: Arial, sans-serif; color: #0f172a; line-height: 1.5;">
      <h2 style="margin: 0 0 16px;">Новая заявка ScaleLoop.ai</h2>
      ${row("Источник:", lead.source)}
      ${row("Страница:", lead.page)}
      ${row("Форма:", lead.formName)}
      <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
      ${row("Имя:", lead.name)}
      ${row("Должность:", lead.position)}
      ${row("Компания:", lead.company)}
      ${row("Телефон:", lead.phone)}
      ${row("Почта:", lead.email)}
      <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
      ${row("Дата и время встречи:", lead.meetingDateTime)}
      ${row("Место встречи:", lead.meetingPlace)}
      <p><strong>Сообщение / комментарий:</strong></p>
      <p style="white-space: pre-wrap;">${escapeHtml(display(lead.message))}</p>
      <p><strong>Дополнительные данные:</strong></p>
      <p style="white-space: pre-wrap;">${escapeHtml(display(extras))}</p>
      <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
      ${row("Дата отправки:", createdAt)}
    </div>
  `.trim();
}

export async function sendLeadEmail(lead: SanitizedLead): Promise<void> {
  const apiKey = env("RESEND_API_KEY");
  const to = env("LEAD_EMAIL_TO");
  const from = env("LEAD_EMAIL_FROM");

  if (!apiKey || !to || !from) {
    throw new Error("Email service is not configured.");
  }

  const createdAt = new Date().toLocaleString("ru-RU", {
    timeZone: "Asia/Almaty",
    dateStyle: "long",
    timeStyle: "short",
  });

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from,
    to: [to],
    ...(lead.email ? { replyTo: lead.email } : {}),
    subject: buildSubject(lead.source),
    text: buildText(lead, createdAt),
    html: buildHtml(lead, createdAt),
  });

  if (error) {
    throw new Error(error.message);
  }
}
