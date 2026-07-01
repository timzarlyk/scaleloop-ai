import type { Accent } from "./solutions";

export type AccentStyle = {
  text: string;
  border: string;
  bg: string;
  ring: string;
  glow: string;
  dot: string;
  gradient: string;
};

export const accentStyles: Record<Accent, AccentStyle> = {
  accent: {
    text: "text-accent",
    border: "group-hover:border-accent/30",
    bg: "bg-accent/12",
    ring: "ring-accent/30",
    glow: "group-hover:shadow-[0_30px_60px_-26px_rgba(47,107,255,0.4)]",
    dot: "bg-accent",
    gradient: "from-accent/25",
  },
  cyan: {
    text: "text-cyan",
    border: "group-hover:border-cyan/30",
    bg: "bg-cyan/12",
    ring: "ring-cyan/30",
    glow: "group-hover:shadow-[0_30px_60px_-26px_rgba(6,182,212,0.38)]",
    dot: "bg-cyan",
    gradient: "from-cyan/25",
  },
  lime: {
    text: "text-lime",
    border: "group-hover:border-lime/30",
    bg: "bg-lime/12",
    ring: "ring-lime/30",
    glow: "group-hover:shadow-[0_30px_60px_-26px_rgba(132,204,22,0.35)]",
    dot: "bg-lime",
    gradient: "from-lime/25",
  },
  amber: {
    text: "text-amber",
    border: "group-hover:border-amber/30",
    bg: "bg-amber/12",
    ring: "ring-amber/30",
    glow: "group-hover:shadow-[0_30px_60px_-26px_rgba(245,158,11,0.35)]",
    dot: "bg-amber",
    gradient: "from-amber/25",
  },
  teal: {
    text: "text-teal",
    border: "group-hover:border-teal/30",
    bg: "bg-teal/12",
    ring: "ring-teal/30",
    glow: "group-hover:shadow-[0_30px_60px_-26px_rgba(20,184,166,0.38)]",
    dot: "bg-teal",
    gradient: "from-teal/25",
  },
  blue: {
    text: "text-blue",
    border: "group-hover:border-blue/30",
    bg: "bg-blue/12",
    ring: "ring-blue/30",
    glow: "group-hover:shadow-[0_30px_60px_-26px_rgba(59,130,246,0.4)]",
    dot: "bg-blue",
    gradient: "from-blue/25",
  },
  yellow: {
    text: "text-yellow",
    border: "group-hover:border-yellow/30",
    bg: "bg-yellow/12",
    ring: "ring-yellow/30",
    glow: "group-hover:shadow-[0_30px_60px_-26px_rgba(234,179,8,0.35)]",
    dot: "bg-yellow",
    gradient: "from-yellow/25",
  },
  violet: {
    text: "text-violet",
    border: "group-hover:border-violet/30",
    bg: "bg-violet/12",
    ring: "ring-violet/30",
    glow: "group-hover:shadow-[0_30px_60px_-26px_rgba(124,58,237,0.4)]",
    dot: "bg-violet",
    gradient: "from-violet/25",
  },
};

export function getAccent(a: Accent): AccentStyle {
  return accentStyles[a];
}

/** RGB-каналы акцента для построения rgba() (градиенты, кольца диаграммы). */
export const accentRgb: Record<Accent, string> = {
  accent: "47,107,255",
  cyan: "6,182,212",
  lime: "132,204,22",
  amber: "245,158,11",
  teal: "20,184,166",
  blue: "59,130,246",
  yellow: "234,179,8",
  violet: "124,58,237",
};

export function rgba(a: Accent, alpha: number): string {
  return `rgba(${accentRgb[a]},${alpha})`;
}
