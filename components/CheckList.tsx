import { cn } from "@/lib/cn";
import { getAccent } from "@/lib/accent";
import { Icon } from "./icons";
import type { Accent } from "@/lib/solutions";

export default function CheckList({
  items,
  accent = "accent",
  className,
}: {
  items: string[];
  accent?: Accent;
  className?: string;
}) {
  const a = getAccent(accent);
  return (
    <ul className={cn("space-y-3", className)}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span
            className={cn(
              "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full glass-subtle",
              a.bg
            )}
          >
            <Icon name="check" className={cn("size-3", a.text)} />
          </span>
          <span className="text-[15px] leading-relaxed text-muted">{item}</span>
        </li>
      ))}
    </ul>
  );
}
