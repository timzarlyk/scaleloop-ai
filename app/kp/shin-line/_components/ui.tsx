import { cn } from "@/lib/cn";
import Container from "@/components/Container";

export function KpSection({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 sm:py-20 lg:py-24",
        id === "meeting-request" && "scroll-mt-24",
        className
      )}
    >
      <Container>{children}</Container>
    </section>
  );
}

export function KpHeading({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "text-balance text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl lg:text-4xl",
        className
      )}
    >
      {children}
    </h2>
  );
}

export function KpLead({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "mt-4 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg",
        className
      )}
    >
      {children}
    </p>
  );
}

export function KpCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "edge-light rounded-2xl glass p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift sm:p-6",
        className
      )}
    >
      {children}
    </div>
  );
}

export function KpPill({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full glass-subtle px-3 py-1 text-xs font-medium text-slate-600",
        className
      )}
    >
      {children}
    </span>
  );
}
