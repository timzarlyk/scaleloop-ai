import { cn } from "@/lib/cn";
import { getAccent } from "@/lib/accent";
import { Icon } from "./icons";
import GlassCard from "./GlassCard";
import { industryHref, type Industry } from "@/lib/industries";

export default function IndustryCard({
  industry,
  showPains = false,
}: {
  industry: Industry;
  showPains?: boolean;
}) {
  const a = getAccent(industry.accent);
  const pains = industry.losses.slice(0, 3);

  return (
    <GlassCard
      href={industryHref(industry.slug)}
      accent={industry.accent}
      className="h-full"
    >
      <div className="relative flex items-start justify-between gap-4">
        <div
          className={cn(
            "flex size-11 items-center justify-center rounded-2xl glass-subtle",
            a.bg
          )}
        >
          <Icon name={industry.icon} className={cn("size-[22px]", a.text)} />
        </div>
        <Icon
          name="arrow"
          className="size-5 -rotate-45 text-faint transition-all duration-300 group-hover:rotate-0 group-hover:text-ink"
        />
      </div>

      <h3 className="relative mt-4 text-lg font-semibold tracking-tight text-ink">
        {industry.title}
      </h3>
      <p className="relative mt-2 text-[15px] leading-relaxed text-muted">
        {industry.description}
      </p>

      {showPains && (
        <ul className="relative mt-4 space-y-2 border-t border-line pt-4">
          {pains.map((p) => (
            <li key={p.title} className="flex items-start gap-2.5">
              <span className={cn("mt-1.5 size-1.5 shrink-0 rounded-full", a.dot)} />
              <span className="text-sm leading-relaxed text-faint">{p.title}</span>
            </li>
          ))}
        </ul>
      )}

      <span
        className={cn(
          "relative mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-medium transition-colors duration-300",
          a.text
        )}
      >
        Открыть
        <Icon
          name="arrow"
          className="size-4 transition-transform duration-300 group-hover:translate-x-1"
        />
      </span>
    </GlassCard>
  );
}
