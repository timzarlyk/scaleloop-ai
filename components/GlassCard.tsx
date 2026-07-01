import Link from "next/link";
import { cn } from "@/lib/cn";
import { getAccent } from "@/lib/accent";
import type { Accent } from "@/lib/solutions";

export default function GlassCard({
  children,
  href,
  accent = "accent",
  className,
  interactive = true,
  glow = true,
}: {
  children: React.ReactNode;
  href?: string;
  accent?: Accent;
  className?: string;
  interactive?: boolean;
  glow?: boolean;
}) {
  const a = getAccent(accent);
  const classes = cn(
    "edge-light group relative flex flex-col overflow-hidden rounded-[28px] glass p-7 transition-all duration-500",
    interactive && "hover:-translate-y-1.5 hover:bg-white",
    interactive && a.border,
    interactive && glow && a.glow,
    className
  );

  const decor = (
    <>
      {/* accent corner glow */}
      {glow && (
        <span
          className={cn(
            "pointer-events-none absolute -right-16 -top-16 size-44 rounded-full bg-gradient-to-br to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100",
            a.gradient
          )}
        />
      )}
      {/* glossy shimmer sweep */}
      {interactive && (
        <span className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:animate-[shimmer_1.1s_ease-out]" />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {decor}
        {children}
      </Link>
    );
  }
  return (
    <div className={classes}>
      {decor}
      {children}
    </div>
  );
}
