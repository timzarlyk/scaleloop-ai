import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import CheckList from "@/components/CheckList";
import MetricCard from "@/components/MetricCard";
import SolutionCard from "@/components/SolutionCard";
import CTASection from "@/components/CTASection";
import { getAccent } from "@/lib/accent";
import { solutions, getSolution } from "@/lib/solutions";

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) return { title: "Решение не найдено" };
  return {
    title: `${solution.name} — ${solution.hero.title}`,
    description: solution.hero.subtitle,
  };
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) notFound();

  const a = getAccent(solution.accent);
  const related = solutions.filter((s) => s.slug !== solution.slug).slice(0, 3);

  return (
    <>
      <PageHero
        label={solution.name}
        title={solution.hero.title}
        subtitle={solution.hero.subtitle}
        accent={solution.accent}
        badges={solution.badges}
        actions={[
          { label: solution.cta, href: "/contact" },
          { label: "Все решения", href: "/solutions", variant: "secondary" },
        ]}
      />

      {/* Метрики */}
      <section className="relative pb-4">
        <Container>
          <div className="grid gap-4 sm:grid-cols-3">
            {solution.metrics.map((m, i) => (
              <Reveal key={m.label} delay={i * 0.08}>
                <MetricCard
                  value={m.value}
                  label={m.label}
                  accent={solution.accent}
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Блоки */}
      <Section
        label="Детали решения"
        title="Что входит и какой эффект"
        accent={solution.accent}
      >
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {solution.blocks.map((block, i) => (
            <Reveal key={block.label} delay={(i % 2) * 0.08}>
              <div
                className={`edge-light group relative h-full overflow-hidden rounded-[28px] glass p-7 transition-all duration-500 hover:-translate-y-1.5 hover:bg-white ${a.border}`}
              >
                <div className="flex items-center gap-2.5">
                  <span className={`size-1.5 rounded-full ${a.dot}`} />
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-faint">
                    {block.label}
                  </span>
                </div>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-ink">
                  {block.title}
                </h3>
                <CheckList
                  items={block.items}
                  accent={solution.accent}
                  className="mt-5"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Связанные решения */}
      <Section
        label="Смежные решения"
        title="С чем хорошо сочетается"
        intro="Эти направления усиливают друг друга и часто внедряются вместе в единый цифровой контур."
        accent="cyan"
      >
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 0.08}>
              <SolutionCard solution={s} className="h-full" />
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection
        title="Запустим этот модуль пилотом за 30 дней"
        text="Соберём измеримый пилот с понятной экономикой — без замены вашего учётного ядра и без рискованного внедрения «всё сразу»."
        primary={{ label: solution.cta, href: "/contact" }}
        secondary={{ label: "Как мы работаем", href: "/process" }}
      />
    </>
  );
}
