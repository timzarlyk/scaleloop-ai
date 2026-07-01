import { cn } from "@/lib/cn";

export default function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
  onDark?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full glass-subtle px-3 py-1 text-xs font-medium text-muted transition-colors hover:text-ink",
        className
      )}
    >
      {children}
    </span>
  );
}
