import Container from "./Container";
import BackgroundFX from "./BackgroundFX";
import Reveal from "./Reveal";
import Button from "./Button";
import Badge from "./Badge";
import SectionLabel from "./SectionLabel";
import { cn } from "@/lib/cn";
import type { Accent } from "@/lib/solutions";

type Action = { label: string; href: string; variant?: "primary" | "secondary" };

export default function Hero({
  label,
  title,
  subtitle,
  accent = "accent",
  badges,
  actions,
  mockup,
  breadcrumb,
}: {
  label?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  accent?: Accent;
  badges?: string[];
  actions?: Action[];
  mockup?: React.ReactNode;
  breadcrumb?: React.ReactNode;
}) {
  const hasMockup = Boolean(mockup);

  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <BackgroundFX variant="hero" />
      <Container>
        {breadcrumb && <Reveal className="mb-8">{breadcrumb}</Reveal>}
        <div
          className={cn(
            hasMockup
              ? "grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]"
              : "mx-auto max-w-3xl text-center"
          )}
        >
          <div>
            {label && (
              <Reveal>
                <SectionLabel accent={accent}>{label}</SectionLabel>
              </Reveal>
            )}
            <Reveal delay={0.05}>
              <h1
                className={cn(
                  "mt-5 text-balance font-semibold leading-[1.04] tracking-tight text-ink",
                  "text-[2.6rem] sm:text-6xl md:text-7xl"
                )}
              >
                {title}
              </h1>
            </Reveal>
            {subtitle && (
              <Reveal delay={0.1}>
                <p
                  className={cn(
                    "mt-6 text-pretty text-lg leading-relaxed text-muted sm:text-xl",
                    hasMockup ? "max-w-xl" : "mx-auto max-w-2xl"
                  )}
                >
                  {subtitle}
                </p>
              </Reveal>
            )}
            {actions && actions.length > 0 && (
              <Reveal delay={0.15}>
                <div
                  className={cn(
                    "mt-8 flex flex-col gap-3 sm:flex-row",
                    !hasMockup && "sm:justify-center"
                  )}
                >
                  {actions.map((act) => (
                    <Button
                      key={act.label}
                      href={act.href}
                      size="lg"
                      variant={act.variant ?? "primary"}
                      withArrow={act.variant !== "secondary"}
                      className="w-full sm:w-auto"
                    >
                      {act.label}
                    </Button>
                  ))}
                </div>
              </Reveal>
            )}
            {badges && badges.length > 0 && (
              <Reveal delay={0.2}>
                <div
                  className={cn(
                    "mt-8 flex flex-wrap gap-2",
                    !hasMockup && "justify-center"
                  )}
                >
                  {badges.map((b) => (
                    <Badge key={b}>{b}</Badge>
                  ))}
                </div>
              </Reveal>
            )}
          </div>

          {hasMockup && (
            <Reveal delay={0.15} direction="left">
              {mockup}
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
