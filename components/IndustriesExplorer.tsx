"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IndustryCard from "./IndustryCard";
import { cn } from "@/lib/cn";
import { industries, industryFilters } from "@/lib/industries";

export default function IndustriesExplorer() {
  const [active, setActive] = useState<string | null>(null);

  const filtered = active
    ? industries.filter((i) => i.tags.includes(active))
    : industries;

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <FilterChip
          label="Все"
          active={active === null}
          onClick={() => setActive(null)}
        />
        {industryFilters.map((f) => (
          <FilterChip
            key={f}
            label={f}
            active={active === f}
            onClick={() => setActive((cur) => (cur === f ? null : f))}
          />
        ))}
      </div>

      <motion.div
        layout
        className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((industry) => (
            <motion.div
              key={industry.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
            >
              <IndustryCard industry={industry} showPains />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-sm text-muted">
          Нет отраслей по этому фильтру. Мы всё равно сможем помочь — напишите нам.
        </p>
      )}
    </div>
  );
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300",
        active
          ? "border-accent/50 bg-accent/15 text-ink"
          : "glass-subtle text-muted hover:border-accent/30 hover:text-ink"
      )}
    >
      {label}
    </button>
  );
}
