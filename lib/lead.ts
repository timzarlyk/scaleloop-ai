export type LeadPayload = {
  name?: string;
  phone?: string;
  email?: string;
  company?: string;
  position?: string;
  meetingDateTime?: string;
  meetingPlace?: string;
  message?: string;
  page?: string;
  source?: string;
  formName?: string;
  service?: string;
  industry?: string;
  budget?: string;
  metadata?: string | Record<string, unknown>;
  website?: string;
};

export type SanitizedLead = {
  name: string;
  phone: string;
  email: string;
  company: string;
  position: string;
  meetingDateTime: string;
  meetingPlace: string;
  message: string;
  page: string;
  source: string;
  formName: string;
  service: string;
  industry: string;
  budget: string;
  metadata: string;
  website: string;
};

const LIMITS: Record<keyof SanitizedLead, number> = {
  name: 120,
  phone: 40,
  email: 254,
  company: 200,
  position: 120,
  meetingDateTime: 50,
  meetingPlace: 300,
  message: 5000,
  page: 500,
  source: 100,
  formName: 200,
  service: 200,
  industry: 200,
  budget: 120,
  metadata: 4000,
  website: 200,
};

function trimString(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

function formatMetadata(value: LeadPayload["metadata"]): string {
  if (!value) return "";
  if (typeof value === "string") return value.trim().slice(0, LIMITS.metadata);
  try {
    return JSON.stringify(value).slice(0, LIMITS.metadata);
  } catch {
    return "";
  }
}

export function sanitizeLeadPayload(body: LeadPayload): SanitizedLead {
  return {
    name: trimString(body.name, LIMITS.name),
    phone: trimString(body.phone, LIMITS.phone),
    email: trimString(body.email, LIMITS.email),
    company: trimString(body.company, LIMITS.company),
    position: trimString(body.position, LIMITS.position),
    meetingDateTime: trimString(body.meetingDateTime, LIMITS.meetingDateTime),
    meetingPlace: trimString(body.meetingPlace, LIMITS.meetingPlace),
    message: trimString(body.message, LIMITS.message),
    page: trimString(body.page, LIMITS.page),
    source: trimString(body.source, LIMITS.source),
    formName: trimString(body.formName, LIMITS.formName),
    service: trimString(body.service, LIMITS.service),
    industry: trimString(body.industry, LIMITS.industry),
    budget: trimString(body.budget, LIMITS.budget),
    metadata: formatMetadata(body.metadata),
    website: trimString(body.website, LIMITS.website),
  };
}

export function validateLead(lead: SanitizedLead): string | null {
  const hasContact = Boolean(lead.name || lead.phone || lead.email);
  if (!hasContact) {
    return "Укажите имя, телефон или email.";
  }

  if (lead.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) {
    return "Укажите корректный email.";
  }

  if (lead.phone) {
    const digits = lead.phone.replace(/\D/g, "");
    if (digits.length > 0 && digits.length < 10) {
      return "Укажите корректный номер телефона.";
    }
  }

  return null;
}

export function isHoneypotTriggered(lead: SanitizedLead): boolean {
  return Boolean(lead.website);
}
