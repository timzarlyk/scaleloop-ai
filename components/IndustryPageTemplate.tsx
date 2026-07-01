import Hero from "./Hero";
import Section from "./Section";
import Reveal from "./Reveal";
import Breadcrumb from "./Breadcrumb";
import ProductMockup from "./ProductMockup";
import FeatureTile from "./FeatureTile";
import SolutionCard from "./SolutionCard";
import CTASection from "./CTASection";
import { cn } from "@/lib/cn";
import { getAccent } from "@/lib/accent";
import { getSolution } from "@/lib/solutions";
import type { Industry } from "@/lib/industries";

const neutralKpis = [
  { value: "30 дн.", label: "Пилот за 30 дней" },
  { value: "real-time", label: "Прозрачность процессов" },
  { value: "−40%", label: "Меньше ручной работы" },
  { value: "1С / SAP", label: "Без замены ядра" },
];

export default function IndustryPageTemplate({ industry }: { industry: Industry }) {
  const a = getAccent(industry.accent);
  const ctaLabel = industry.ctaLabel ?? "Получить карту цифровых разрывов";
  const relevant = industry.relevantSolutions
    .map((slug) => getSolution(slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <>
      <Hero
        label={industry.title}
        title={industry.hero.title}
        subtitle={industry.hero.subtitle}
        accent={industry.accent}
        badges={industry.tags}
        breadcrumb={
          <Breadcrumb
            items={[
              { label: "Главная", href: "/" },
              { label: "Отрасли", href: "/industries" },
              { label: industry.title },
            ]}
          />
        }
        actions={[
          { label: ctaLabel, href: "/contact" },
          { label: "Обсудить пилот", href: "/contact", variant: "secondary" },
        ]}
        mockup={
          <ProductMockup
            accent={industry.accent}
            title={industry.hero.hubTitle}
            flow={industry.flow.map((f) => ({ label: f.label, icon: f.icon }))}
            kpis={neutralKpis}
          />
        }
      />

      {/* Где теряются деньги */}
      <Section
        label="Цифровые разрывы"
        title="Где теряются деньги"
        intro="Эти потери не видны в учётной системе — деньги утекают между процессами."
        accent="amber"
      >
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industry.losses.map((l, i) => (
            <Reveal key={l.title} delay={(i % 4) * 0.05}>
              <FeatureTile
                icon={l.icon}
                title={l.title}
                accent={l.accent}
                index={i + 1}
                className="h-full"
              />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Что можно внедрить */}
      <Section
        label="Что можно внедрить"
        title="Модули под отрасль"
        intro="Каждый модуль запускается отдельным пилотом — без замены вашей 1С/SAP."
        accent={industry.accent}
      >
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industry.modules.map((m, i) => (
            <Reveal key={m.name} delay={(i % 4) * 0.06}>
              <FeatureTile
                icon={m.icon}
                title={m.name}
                text={m.text}
                accent={m.accent}
                className="h-full"
              />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Кому подходит */}
      <Section
        label="Сегменты"
        title="Кому подходит"
        accent="cyan"
      >
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {industry.segments.map((s, i) => (
            <Reveal key={s} delay={(i % 5) * 0.04}>
              <div className="edge-light group flex items-center gap-2.5 rounded-full glass px-5 py-2.5 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white">
                <span className={cn("size-1.5 rounded-full", a.dot)} />
                <span className="text-sm font-medium text-ink">{s}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Вопросы диагностики */}
      <Section
        label="Диагностика"
        title="Вопросы для диагностики"
        intro="С этих вопросов начинается поиск цифровых разрывов."
        accent="accent"
      >
        <div className="mx-auto mt-12 grid max-w-4xl gap-4 md:grid-cols-2">
          {industry.questions.map((q, i) => (
            <Reveal key={q} delay={(i % 2) * 0.06}>
              <div className="edge-light flex items-start gap-4 rounded-2xl glass p-5">
                <span
                  className={cn(
                    "flex size-8 shrink-0 items-center justify-center rounded-full glass-subtle font-mono text-sm font-semibold",
                    a.bg,
                    a.text
                  )}
                >
                  {i + 1}
                </span>
                <p className="pt-1 text-[15px] leading-relaxed text-ink">{q}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Пилот за 30 дней */}
      <Section
        label="Пилот за 30 дней"
        title="Не нужно начинать с большой ERP"
        intro="Начните с одного измеримого модуля без перестройки компании."
        accent={industry.accent}
      >
        <div className="mx-auto mt-10 max-w-2xl">
          {industry.pilots.map((p) => (
            <div
              key={p.title}
              className="edge-light rounded-[28px] glass p-7 text-center"
            >
              <h3 className="text-xl font-semibold tracking-tight text-ink">
                {p.title}
              </h3>
              <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-muted">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Relevant solutions */}
      <Section
        label="Решения"
        title="Что обычно внедряют"
        accent={industry.accent}
      >
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {relevant.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 4) * 0.06}>
              <SolutionCard solution={s} className="h-full" />
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection
        title="Покажем, где ваш бизнес теряет деньги в процессах"
        text="Оставьте заявку — предложим 1–2 пилота, с которых можно начать без большой перестройки."
        primary={{ label: "Получить разбор", href: "/contact" }}
        secondary={{ label: "Все решения", href: "/solutions" }}
      />
    </>
  );
}
