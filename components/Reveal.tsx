"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

const offset = 26;

function variants(direction: Direction, fade: boolean): Variants {
  const map: Record<Direction, { x?: number; y?: number }> = {
    up: { y: offset },
    down: { y: -offset },
    left: { x: offset },
    right: { x: -offset },
    none: {},
  };
  return {
    hidden: fade ? { opacity: 0, ...map[direction] } : { ...map[direction] },
    visible: fade ? { opacity: 1, x: 0, y: 0 } : { x: 0, y: 0 },
  };
}

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  className,
  once = true,
  as = "div",
  fade = true,
}: {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
  once?: boolean;
  as?: "div" | "section" | "li" | "span" | "article";
  fade?: boolean;
}) {
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      variants={variants(direction, fade)}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.5, 0.25, 1] }}
    >
      {children}
    </MotionTag>
  );
}
