import Link from "next/link";
import { cn } from "@/lib/cn";
import { Icon } from "./icons";
import { getAccent } from "@/lib/accent";
import { getSolution, type Accent } from "@/lib/solutions";
import { menuSolutions } from "@/lib/site";
import { industries, industryHref } from "@/lib/industries";

export const solutionMenuItems = menuSolutions
  .map((m) => {
    const s = getSolution(m.slug);
    return s
      ? {
          slug: m.slug,
          label: m.label,
          icon: s.icon,
          accent: s.accent,
          short: s.short,
        }
      : null;
  })
  .filter((x): x is NonNullable<typeof x> => Boolean(x));

type Item = {
  href: string;
  label: string;
  icon: string;
  accent: Accent;
  short: string;
};

export default function MegaMenu({
  type,
  onNavigate,
}: {
  type: "solutions" | "industries";
  onNavigate: () => void;
}) {
  const items: Item[] =
    type === "solutions"
      ? solutionMenuItems.map((s) => ({
          href: `/solutions/${s.slug}`,
          label: s.label,
          icon: s.icon,
          accent: s.accent,
          short: s.short,
        }))
      : industries.map((i) => ({
          href: industryHref(i.slug),
          label: i.title,
          icon: i.icon,
          accent: i.accent,
          short: i.description,
        }));

  const seeAll =
    type === "solutions"
      ? { href: "/solutions", label: "Все решения" }
      : { href: "/industries", label: "Все отрасли" };

  const label = type === "solutions" ? "Решения" : "Отрасли";

  return (
    <div>
      <div className="px-3 pb-1.5 pt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-faint">
        {label}
      </div>
      <div className="grid gap-0.5 sm:grid-cols-2">
        {items.map((item) => {
          const a = getAccent(item.accent);
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className="group flex items-center gap-3.5 rounded-2xl border border-transparent p-3 transition-all duration-200 hover:border-accent/15 hover:bg-accent/[0.06]"
            >
              <span
                className={cn(
                  "flex size-10 shrink-0 items-center justify-center rounded-xl glass-subtle transition-transform duration-200 group-hover:scale-105",
                  a.bg
                )}
              >
                <Icon name={item.icon} className={cn("size-[18px]", a.text)} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-semibold tracking-tight text-ink">
                  {item.label}
                </span>
                <span className="mt-0.5 block truncate text-xs leading-relaxed text-muted">
                  {item.short}
                </span>
              </span>
              <Icon
                name="arrow"
                className="size-4 shrink-0 -translate-x-1 text-accent opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
              />
            </Link>
          );
        })}
      </div>
      <Link
        href={seeAll.href}
        onClick={onNavigate}
        className="group mt-1.5 flex items-center justify-between rounded-2xl border border-accent/15 bg-accent/[0.05] px-4 py-3 text-sm font-semibold text-accent transition-colors duration-200 hover:bg-accent/10"
      >
        {seeAll.label}
        <Icon
          name="arrow"
          className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
        />
      </Link>
    </div>
  );
}
