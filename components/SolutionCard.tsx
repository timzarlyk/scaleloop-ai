import { cn } from "@/lib/cn";
import { getAccent } from "@/lib/accent";
import { Icon } from "./icons";
import GlassCard from "./GlassCard";
import type { Solution } from "@/lib/solutions";

export default function SolutionCard({
  solution,
  className,
}: {
  solution: Solution;
  className?: string;
}) {
  const a = getAccent(solution.accent);
  return (
    <GlassCard
      href={`/solutions/${solution.slug}`}
      accent={solution.accent}
      className={className}
    >
      <div
        className={cn(
          "relative flex size-12 items-center justify-center rounded-2xl glass-subtle",
          a.bg
        )}
      >
        <Icon name={solution.icon} className={cn("size-6", a.text)} />
      </div>

      <h3 className="relative mt-5 text-lg font-semibold tracking-tight text-ink">
        {solution.name}
      </h3>
      <p className="relative mt-2 flex-1 text-[15px] leading-relaxed text-muted">
        {solution.short}
      </p>

      <span className="relative mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-faint transition-colors duration-300 group-hover:text-ink">
        Подробнее
        <Icon
          name="arrow"
          className="size-4 transition-transform duration-300 group-hover:translate-x-1"
        />
      </span>
    </GlassCard>
  );
}
