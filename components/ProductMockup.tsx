"use client";

import { motion } from "framer-motion";
import { Icon } from "./icons";
import { cn } from "@/lib/cn";
import { getAccent, rgba } from "@/lib/accent";
import type { Accent } from "@/lib/solutions";

export type FlowNode = { label: string; icon: string };
export type Kpi = { value: string; label: string };

const defaultFlow: FlowNode[] = [
  { label: "Sales", icon: "crm" },
  { label: "Inventory", icon: "logistics" },
  { label: "Production", icon: "manufacturing" },
  { label: "Quality", icon: "shield" },
  { label: "BI", icon: "bi" },
  { label: "AI", icon: "ai" },
];

const defaultKpis: Kpi[] = [
  { value: "+27%", label: "Повторные заказы" },
  { value: "−40%", label: "Ручной работы" },
  { value: "24/7", label: "Прозрачность" },
  { value: "30 дн.", label: "Пилот" },
];

const bars = [38, 52, 44, 67, 58, 79, 71, 92];

export default function ProductMockup({
  accent = "accent",
  title = "Контур компании",
  flow = defaultFlow,
  kpis = defaultKpis,
  className,
}: {
  accent?: Accent;
  title?: string;
  flow?: FlowNode[];
  kpis?: Kpi[];
  className?: string;
}) {
  const a = getAccent(accent);

  return (
    <div className={cn("relative mx-auto w-full max-w-[540px]", className)}>
      {/* ambient glow behind the stack */}
      <div
        className="pointer-events-none absolute -inset-10 -z-10 rounded-[48px] blur-3xl"
        style={{
          background: `radial-gradient(60% 60% at 50% 30%, ${rgba(
            accent,
            0.32
          )}, transparent 70%)`,
        }}
      />

      {/* main glass window */}
      <motion.div
        initial={{ opacity: 0, y: 28, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.21, 0.5, 0.25, 1] }}
        className="edge-light relative overflow-hidden rounded-[28px] glass-strong"
      >
        {/* window chrome */}
        <div className="flex items-center gap-2 border-b border-line px-5 py-3.5">
          <span className="size-2.5 rounded-full bg-ink/10" />
          <span className="size-2.5 rounded-full bg-ink/10" />
          <span className="size-2.5 rounded-full bg-ink/10" />
          <div className="mx-auto flex items-center gap-2 rounded-full glass-subtle px-3 py-1">
            <span className={cn("size-1.5 rounded-full", a.dot)} />
            <span className="text-[11px] font-medium text-muted">
              scaleloop.ai · {title.toLowerCase()}
            </span>
          </div>
          <span className="size-6 rounded-full glass-subtle" />
        </div>

        <div className="space-y-4 p-5">
          {/* KPI tiles */}
          <div className="grid grid-cols-2 gap-3">
            {kpis.slice(0, 4).map((k, i) => (
              <motion.div
                key={k.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
                className="edge-light rounded-2xl glass-subtle p-3.5"
              >
                <div className={cn("text-xl font-semibold tracking-tight", a.text)}>
                  {k.value}
                </div>
                <div className="mt-1 text-[11px] leading-tight text-faint">
                  {k.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* chart */}
          <div className="rounded-2xl glass-subtle p-4">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-medium text-muted">План / факт</span>
              <span className={cn("text-[11px] font-semibold", a.text)}>
                real-time
              </span>
            </div>
            <div className="mt-3 flex h-20 items-end gap-1.5">
              {bars.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: 0.45 + i * 0.05, duration: 0.5, ease: "easeOut" }}
                  className="flex-1 rounded-t-md"
                  style={{
                    background:
                      i >= bars.length - 2
                        ? `linear-gradient(180deg, ${rgba(accent, 0.95)}, ${rgba(
                            accent,
                            0.45
                          )})`
                        : "rgba(15,23,42,0.08)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* floating overlapping flow card (top-right) */}
      <motion.div
        initial={{ opacity: 0, y: -16, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.55, duration: 0.7, ease: [0.21, 0.5, 0.25, 1] }}
        className="absolute -right-4 -top-6 w-[210px] sm:-right-10"
      >
        <div className="edge-light animate-float-card rounded-2xl glass-strong p-3.5">
          <div className="mb-2.5 text-[10px] font-medium uppercase tracking-wider text-faint">
            Операционный контур
          </div>
          <div className="flex items-center justify-between">
            {flow.slice(0, 6).map((n, i) => (
              <div key={n.label} className="flex flex-1 items-center">
                <span
                  className={cn(
                    "flex size-6 items-center justify-center rounded-lg glass-subtle",
                    a.bg
                  )}
                >
                  <Icon name={n.icon} className={cn("size-3", a.text)} />
                </span>
                {i < Math.min(flow.length, 6) - 1 && (
                  <span className="h-px flex-1 bg-line" />
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* floating metric pill (bottom-left) */}
      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.7, ease: [0.21, 0.5, 0.25, 1] }}
        className="absolute -bottom-6 -left-3 sm:-left-8"
      >
        <div className="edge-light animate-float-card rounded-2xl glass-strong px-4 py-3 [animation-delay:-3s]">
          <div className="flex items-center gap-2.5">
            <span
              className={cn(
                "flex size-8 items-center justify-center rounded-lg glass-subtle",
                a.bg
              )}
            >
              <Icon name="ai" className={cn("size-4", a.text)} />
            </span>
            <div>
              <div className="text-sm font-semibold text-ink">AI Forecast</div>
              <div className="text-[10px] text-faint">прогноз спроса · 94%</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
