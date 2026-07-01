import type { Metadata } from "next";
import Container from "@/components/Container";
import BackgroundFX from "@/components/BackgroundFX";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";
import {
  FounderLead,
  ExperienceLogos,
  TeamModel,
} from "@/components/TeamSections";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Команда — продуктово-инженерная команда scaleloop.ai",
  description:
    "scaleloop.ai — продуктово-инженерная команда, которая с 2022 года проектирует CRM, ERP/MES-модули, BI, AI-решения и внутренние платформы для бизнеса.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-10 sm:pt-40 sm:pb-12">
        <BackgroundFX variant="hero" />
        <Container>
          <div className="mx-auto max-w-[760px] text-center">
            <Reveal>
              <SectionLabel accent="accent">О нас</SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-slate-950 sm:text-5xl md:text-6xl">
                Мы строим системы, которые помогают бизнесу расти и видеть
                процессы
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">
                scaleloop.ai — продуктово-инженерная команда, которая с 2022 года
                проектирует CRM, ERP/MES-модули, BI, AI-решения и внутренние
                платформы для компаний, где рост зависит от управляемости.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Founder */}
      <FounderLead founderBio="full" />

      {/* Experience */}
      <ExperienceLogos />

      {/* Team model */}
      <TeamModel />

      {/* CTA */}
      <section className="relative py-20 sm:py-28">
        <Container>
          <Reveal>
            <div className="edge-light relative overflow-hidden rounded-[36px] glass-strong px-6 py-16 text-center sm:px-12 sm:py-24">
              <div className="pointer-events-none absolute -top-28 left-1/2 size-[520px] -translate-x-1/2 rounded-full bg-accent/25 blur-[140px]" />
              <div className="pointer-events-none absolute -bottom-32 right-0 size-[400px] rounded-full bg-violet/20 blur-[140px]" />
              <div className="pointer-events-none absolute -bottom-24 left-0 size-[360px] rounded-full bg-cyan/16 blur-[140px]" />
              <div className="relative mx-auto max-w-3xl">
                <h2 className="text-balance text-3xl font-semibold leading-[1.08] tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
                  Обсудим, где ваш бизнес может расти быстрее
                </h2>
                <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-slate-600">
                  Короткий разговор — и предложим, с какого пилота лучше начать.
                </p>
                <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Button
                    href={site.whatsappLink}
                    size="lg"
                    icon="whatsapp"
                    className="w-full sm:w-auto"
                  >
                    Написать в WhatsApp
                  </Button>
                  <Button
                    href={`mailto:${site.email}`}
                    variant="secondary"
                    size="lg"
                    icon="mail"
                    className="w-full sm:w-auto"
                  >
                    Написать на почту
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
