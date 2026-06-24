"use client";
import { motion } from "framer-motion";
import { Database, Cpu, TrendingUp, ChevronRight } from "lucide-react";

const boxes = [
  {
    color: "#f59e0b",
    icon: Database,
    label: "Your Data",
    sub: "Fragmented. Siloed. Underused.",
  },
  {
    color: "#6d5adc",
    icon: Cpu,
    label: "ForgeDots",
    sub: "BI · Analytics · Gen AI",
  },
  {
    color: "#10b981",
    icon: TrendingUp,
    label: "Your Growth",
    sub: "Decisions. Efficiency. Revenue.",
  },
];

export default function StoryStrip() {
  return (
    <div className="mx-auto mt-2 flex flex-wrap items-stretch justify-center gap-3">
      {boxes.map((b, i) => {
        const Icon = b.icon;
        return (
          <div key={b.label} className="flex items-center gap-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 1.2 + i * 0.18,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="min-w-[200px] px-6 py-5 border border-zinc-200 text-left bg-white/5 border-white/10 rounded-[14px] backdrop-blur-md"
            >
              <div
                className="mb-3 size-9 inline-flex items-center justify-center bg-white rounded-[10px]"
                style={{
                  color: b.color,
                  boxShadow: `0 4px 12px ${b.color}40`,
                }}
              >
                <Icon size={18} />
              </div>
              <div
                className="mb-1 text-lg font-bold text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {b.label}
              </div>
              <div className="text-xs font-medium text-white/60">
                {b.sub}
              </div>
            </motion.div>

            {i < boxes.length - 1 && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 1.45 + i * 0.18 }}
                className="shrink-0 text-white/30"
              >
                <ChevronRight className="size-6" strokeWidth={1.5} />
              </motion.div>
            )}
          </div>
        );
      })}
    </div>
  );
}
