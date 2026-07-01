import Image from "next/image";
import { cn } from "@/lib/cn";
import { founder } from "@/lib/team";

export default function FounderCard({
  className,
  variant = "short",
}: {
  className?: string;
  variant?: "short" | "full";
}) {
  const bioText = variant === "full" ? founder.bio : founder.bioShort;
  return (
    <div
      className={cn(
        "group relative w-full max-w-[360px] overflow-hidden rounded-[36px] border border-slate-200/90 bg-white/[0.92] shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur-[28px] sm:max-w-[420px]",
        className
      )}
    >
      {/* portrait */}
      <div className="relative mx-6 mt-6 overflow-hidden rounded-[28px]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-2 size-[260px] -translate-x-1/2 rounded-full bg-accent/18 blur-[70px]" />
          <div className="absolute bottom-0 left-0 size-[180px] rounded-full bg-violet/14 blur-[70px]" />
          <div className="absolute bottom-2 right-0 size-[160px] rounded-full bg-cyan/12 blur-[70px]" />
        </div>
        <div className="relative flex h-[320px] items-end justify-center sm:h-[360px] md:max-h-[420px]">
          <Image
            src={founder.photo}
            alt={founder.alt}
            width={637}
            height={860}
            priority
            className="max-h-[320px] w-auto object-contain sm:max-h-[360px] [filter:drop-shadow(0_12px_24px_rgba(15,23,42,0.14))] transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>
      </div>

      {/* info */}
      <div className="p-6 sm:p-7">
        <h3 className="text-xl font-semibold tracking-tight text-slate-950">
          {founder.name}
        </h3>
        <p className="mt-1 text-sm font-semibold text-accent">{founder.role}</p>
        <p className="mt-4 text-[15px] leading-relaxed text-slate-700 opacity-100">
          {bioText}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {founder.badges.map((b) => (
            <span
              key={b}
              className="rounded-full border border-slate-200 bg-white/90 px-3 py-1.5 text-xs font-medium text-slate-700"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
