"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";
import { Icon } from "./icons";
import { cn } from "@/lib/cn";

const fieldClass =
  "w-full rounded-2xl glass-subtle px-4 py-3 text-sm text-ink placeholder:text-faint outline-none transition-all duration-300 focus:border-accent/50 focus:bg-white focus:ring-4 focus:ring-accent/15";

export default function ContactForm({
  submitLabel = "Получить разбор",
  className,
}: {
  submitLabel?: string;
  className?: string;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    message: "",
  });

  function update(key: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
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
              Спасибо, {form.name || "коллега"}. Свяжемся с вами, проведём
              короткий разбор и предложим 1–2 пилота, которые можно запустить без
              большой перестройки.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="relative space-y-4"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs font-medium text-muted">
                  Имя
                </label>
                <input
                  required
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
                required
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
            <Button type="submit" size="lg" withArrow className="w-full">
              {submitLabel}
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
