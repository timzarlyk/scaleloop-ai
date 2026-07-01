import { cn } from "@/lib/cn";
import { getAccent } from "@/lib/accent";
import { Icon } from "./icons";
import type { Accent } from "@/lib/solutions";

export default function FeatureTile({
  icon = "alert",
  title,
  text,
  accent = "accent",
  index,
  className,
}: {
  icon?: string;
  title: string;
  text?: string;
  accent?: Accent;
  index?: number;
  className?: string;
}) {
  const a = getAccent(accent);
  return (
    <div
      className={cn(
        "edge-light group relative flex h-full flex-col overflow-hidden rounded-[26px] glass p-6 transition-all duration-500 hover:-translate-y-1.5 hover:bg-white",
        a.border,
        a.glow,
        className
      )}
    >
      <div className="flex items-center gap-3">
        <div
          className={cn(
            "flex size-10 shrink-0 items-center justify-center rounded-xl glass-subtle",
            a.bg
          )}
        >
          <Icon name={icon} className={cn("size-5", a.text)} />
        </div>
        {typeof index === "number" && (
          <span className="ml-auto font-mono text-xs text-faint">
            {String(index).padStart(2, "0")}
          </span>
        )}
      </div>
      <h3 className="mt-4 text-[15px] font-semibold leading-snug tracking-tight text-ink">
        {title}
      </h3>
      {text && (
        <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
      )}
    </div>
  );
}
