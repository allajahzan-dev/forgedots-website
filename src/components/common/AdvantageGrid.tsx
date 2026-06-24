"use client";
import { motion } from "framer-motion";
import { ADVANTAGES } from "@/data/constants";

import { cn } from "@/lib/utils";
import { bricolageGrotesque } from "@/fonts";

const PALETTES: Record<
  string,
  { bg: string; text: string; sub: string; border?: string }
> = {
  violet: { bg: "bg-[#6d5adc]", text: "text-white", sub: "text-white/80" },
  amber: {
    bg: "bg-[#f59e0b]",
    text: "text-[#0f0e1a]",
    sub: "text-[#0f0e1a]/70",
  },
  emerald: {
    bg: "bg-[#10b981]",
    text: "text-[#0f0e1a]",
    sub: "text-[#0f0e1a]/70",
  },
  dark: {
    bg: "bg-white/[0.06]",
    text: "text-white",
    sub: "text-white/60",
    border: "border border-zinc-200 border-white/[0.08]",
  },
};

export default function AdvantageGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {ADVANTAGES.map((a, i) => {
        const p = PALETTES[a.bg];
        return (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.5,
              delay: i * 0.08,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className={cn(
              "p-5 bg-white/5 hover:bg-white/10 text-white border border-zinc-200/10 shadow-lg rounded-2xl",
            )}
          >
            <div
              className={cn(
                "mb-2 text-lg font-semibold",
                bricolageGrotesque.className,
              )}
            >
              {a.title}
            </div>
            <div className="text-sm text-zinc-300">{a.desc}</div>
          </motion.div>
        );
      })}
    </div>
  );
}
