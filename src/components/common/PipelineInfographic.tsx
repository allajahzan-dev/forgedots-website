"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PROCESS } from "@/data/constants";
import { cn } from "@/lib/utils";

const NODE_COLORS = ["bg-indigo-600", "bg-amber-500"];
const RING_COLORS = ["ring-indigo-600", "ring-amber-500"];

export default function PipelineInfographic() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const lineDuration = 2.0;

  return (
    <div ref={ref} className="w-full will-change-transform">
      {/* Desktop: horizontal */}
      <div className="relative py-5 hidden md:block">
        {/* Line */}
        <svg
          viewBox="0 0 1200 4"
          preserveAspectRatio="none"
          className="absolute left-0 top-10 w-full h-1 z-0 rounded-full"
          aria-hidden
        >
          <motion.line
            x1="100"
            y1="2"
            x2="1100"
            y2="2"
            stroke="white"
            strokeOpacity="0.4"
            strokeWidth="2"
            strokeDasharray="6 6"
            initial={{ pathLength: 0 }}
            animate={inView ? { pathLength: 1 } : {}}
            transition={{ duration: lineDuration, ease: "linear" }}
          />
        </svg>

        {/* Processes */}
        <div className="relative grid grid-cols-6 gap-4 z-10">
          {PROCESS.map((p, i) => {
            const delay = (i / (PROCESS.length - 1)) * lineDuration;
            return (
              <div
                key={p.name}
                className="relative flex flex-col items-center text-center"
              >
                {/* Glowing ring effect */}
                <div className="relative mb-6 flex items-center justify-center">
                  {inView && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: [0, 0.6, 0], scale: [1, 1.5, 2] }}
                      transition={{ duration: 0.8, delay, ease: "easeOut" }}
                      className={cn(
                        "absolute inset-0 rounded-full",
                        NODE_COLORS[i % 2],
                      )}
                    />
                  )}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={inView ? { opacity: 1, scale: [0.5, 1.2, 1] } : {}}
                    transition={{
                      duration: 0.5,
                      delay,
                      ease: "easeOut",
                    }}
                    className={cn(
                      "relative z-10 size-12 flex items-center justify-center text-lg font-bold rounded-full ring-2 ring-offset-4 ring-offset-[#0f0e1a]",
                      NODE_COLORS[i % 2],
                      RING_COLORS[i % 2],
                    )}
                  >
                    {i + 1}
                  </motion.div>
                </div>

                {/* Process name and description */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: delay + 0.2 }}
                >
                  <h3 className="mb-1 text-sm font-semibold leading-tight">
                    {p.name}
                  </h3>
                  <p className="px-2 text-xs leading-relaxed text-primary-foreground/80">
                    {p.desc}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile: vertical */}
      <div className="relative pl-9 block md:hidden">
        <div className="absolute left-[19px] top-5 bottom-12 w-[2px] bg-white/15 z-0" />

        <motion.div
          className="absolute left-[19px] top-5 w-[2px] bg-white/50 origin-top z-0"
          initial={{ scaleY: 0 }}
          animate={inView ? { scaleY: 1 } : {}}
          transition={{ duration: lineDuration, ease: "linear" }}
          style={{ bottom: "48px" }}
        />

        <div className="space-y-10 z-10 relative">
          {PROCESS.map((p, i) => {
            const delay = (i / (PROCESS.length - 1)) * lineDuration;
            return (
              <div key={p.name} className="relative pl-6">
                <div className="absolute -left-9 top-0 flex items-center justify-center">
                  {inView && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: [0, 0.6, 0], scale: [1, 1.5, 2] }}
                      transition={{ duration: 0.8, delay, ease: "easeOut" }}
                      className={cn(
                        "absolute inset-0 rounded-full",
                        NODE_COLORS[i % 2],
                      )}
                    />
                  )}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={inView ? { opacity: 1, scale: [0.5, 1.2, 1] } : {}}
                    transition={{ duration: 0.5, delay, ease: "easeOut" }}
                    className={cn(
                      "relative z-10 size-10 flex items-center justify-center text-sm font-bold text-white rounded-full ring-2 ring-offset-[3px] ring-offset-[#0f0e1a]",
                      NODE_COLORS[i % 2],
                      RING_COLORS[i % 2],
                    )}
                  >
                    {i + 1}
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: delay + 0.2 }}
                >
                  <h3 className="mb-1 text-base font-semibold text-white">
                    {p.name}
                  </h3>
                  <p className="text-[13px] text-white/55">{p.desc}</p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
