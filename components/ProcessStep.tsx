import { cn } from "@/lib/cn";

export default function ProcessStep({
  index,
  title,
  description,
  isLast,
}: {
  index: number;
  title: string;
  description?: string;
  isLast?: boolean;
}) {
  return (
    <div className="group relative flex gap-5">
      <div className="flex flex-col items-center">
        <div className="edge-light flex size-12 shrink-0 items-center justify-center rounded-full glass font-mono text-sm font-semibold text-accent transition-all duration-500 group-hover:border-accent/40">
          {String(index).padStart(2, "0")}
        </div>
        {!isLast && (
          <div className="mt-1 w-px flex-1 bg-gradient-to-b from-line to-transparent" />
        )}
      </div>
      <div className={cn("pb-10", isLast && "pb-0")}>
        <h3 className="text-base font-semibold tracking-tight text-ink transition-colors group-hover:text-accent">
          {title}
        </h3>
        {description && (
          <p className="mt-1.5 max-w-xl text-[15px] leading-relaxed text-muted">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
