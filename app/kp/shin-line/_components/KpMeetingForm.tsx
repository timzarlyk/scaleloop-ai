"use client";

import { useMemo, useState } from "react";
import Button from "@/components/Button";
import { cn } from "@/lib/cn";
import { ctaQuestions } from "./data";
import { KpHeading, KpSection } from "./ui";

type FormState = {
  name: string;
  position: string;
  phone: string;
  email: string;
  datetime: string;
  location: string;
  comment: string;
};

type FieldKey = keyof FormState;

const fieldClass =
  "w-full rounded-2xl glass-subtle px-4 py-3.5 text-[15px] text-ink placeholder:text-faint outline-none transition-all duration-300 focus:border-accent/50 focus:bg-white focus:ring-4 focus:ring-accent/15";

const fieldErrorClass =
  "border border-red-300/80 bg-red-50/40 focus:border-red-400 focus:ring-red-200/50";

function minDatetimeLocal(): string {
  const now = new Date();
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
  return now.toISOString().slice(0, 16);
}

export default function KpMeetingForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    position: "",
    phone: "",
    email: "",
    datetime: "",
    location: "",
    comment: "",
  });
  const [errors, setErrors] = useState<Partial<Record<FieldKey, string>>>({});
  const [submitError, setSubmitError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const minDatetime = useMemo(() => minDatetimeLocal(), []);

  function update(key: FieldKey) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [key]: e.target.value }));
      setErrors((prev) => {
        if (!prev[key]) return prev;
        const next = { ...prev };
        delete next[key];
        return next;
      });
      setSubmitError("");
    };
  }

  function validateClient(): Partial<Record<FieldKey, string>> {
    const next: Partial<Record<FieldKey, string>> = {};

    if (!form.name.trim()) next.name = "Укажите имя.";
    if (!form.phone.trim()) next.phone = "Укажите телефон.";
    else if (form.phone.replace(/\D/g, "").length < 10) {
      next.phone = "Укажите корректный номер телефона.";
    }
    if (!form.datetime.trim()) next.datetime = "Укажите дату и время встречи.";
    if (!form.location.trim()) next.location = "Укажите место встречи.";

    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Укажите корректный email.";
    }

    return next;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (success || loading) return;

    const clientErrors = validateClient();
    if (Object.keys(clientErrors).length > 0) {
      setErrors(clientErrors);
      setSubmitError("");
      return;
    }

    setLoading(true);
    setSubmitError("");
    setErrors({});

    try {
      const res = await fetch("/api/shin-line-meeting", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          source: "shin-line-proposal-meeting",
        }),
      });

      const data = (await res.json()) as { error?: string };

      if (!res.ok) {
        setSubmitError(
          data.error ||
            "Не удалось отправить заявку. Проверьте данные или попробуйте позже."
        );
        return;
      }

      setSuccess(true);
    } catch {
      setSubmitError(
        "Не удалось отправить заявку. Проверьте данные или попробуйте позже."
      );
    } finally {
      setLoading(false);
    }
  }

  function fieldProps(key: FieldKey, label: string, required?: boolean) {
    const hasError = Boolean(errors[key]);
    return {
      id: key,
      label,
      required,
      error: errors[key],
      className: cn(fieldClass, hasError && fieldErrorClass),
    };
  }

  return (
    <KpSection id="meeting-request">
      <div className="edge-light overflow-hidden rounded-3xl glass-strong p-6 sm:p-8 lg:p-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <KpHeading>Предлагаем начать с рабочей встречи</KpHeading>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Укажите удобные данные — мы свяжемся с вами и согласуем детали
              встречи.
            </p>
            <div className="mt-8">
              <p className="text-sm font-medium text-slate-800">
                На встрече можно обсудить:
              </p>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-600">
                {ctaQuestions.map((q) => (
                  <li key={q} className="flex items-start gap-2">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                    {q};
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            {success ? (
              <div className="flex h-full min-h-[320px] flex-col items-center justify-center rounded-2xl glass-subtle p-8 text-center">
                <div className="flex size-14 items-center justify-center rounded-full bg-teal/15 text-teal">
                  <svg
                    className="size-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="mt-5 text-base font-medium leading-relaxed text-slate-800">
                  Спасибо. Данные отправлены. Мы свяжемся с вами для
                  подтверждения деталей.
                </p>
              </div>
            ) : (
              <form
                noValidate
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field
                    {...fieldProps("name", "Имя", true)}
                    value={form.name}
                    onChange={update("name")}
                    placeholder="Ваше имя"
                    type="text"
                  />
                  <Field
                    {...fieldProps("position", "Должность")}
                    value={form.position}
                    onChange={update("position")}
                    placeholder="Ваша должность"
                    type="text"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field
                    {...fieldProps("phone", "Телефон", true)}
                    value={form.phone}
                    onChange={update("phone")}
                    placeholder="+7 ___ ___ __ __"
                    type="tel"
                  />
                  <Field
                    {...fieldProps("email", "Почта")}
                    value={form.email}
                    onChange={update("email")}
                    placeholder="name@company.kz"
                    type="email"
                  />
                </div>

                <Field
                  {...fieldProps("datetime", "Дата и время встречи", true)}
                  value={form.datetime}
                  onChange={update("datetime")}
                  type="datetime-local"
                  min={minDatetime}
                />

                <Field
                  {...fieldProps("location", "Место встречи", true)}
                  value={form.location}
                  onChange={update("location")}
                  placeholder="Например: офис Shin-Line / онлайн / другой адрес"
                  type="text"
                />

                <div>
                  <label
                    htmlFor="comment"
                    className="mb-1.5 block text-xs font-medium text-slate-500"
                  >
                    Комментарий
                  </label>
                  <textarea
                    id="comment"
                    value={form.comment}
                    onChange={update("comment")}
                    rows={4}
                    placeholder="Можно оставить пустым или указать удобные детали для связи"
                    className={cn(fieldClass, "resize-none")}
                  />
                </div>

                {submitError ? (
                  <p className="rounded-xl bg-red-50/80 px-4 py-3 text-sm text-red-700">
                    {submitError}
                  </p>
                ) : null}

                <Button
                  type="submit"
                  size="lg"
                  withArrow
                  className="w-full"
                  disabled={loading}
                >
                  {loading ? "Отправляем..." : "Отправить данные"}
                </Button>

                <p className="text-center text-xs text-slate-400">
                  Нажимая кнопку, вы соглашаетесь на обработку контактных данных.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </KpSection>
  );
}

function Field({
  id,
  label,
  required,
  error,
  className,
  ...props
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-xs font-medium text-slate-500">
        {label}
        {required ? <span className="text-accent"> *</span> : null}
      </label>
      <input id={id} required={required} className={className} {...props} />
      {error ? (
        <p className="mt-1.5 text-xs text-red-600" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
