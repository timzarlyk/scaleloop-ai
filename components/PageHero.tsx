import Container from "./Container";
import SectionLabel from "./SectionLabel";
import Badge from "./Badge";
import Button from "./Button";
import BackgroundFX from "./BackgroundFX";
import Reveal from "./Reveal";
import { cn } from "@/lib/cn";
import type { Accent } from "@/lib/solutions";

type Action = { label: string; href: string; variant?: "primary" | "secondary" };

export default function PageHero({
  label,
  title,
  subtitle,
  accent = "accent",
  badges,
  actions,
}: {
  label?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  accent?: Accent;
  badges?: string[];
  actions?: Action[];
  align?: "center" | "left";
}) {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
      <BackgroundFX variant="hero" />
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          {label && (
            <Reveal>
              <SectionLabel accent={accent}>{label}</SectionLabel>
            </Reveal>
          )}
          <Reveal delay={0.05}>
            <h1 className="mt-5 text-balance text-[2.6rem] font-semibold leading-[1.04] tracking-tight text-ink sm:text-6xl md:text-7xl">
              {title}
            </h1>
          </Reveal>
          {subtitle && (
            <Reveal delay={0.1}>
              <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted sm:text-xl">
                {subtitle}
              </p>
            </Reveal>
          )}
          {badges && badges.length > 0 && (
            <Reveal delay={0.15}>
              <div className="mt-7 flex flex-wrap justify-center gap-2">
                {badges.map((b) => (
                  <Badge key={b}>{b}</Badge>
                ))}
              </div>
            </Reveal>
          )}
          {actions && actions.length > 0 && (
            <Reveal delay={0.2}>
              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                {actions.map((a) => (
                  <Button
                    key={a.label}
                    href={a.href}
                    size="lg"
                    variant={a.variant ?? "primary"}
                    withArrow={a.variant !== "secondary"}
                    className={cn("w-full sm:w-auto")}
                  >
                    {a.label}
                  </Button>
                ))}
              </div>
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
