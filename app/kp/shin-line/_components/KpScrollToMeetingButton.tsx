"use client";

import { Icon } from "@/components/icons";
import { cn } from "@/lib/cn";

const baseClass =
  "group/btn inline-flex cursor-pointer items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-base";

const primaryClass = cn(
  "text-white",
  "bg-[linear-gradient(180deg,#6fb0ff_0%,#4d8dff_55%,#3f7bf0_100%)]",
  "shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_10px_30px_-8px_rgba(91,157,255,0.7)]",
  "hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_16px_44px_-10px_rgba(91,157,255,0.85)]"
);

export default function KpScrollToMeetingButton() {
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    const target = document.getElementById("meeting-request");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", "#meeting-request");
    }
  }

  return (
    <a
      href="#meeting-request"
      onClick={handleClick}
      className={cn(baseClass, primaryClass, "h-12 px-6 text-[15px]")}
    >
      <span>Обсудить диагностику</span>
      <Icon
        name="arrow"
        className="size-[18px] transition-transform duration-300 group-hover/btn:translate-x-0.5"
      />
    </a>
  );
}
