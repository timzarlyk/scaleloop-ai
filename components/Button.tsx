import Link from "next/link";
import { cn } from "@/lib/cn";
import { Icon } from "./icons";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

type CommonProps = {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  withArrow?: boolean;
  icon?: string;
  onDark?: boolean;
};

function variantClass(variant: Variant): string {
  if (variant === "primary") {
    return cn(
      "text-white",
      "bg-[linear-gradient(180deg,#6fb0ff_0%,#4d8dff_55%,#3f7bf0_100%)]",
      "shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_10px_30px_-8px_rgba(91,157,255,0.7)]",
      "hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_16px_44px_-10px_rgba(91,157,255,0.85)]"
    );
  }
  if (variant === "secondary") {
    return "glass text-ink hover:bg-white";
  }
  return "text-accent hover:text-white";
}

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-[15px]",
};

function inner(children: React.ReactNode, withArrow?: boolean, icon?: string) {
  return (
    <>
      {icon ? <Icon name={icon} className="size-[18px]" /> : null}
      <span>{children}</span>
      {withArrow ? (
        <Icon
          name="arrow"
          className="size-[18px] transition-transform duration-300 group-hover/btn:translate-x-0.5"
        />
      ) : null}
    </>
  );
}

const baseClass =
  "group/btn inline-flex cursor-pointer items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-base";

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  withArrow,
  icon,
  type = "button",
  ...rest
}: CommonProps &
  (
    | ({ href: string } & React.AnchorHTMLAttributes<HTMLAnchorElement>)
    | ({ href?: undefined } & React.ButtonHTMLAttributes<HTMLButtonElement>)
  )) {
  const classes = cn(baseClass, variantClass(variant), sizes[size], className);

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto");
    if (isExternal) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {inner(children, withArrow, icon)}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {inner(children, withArrow, icon)}
      </Link>
    );
  }

  return (
    <button
      type={type as "button" | "submit" | "reset"}
      className={classes}
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {inner(children, withArrow, icon)}
    </button>
  );
}

export default Button;
