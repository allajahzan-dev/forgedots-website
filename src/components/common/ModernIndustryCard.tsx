"use client";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import type { INDUSTRIES } from "@/data/constants";
import { ACCENT_HEX } from "@/data/constants";
import { cn } from "@/lib/utils";

type Industry = (typeof INDUSTRIES)[number];

export default function ModernIndustryCard({
  industry,
  delay = 0,
}: {
  industry: Industry;
  delay?: number;
}) {
  const Icon = (Icons as any)[industry.icon] ?? Icons.Square;
  const accent = ACCENT_HEX[industry.accent];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -10 }}
      className="relative pt-10 h-full transform-gpu"
    >
      <div className="bg-background rounded-2xl h-full w-full pt-14 pb-8 px-2 flex flex-col items-center justify-center relative border shadow-md hover:shadow-lg transition-shadow">
        {/* Overflowing Circle */}
        <div
          className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full flex items-center justify-center shadow-sm border-4 border-background"
          style={{ background: accent.soft, color: accent.base }}
        >
          <Icon size={32} strokeWidth={1.5} />
        </div>

        <h3
          className={cn(
            "text-[16px] xl:text-[17px] font-bold text-foreground tracking-tight text-center",
          )}
        >
          {industry.name}
        </h3>
      </div>
    </motion.div>
  );
}
