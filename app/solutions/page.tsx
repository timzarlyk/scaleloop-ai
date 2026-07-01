import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import SolutionCard from "@/components/SolutionCard";
import CTASection from "@/components/CTASection";
import { solutions, primarySolutions } from "@/lib/solutions";

export const metadata: Metadata = {
  title: "Решения — CRM, ERP/MES, Traceability, BI и AI",
  description:
    "Цифровые решения scaleloop.ai: B2B Order CRM, ERP/MES-модули, Traceability & HACCP, BI-дашборды, AI-прогнозирование и внутренние платформы.",
};

const specialized = solutions.filter((s) => !s.primary);

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        label="Решения"
        title={<>Цифровой контур компании по частям</>}
        subtitle="Каждое направление можно запустить отдельным измеримым пилотом, а затем собрать в единую систему. Мы не заменяем вашу 1С/SAP — мы закрываем разрывы между процессами."
        badges={["CRM", "ERP/MES", "Traceability", "BI", "AI", "Internal Platforms"]}
        actions={[
          { label: "Обсудить проект", href: "/contact" },
          { label: "Как мы работаем", href: "/process", variant: "secondary" },
        ]}
      />

      <Section
        label="Базовые направления"
        title="Шесть систем, из которых собирается контур"
        intro="Универсальные направления, применимые к большинству производственных и торговых компаний."
      >
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {primarySolutions.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 0.08}>
              <SolutionCard solution={s} className="h-full" />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        label="Специализированные модули"
        title="Глубокие модули для пищевых производств"
        intro="Отраслевые решения, которые особенно сильно работают там, где важны рецептуры, качество и прогноз спроса."
        accent="lime"
      >
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {specialized.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.08}>
              <SolutionCard solution={s} className="h-full" />
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection
        title="Не знаете, с какого решения начать?"
        text="Проведём короткий разбор процессов и подскажем, какой пилот даст быстрый и измеримый эффект именно в вашем случае."
        primary={{ label: "Запросить карту цифровых разрывов", href: "/contact" }}
        secondary={{ label: "Посмотреть отрасли", href: "/industries" }}
      />
    </>
  );
}
