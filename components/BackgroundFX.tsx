import { cn } from "@/lib/cn";

/**
 * Локальные световые пятна для hero/секций поверх глобального ambient-фона.
 * Чисто декоративный слой.
 */
export default function BackgroundFX({
  className,
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "hero" | "subtle";
  dark?: boolean;
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className
      )}
    >
      {variant === "hero" && (
        <>
          <div className="absolute -top-32 left-1/4 size-[560px] -translate-x-1/2 rounded-full bg-accent/12 blur-[160px]" />
          <div className="absolute top-0 right-0 size-[420px] rounded-full bg-violet/10 blur-[160px]" />
        </>
      )}
      {variant === "default" && (
        <>
          <div className="absolute -top-24 right-10 size-[400px] rounded-full bg-accent/14 blur-[150px]" />
          <div className="absolute bottom-0 -left-20 size-[400px] rounded-full bg-teal/12 blur-[150px]" />
        </>
      )}
      {variant === "subtle" && (
        <div className="absolute left-1/2 top-1/3 size-[520px] -translate-x-1/2 rounded-full bg-accent/14 blur-[160px]" />
      )}
    </div>
  );
}
