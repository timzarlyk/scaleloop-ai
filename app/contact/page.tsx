import type { Metadata } from "next";
import Container from "@/components/Container";
import BackgroundFX from "@/components/BackgroundFX";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import ContactForm from "@/components/ContactForm";
import { Icon } from "@/components/icons";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Контакты — запросить разбор процессов",
  description:
    "Оставьте заявку: проведём короткий разбор процессов и предложим 1–2 пилота, которые можно запустить без большой перестройки компании.",
};

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <BackgroundFX variant="hero" />
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <Reveal>
              <SectionLabel accent="lime">Контакты</SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
                Покажем, где ваш бизнес теряет деньги в процессах
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
                Опишите, где у вас сейчас ручной процесс, потеря денег или
                отсутствие прозрачности. Мы предложим, с какого пилота лучше
                начать.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-9 space-y-3">
                <a
                  href={site.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="edge-light group flex items-center gap-4 rounded-2xl glass p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#25D366]/40"
                >
                  <span className="flex size-12 items-center justify-center rounded-xl glass-subtle bg-[#25D366]/15 text-[#25D366]">
                    <WhatsAppIcon className="size-6" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-ink">
                      Написать в WhatsApp
                    </span>
                    <span className="block text-sm text-slate-600">
                      {site.whatsapp} — быстрый ответ
                    </span>
                  </span>
                  <Icon
                    name="arrow"
                    className="ml-auto size-5 text-faint transition-transform duration-300 group-hover:translate-x-1 group-hover:text-ink"
                  />
                </a>

                <a
                  href={`mailto:${site.email}`}
                  className="edge-light group flex items-center gap-4 rounded-2xl glass p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40"
                >
                  <span className="flex size-12 items-center justify-center rounded-xl glass-subtle bg-accent/15 text-accent">
                    <Icon name="mail" className="size-6" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-ink">
                      Написать на почту
                    </span>
                    <span className="block text-sm text-slate-600">{site.email}</span>
                  </span>
                  <Icon
                    name="arrow"
                    className="ml-auto size-5 text-faint transition-transform duration-300 group-hover:translate-x-1 group-hover:text-ink"
                  />
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="edge-light mt-9 rounded-2xl glass p-6">
                <p className="text-sm font-medium text-ink">
                  Что вы получите после заявки
                </p>
                <div className="mt-4 space-y-2.5">
                  {[
                    "Короткий разбор ваших процессов",
                    "1–2 пилота с понятной экономикой",
                    "Рекомендации без обязательной замены 1С/SAP",
                  ].map((t) => (
                    <div key={t} className="flex items-center gap-3">
                      <span className="flex size-5 items-center justify-center rounded-full bg-lime/15">
                        <Icon name="check" className="size-3 text-lime" />
                      </span>
                      <span className="text-sm text-muted">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal direction="left" delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
