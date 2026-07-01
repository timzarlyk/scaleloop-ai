import Container from "./Container";
import Button from "./Button";
import Reveal from "./Reveal";
import { cn } from "@/lib/cn";

type Action = { label: string; href: string };

export default function CTASection({
  title,
  text,
  primary,
  secondary,
  className,
}: {
  title: string;
  text?: string;
  primary?: Action;
  secondary?: Action;
  className?: string;
}) {
  return (
    <section className={cn("relative py-20 sm:py-28", className)}>
      <Container>
        <Reveal>
          <div className="edge-light relative overflow-hidden rounded-[36px] glass-strong px-6 py-16 text-center sm:px-12 sm:py-24">
            <div className="pointer-events-none absolute -top-28 left-1/2 size-[520px] -translate-x-1/2 rounded-full bg-accent/25 blur-[140px]" />
            <div className="pointer-events-none absolute -bottom-32 right-0 size-[400px] rounded-full bg-violet/20 blur-[140px]" />
            <div className="pointer-events-none absolute -bottom-24 left-0 size-[360px] rounded-full bg-cyan/16 blur-[140px]" />

            <div className="relative mx-auto max-w-3xl">
              <h2 className="text-balance text-3xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-4xl md:text-5xl">
                {title}
              </h2>
              {text && (
                <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted">
                  {text}
                </p>
              )}
              {(primary || secondary) && (
                <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  {primary && (
                    <Button href={primary.href} size="lg" withArrow className="w-full sm:w-auto">
                      {primary.label}
                    </Button>
                  )}
                  {secondary && (
                    <Button
                      href={secondary.href}
                      variant="secondary"
                      size="lg"
                      className="w-full sm:w-auto"
                    >
                      {secondary.label}
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
