import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import SectionLabel from "@/components/SectionLabel";
import Section from "@/components/Section";
import Hero from "@/components/Hero";
import ProductMockup from "@/components/ProductMockup";
import GlassCard from "@/components/GlassCard";
import SolutionCard from "@/components/SolutionCard";
import IndustryCard from "@/components/IndustryCard";
import ContactForm from "@/components/ContactForm";
import {
  FounderLead,
  ExperienceLogos,
} from "@/components/TeamSections";
import { Icon } from "@/components/icons";
import { primarySolutions } from "@/lib/solutions";
import { industries } from "@/lib/industries";
import { homeProcessSteps } from "@/lib/content";
import { getAccent } from "@/lib/accent";
import { cn } from "@/lib/cn";
import type { Accent } from "@/lib/solutions";

const heroBadges = ["CRM", "ERP / MES", "BI", "AI", "Traceability", "1С / SAP"];

const approach: { icon: string; title: string; text: string; accent: Accent }[] = [
  {
    icon: "search",
    title: "Находим разрывы",
    text: "Где процессы живут в Excel, WhatsApp и ручных отчётах.",
    accent: "accent",
  },
  {
    icon: "gauge",
    title: "Считаем эффект",
    text: "Что даст рост, экономию или прозрачность.",
    accent: "cyan",
  },
  {
    icon: "rocket",
    title: "Запускаем пилот",
    text: "Один модуль за 30 дней без большой перестройки.",
    accent: "teal",
  },
];

const pilots: { name: string; slug: string; icon: string; accent: Accent }[] = [
  { name: "B2B Order CRM", slug: "b2b-order-crm", icon: "crm", accent: "accent" },
  { name: "Production BI", slug: "demand-production-bi", icon: "bi", accent: "amber" },
  { name: "Traceability", slug: "traceability-haccp", icon: "trace", accent: "lime" },
  { name: "AI Forecast", slug: "ai-forecasting", icon: "ai", accent: "cyan" },
];

const reasons = [
  "Не заменяем вашу 1С / SAP",
  "Работаем поверх существующих процессов",
  "Делаем пилот перед большим проектом",
  "Проектируем интерфейсы для реальных сотрудников",
  "Соединяем продажи, склад, производство и BI",
];

