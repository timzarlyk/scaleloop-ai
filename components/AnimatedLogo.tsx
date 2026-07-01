"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

/* growth chart, hand-drawn path on a 64×64 grid:
   low-left → rise → soft dip → confident rise up-right → arrow */
const CHART_PATH = "M 14 42 L 24 32 Q 27 29 30 32 L 35 38 L 50 23";
const ARROW_PATH = "M 42 23 L 50 23 L 50 31";

const CYCLE = 4.6; // seconds for one full draw+hold loop

export default function AnimatedLogo({
  className,
  compact = false,
  showWordmark = true,
}: {
  className?: string;
  compact?: boolean;
  showWordmark?: boolean;
}) {
  const reduceMotion = useReducedMotion();

  const lineAnim = reduceMotion
    ? { pathLength: 1, opacity: 1 }
    : {
        pathLength: [0, 1, 1],
        opacity: [0.35, 1, 1],
      };
  const lineTransition = reduceMotion
    ? { duration: 0 }
    : {
        duration: CYCLE,
        times: [0, 0.32, 1],
        ease: "easeInOut" as const,
        repeat: Infinity,
      };

  const arrowAnim = reduceMotion
    ? { pathLength: 1, opacity: 1, scale: 1 }
    : {
        pathLength: [0, 0, 1, 1],
        opacity: [0, 0, 1, 1],
        scale: [0.7, 0.7, 1, 1],
      };
  const arrowTransition = reduceMotion
    ? { duration: 0 }
    : {
        duration: CYCLE,
        times: [0, 0.3, 0.42, 1],
        ease: "easeOut" as const,
        repeat: Infinity,
      };

  const iconSize = compact ? "size-8" : "size-9"; // 32px / 36px
  const svgSize = compact ? "size-[22px]" : "size-[25px]";

  return (
    <Link
      href="/"
      aria-label="scaleloop.ai — на главную"
      className={cn(
        "group/logo inline-flex h-11 cursor-pointer items-center gap-2.5",
        className
      )}
    >
      <span
        className={cn(
          "relative flex shrink-0 items-center justify-center overflow-hidden rounded-[13px]",
          "border border-white/60",
          "shadow-[inset_0_1px_0_rgba(255,255,255,0.55),0_6px_16px_-6px_rgba(47,107,255,0.55)]",
          "transition-[transform,box-shadow] duration-300 ease-out",
          "group-hover/logo:-translate-y-px",
          "group-hover/logo:shadow-[inset_0_1px_0_rgba(255,255,255,0.65),0_10px_22px_-6px_rgba(47,107,255,0.7)]",
          iconSize
        )}
      >
        {/* premium gradient fill */}
        <span
          className="absolute inset-0 bg-[linear-gradient(140deg,#5b9bff_0%,#2f6bff_42%,#7c3aed_74%,#06b6d4_104%)]"
          aria-hidden
        />
        {/* glossy top reflection */}
        <span
          className="absolute inset-x-0 top-0 h-1/2 bg-[linear-gradient(180deg,rgba(255,255,255,0.4),transparent)]"
          aria-hidden
        />

        {/* gentle shine sweep over the line */}
        {!reduceMotion && (
          <motion.span
            className="pointer-events-none absolute -inset-y-2 w-1/3 skew-x-[-12deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.5),transparent)]"
            initial={{ x: "-150%" }}
            animate={{ x: ["-150%", "-150%", "260%"] }}
            transition={{
              duration: CYCLE,
              times: [0, 0.5, 0.72],
              ease: "easeInOut",
              repeat: Infinity,
            }}
            aria-hidden
          />
        )}

        <svg
          viewBox="0 0 64 64"
          className={cn("relative z-[1]", svgSize)}
          fill="none"
          aria-hidden
        >
          <motion.path
            d={CHART_PATH}
            stroke="white"
            strokeWidth={6.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={reduceMotion ? false : { pathLength: 0, opacity: 0.35 }}
            animate={lineAnim}
            transition={lineTransition}
          />
          <motion.path
            d={ARROW_PATH}
            stroke="white"
            strokeWidth={6.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ originX: "50px", originY: "23px" }}
            initial={
              reduceMotion ? false : { pathLength: 0, opacity: 0, scale: 0.7 }
            }
            animate={arrowAnim}
            transition={arrowTransition}
          />
        </svg>
      </span>

      {showWordmark && (
        <span className="text-[19px] font-[680] lowercase leading-none tracking-[-0.03em] text-[#0F172A]">
          scaleloop
          <span className="font-[620] text-[#64748B] transition-colors duration-300 group-hover/logo:text-[#475569]">
            .ai
          </span>
        </span>
      )}
    </Link>
  );
}
