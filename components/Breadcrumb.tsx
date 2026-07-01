import Link from "next/link";

export type Crumb = { label: string; href?: string };

export default function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav
      aria-label="Хлебные крошки"
      className="flex flex-wrap items-center gap-2 text-sm text-faint"
    >
      {items.map((item, i) => {
        const last = i === items.length - 1;
        return (
          <span key={item.label} className="flex items-center gap-2">
            {item.href && !last ? (
              <Link
                href={item.href}
                className="transition-colors hover:text-ink"
              >
                {item.label}
              </Link>
            ) : (
              <span className={last ? "text-muted" : ""}>{item.label}</span>
            )}
            {!last && <span className="text-faint/50">/</span>}
          </span>
        );
      })}
    </nav>
  );
}