export default function Home() {
  return (
    <>
      <Hero
        label="scaleloop.ai — цифровые системы для бизнеса"
        title={
          <>
            Софт, который делает бизнес{" "}
            <span className="text-gradient">управляемым</span>
          </>
        }
        subtitle="CRM, ERP/MES, BI и AI-системы, которые соединяют продажи, склад, производство, качество и аналитику."
        badges={heroBadges}
        actions={[
          { label: "Обсудить проект", href: "/contact" },
          { label: "Посмотреть решения", href: "/solutions", variant: "secondary" },
        ]}
        mockup={<ProductMockup />}
      />

      {/* Block 1 — Сначала экономика */}
      <Section
        label="Не разработка ради разработки"
        title="Сначала экономика. Потом система."
        intro="Сначала находим, где бизнес теряет деньги, время и контроль. Потом собираем измеримый цифровой пилот."
      >
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {approach.map((card, i) => {
            const a = getAccent(card.accent);
            return (
              <Reveal key={card.title} delay={i * 0.08}>
                <GlassCard accent={card.accent} className="h-full">
                  <div
                    className={cn(
                      "flex size-12 items-center justify-center rounded-2xl glass-subtle",
                      a.bg
                    )}
                  >
                    <Icon name={card.icon} className={cn("size-6", a.text)} />
                  </div>
                  <h3 className="relative mt-5 text-lg font-semibold tracking-tight text-ink">
                    {card.title}
                  </h3>
                  <p className="relative mt-2 text-[15px] leading-relaxed text-muted">
                    {card.text}
                  </p>
                </GlassCard>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Block 2 — Решения */}
      <Section
        label="Решения"
        title="Цифровой контур из понятных модулей"
        intro="Шесть направлений, из которых собирается управляемая система компании."
        accent="cyan"
      >
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {primarySolutions.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 0.07}>
              <SolutionCard solution={s} className="h-full" />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Block 3 — Отрасли */}
      <Section
        label="Отрасли"
        title="Решения под процессы вашей отрасли"
        intro="Адаптируем систему под то, где именно теряются деньги: продажи, производство, склад, логистика, качество."
        accent="teal"
      >
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind, i) => (
            <Reveal key={ind.slug} delay={(i % 4) * 0.05}>
              <IndustryCard industry={ind} />
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-10 text-center">
            <Button href="/industries" variant="secondary" withArrow>
              Все отрасли
            </Button>
          </div>
        </Reveal>
      </Section>

      {/* Block 4 — Как мы работаем */}
      <Section label="Процесс" title="От идеи до пилота" accent="violet" center>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {homeProcessSteps.map((step, i) => {
            const accents: Accent[] = ["accent", "cyan", "teal", "blue", "lime"];
            const a = getAccent(accents[i % accents.length]);
            return (
              <Reveal key={step.title} delay={i * 0.07}>
                <div className="edge-light group h-full rounded-[24px] glass p-5 transition-all duration-500 hover:-translate-y-1.5 hover:bg-white">
                  <div className={cn("text-4xl font-semibold tracking-tight", a.text)}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-3 text-base font-semibold tracking-tight text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Block 5 — Пилот за 30 дней */}
      <Section
        label="Пилот за 30 дней"
        title="Не нужно начинать с большой ERP"
        intro="Запустите один модуль и измерьте эффект."
        accent="lime"
      >
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pilots.map((p, i) => {
            const a = getAccent(p.accent);
            return (
              <Reveal key={p.slug} delay={(i % 4) * 0.06}>
                <GlassCard href={`/solutions/${p.slug}`} accent={p.accent} className="h-full">
                  <div
                    className={cn(
                      "flex size-12 items-center justify-center rounded-2xl glass-subtle",
                      a.bg
                    )}
                  >
                    <Icon name={p.icon} className={cn("size-6", a.text)} />
                  </div>
                  <h3 className="relative mt-5 text-base font-semibold tracking-tight text-ink">
                    {p.name}
                  </h3>
                  <span className="relative mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-faint transition-colors group-hover:text-ink">
                    Запустить пилот
                    <Icon
                      name="arrow"
                      className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </GlassCard>
              </Reveal>
            );
          })}
        </div>
        <Reveal>
          <div className="mt-10 text-center">
            <Button href="/contact" size="lg" withArrow>
              Выбрать пилот
            </Button>
          </div>
        </Reveal>
      </Section>

      {/* Block 6 — Почему scaleloop.ai */}
      <section className="relative py-20 sm:py-28">
        <Container>
          <Reveal>
            <div className="edge-light grid items-center gap-12 rounded-[36px] glass-strong p-8 sm:p-12 lg:grid-cols-2 lg:p-16">
              <div>
                <SectionLabel accent="violet">Почему scaleloop.ai</SectionLabel>
                <h2 className="mt-5 text-balance text-3xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-4xl">
                  Закрываем разрывы между отделами, а не просто пишем код
                </h2>
                <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted">
                  Превращаем сложные бизнес-процессы в понятные цифровые системы.
                </p>
              </div>
              <ul className="space-y-3">
                {reasons.map((r) => (
                  <li
                    key={r}
                    className="flex items-center gap-3.5 rounded-2xl glass-subtle px-5 py-4"
                  >
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-accent/15">
                      <Icon name="check" className="size-4 text-accent" />
                    </span>
                    <span className="text-[15px] font-medium text-ink">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Block 7 — Команда / основатель */}
      <FounderLead />
      <ExperienceLogos />

      {/* Final CTA + form */}
      <section className="relative py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <Reveal>
              <div>
                <SectionLabel accent="accent">Финальный шаг</SectionLabel>
                <h2 className="mt-5 text-balance text-3xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-4xl md:text-5xl">
                  Покажем, где ваш бизнес теряет деньги в процессах
                </h2>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
                  Предложим 1–2 пилота, с которых можно начать без большой
                  перестройки.
                </p>
                <div className="mt-8 space-y-3">
                  {[
                    "Короткий разбор ваших процессов",
                    "1–2 пилота с понятной экономикой",
                    "Без обязательной замены 1С / SAP",
                  ].map((t) => (
                    <div key={t} className="flex items-center gap-3">
                      <span className="flex size-6 items-center justify-center rounded-full bg-lime/15">
                        <Icon name="check" className="size-3.5 text-lime" />
                      </span>
                      <span className="text-[15px] text-muted">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal direction="left" delay={0.1}>
              <ContactForm />
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
