"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";
import { Icon } from "./icons";
import { cn } from "@/lib/cn";
import {
  LEAD_ERROR_MESSAGE,
  LEAD_SUCCESS_MESSAGE,
  submitLead,
} from "@/lib/client/submitLead";

const fieldClass =
  "w-full rounded-2xl glass-subtle px-4 py-3 text-sm text-ink placeholder:text-faint outline-none transition-all duration-300 focus:border-accent/50 focus:bg-white focus:ring-4 focus:ring-accent/15";

const emptyForm = {
  name: "",
  company: "",
  phone: "",
  message: "",
  website: "",
};

export default function ContactForm({
  submitLabel = "Получить разбор",
  className,
  source = "main-site",
  formName = "Contact form",
}: {
  submitLabel?: string;
  className?: string;
  source?: string;
  formName?: string;
}) {
  const pathname = usePathname();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [form, setForm] = useState(emptyForm);

  function update(key: keyof typeof emptyForm) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((f) => ({ ...f, [key]: e.target.value }));
      setSubmitError("");
    };
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (loading || submitted) return;

    if (!form.name.trim()) {
      setSubmitError("Укажите имя.");
      return;
    }

    if (!form.phone.trim()) {
      setSubmitError("Укажите телефон.");
      return;
    }

    if (form.phone.replace(/\D/g, "").length < 10) {
      setSubmitError("Укажите корректный номер телефона.");
      return;
    }

    setLoading(true);
    setSubmitError("");

    const result = await submitLead({
      source,
      page: pathname,
      formName,
      name: form.name,
      company: form.company,
      phone: form.phone,
      message: form.message,
      website: form.website,
    });

    setLoading(false);

    if (!result.success) {
      setSubmitError(result.error || LEAD_ERROR_MESSAGE);
      return;
    }

    setForm(emptyForm);
    setSubmitted(true);
  }

  return (
    <div
      className={cn(
        "edge-light relative overflow-hidden rounded-[28px] glass-strong p-6 sm:p-8",
        className
      )}
    >
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative flex flex-col items-center justify-center py-12 text-center"
          >
            <div className="flex size-14 items-center justify-center rounded-full bg-lime/15 text-lime">
              <Icon name="check" className="size-7" />
            </div>
            <h3 className="mt-5 text-xl font-semibold tracking-tight text-ink">
              Заявка отправлена
            </h3>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
              {LEAD_SUCCESS_MESSAGE}
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            noValidate
            className="relative space-y-4"
          >
            <input
              type="text"
              name="website"
              value={form.website}
              onChange={update("website")}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden
              className="pointer-events-none absolute -left-[9999px] h-0 w-0 opacity-0"
            />

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs font-medium text-muted">
                  Имя
                </label>
                <input
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Как к вам обращаться"
                  className={fieldClass}
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-muted">
                  Компания
                </label>
                <input
                  value={form.company}
                  onChange={update("company")}
                  placeholder="Название компании"
                  className={fieldClass}
                />
              </div>
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-medium text-muted">
                Телефон / WhatsApp
              </label>
              <input
                type="tel"
                value={form.phone}
                onChange={update("phone")}
                placeholder="+7 ___ ___ __ __"
                className={fieldClass}
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-medium text-muted">
                Что хотите улучшить?
              </label>
              <textarea
                value={form.message}
                onChange={update("message")}
                rows={4}
                placeholder="Где сейчас ручной процесс, потеря денег или нет прозрачности"
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
              {loading ? "Отправляем..." : submitLabel}
            </Button>
            <p className="text-center text-xs text-faint">
              Нажимая кнопку, вы соглашаетесь на обработку контактных данных.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
