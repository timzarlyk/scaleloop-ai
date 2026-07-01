import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { methodology } from "@/lib/content";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Как мы работаем — методология от Discovery до Rollout",
  description:
    "Методология scaleloop.ai: Discovery, Process Mapping, Digital Gap Map, Pilot Scope, UX/UI Prototype, Development, Integration, Rollout и Continuous Improvement.",
};

const accentCycle = ["accent", "cyan", "lime", "amber"] as const;

export default function ProcessPage() {
  return (
    <>
      <PageHero
        label="Как мы работаем"
        title="От бизнес-проблемы к работающей системе"
        subtitle="Наша методология устроена так, чтобы вы видели результат и экономику на каждом шаге — и не платили за «большую систему», которая может не взлететь."
        actions={[
          { label: "Обсудить проект", href: "/contact" },
          { label: "Посмотреть решения", href: "/solutions", variant: "secondary" },
        ]}
      />

      <Section
        label="Методология"
        title="Девять шагов с измеримым результатом"
        intro="Каждый этап имеет понятный результат. Мы не уходим в разработку, пока не ясна экономика и приоритет первого пилота."
      >
        <div className="mt-14 grid gap-x-14 md:grid-cols-2">
          {methodology.map((step, i) => {
            const accent = accentCycle[i % accentCycle.length];
            const isLast = i === methodology.length - 1;
            return (
              <Reveal key={step.title} delay={(i % 2) * 0.06}>
                <div className="group relative flex gap-5">
                  <div className="flex flex-col items-center">
                    <div
                      className={cn(
                        "edge-light relative flex size-12 shrink-0 items-center justify-center rounded-full glass font-mono text-sm font-semibold transition-all duration-500",
                        accent === "accent" && "text-accent group-hover:border-accent/50",
                        accent === "cyan" && "text-cyan group-hover:border-cyan/50",
                        accent === "lime" && "text-lime group-hover:border-lime/50",
                        accent === "amber" && "text-amber group-hover:border-amber/50"
                      )}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    {!isLast && (
                      <div className="mt-1 w-px flex-1 bg-gradient-to-b from-line to-transparent" />
                    )}
                  </div>
                  <div className="pb-10">
                    <div className="flex flex-wrap items-baseline gap-x-3">
                      <h3 className="text-lg font-semibold text-ink">
                        {step.title}
                      </h3>
                      <span className="font-mono text-xs uppercase tracking-[0.16em] text-faint">
                        {step.en}
                      </span>
                    </div>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section
        label="Принципы"
        title="Что остаётся неизменным на любом проекте"
        accent="cyan"
      >
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Сначала экономика, потом код",
              text: "Мы не пишем строчку кода, пока не понятно, какую потерю закрывает решение.",
            },
            {
              title: "Пилот, который можно измерить",
              text: "У каждого пилота есть метрики, по которым видно эффект.",
            },
            {
              title: "Без замены вашего ядра",
              text: "Закрываем разрывы между системами, а не переписываем 1С/SAP.",
            },
            {
              title: "Интерфейсы под людей",
              text: "Проектируем под реальных сотрудников цеха, склада и продаж.",
            },
            {
              title: "Поэтапное масштабирование",
              text: "Расширяем только то, что доказало экономический смысл.",
            },
            {
              title: "Прозрачность на каждом шаге",
              text: "Регулярные демо и понятный результат на каждом этапе.",
            },
          ].map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.06}>
              <div className="edge-light h-full rounded-[26px] glass p-6 transition-all duration-500 hover:-translate-y-1.5 hover:bg-white">
                <h3 className="text-base font-semibold tracking-tight text-ink">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection
        title="Начнём с разбора ваших процессов"
        text="Покажем, где теряются деньги, и предложим первый пилот с понятной экономикой."
        primary={{ label: "Запросить разбор", href: "/contact" }}
        secondary={{ label: "Посмотреть решения", href: "/solutions" }}
      />
    </>
  );
}
