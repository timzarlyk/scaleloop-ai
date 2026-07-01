import { cn } from "@/lib/cn";
import { getAccent } from "@/lib/accent";
import type { Accent } from "@/lib/solutions";

export default function MetricPill({
  value,
  label,
  accent = "accent",
  className,
}: {
  value: string;
  label: string;
  accent?: Accent;
  className?: string;
}) {
  const a = getAccent(accent);
  return (
    <div
      className={cn(
        "edge-light rounded-2xl glass px-4 py-3",
        className
      )}
    >
      <div className={cn("text-lg font-semibold tracking-tight", a.text)}>
        {value}
      </div>
      <div className="mt-0.5 text-[11px] leading-tight text-faint">{label}</div>
    </div>
  );
}
