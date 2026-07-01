import { cn } from "@/lib/cn";
import { getAccent } from "@/lib/accent";
import type { Accent } from "@/lib/solutions";

export default function MetricCard({
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
        "edge-light group relative rounded-[26px] glass p-6 transition-all duration-500 hover:-translate-y-1.5 hover:bg-white",
        a.border,
        a.glow,
        className
      )}
    >
      <div
        className={cn(
          "text-3xl font-semibold tracking-tight sm:text-4xl",
          a.text
        )}
      >
        {value}
      </div>
      <div className="mt-2 text-sm leading-snug text-muted">{label}</div>
    </div>
  );
}
