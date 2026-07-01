import { cn } from "@/lib/cn";
import { getAccent } from "@/lib/accent";
import { Icon } from "./icons";
import type { Accent } from "@/lib/solutions";

export default function FloatingPill({
  children,
  icon,
  accent = "accent",
  className,
  float = false,
}: {
  children: React.ReactNode;
  icon?: string;
  accent?: Accent;
  className?: string;
  float?: boolean;
}) {
  const a = getAccent(accent);
  return (
    <span
      className={cn(
        "edge-light inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-[13px] font-medium text-ink/90",
        float && "animate-float-card",
        className
      )}
    >
      {icon ? (
        <Icon name={icon} className={cn("size-4", a.text)} />
      ) : (
        <span className={cn("size-1.5 rounded-full", a.dot)} />
      )}
      {children}
    </span>
  );
}
