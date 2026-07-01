import { cn } from "@/lib/cn";
import type { Accent } from "@/lib/solutions";
import { getAccent } from "@/lib/accent";

export default function SectionLabel({
  children,
  accent = "accent",
  className,
}: {
  children: React.ReactNode;
  accent?: Accent;
  className?: string;
}) {
  const a = getAccent(accent);
  return (
    <span
      className={cn(
        "edge-light inline-flex items-center gap-2 rounded-full glass-subtle px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted",
        className
      )}
    >
      <span className={cn("size-1.5 rounded-full", a.dot)} />
      {children}
    </span>
  );
}
