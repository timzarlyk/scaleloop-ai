import Container from "./Container";
import SectionLabel from "./SectionLabel";
import Reveal from "./Reveal";
import { cn } from "@/lib/cn";
import type { Accent } from "@/lib/solutions";

export default function Section({
  label,
  title,
  intro,
  accent = "accent",
  children,
  className,
  id,
  center = true,
}: {
  label?: string;
  title?: React.ReactNode;
  intro?: React.ReactNode;
  accent?: Accent;
  children?: React.ReactNode;
  className?: string;
  id?: string;
  center?: boolean;
}) {
  return (
    <section id={id} className={cn("relative py-20 sm:py-28", className)}>
      <Container>
        {(label || title || intro) && (
          <Reveal>
            <div className={cn("max-w-2xl", center && "mx-auto text-center")}>
              {label && <SectionLabel accent={accent}>{label}</SectionLabel>}
              {title && (
                <h2 className="mt-4 text-balance text-3xl font-semibold leading-[1.08] tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
                  {title}
                </h2>
              )}
              {intro && (
                <p
                  className={cn(
                    "mt-4 text-pretty text-lg leading-relaxed text-slate-600",
                    center && "mx-auto max-w-xl"
                  )}
                >
                  {intro}
                </p>
              )}
            </div>
          </Reveal>
        )}
        {children}
      </Container>
    </section>
  );
}
