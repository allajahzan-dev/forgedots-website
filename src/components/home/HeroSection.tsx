"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import StoryStrip from "@/components/common/StoryStrip";
import NetworkBackground from "@/components/animated/NetworkBackground";
import AuroraBg from "@/components/animated/AuroraBg";

import { STATS } from "@/data/constants";
import { cn } from "@/lib/utils";
import { bricolageGrotesque } from "@/fonts";
import { ArrowRight } from "lucide-react";

const wipe = {
  hidden: { clipPath: "inset(100% 0 0 0)" },
  show: (i: number) => ({
    clipPath: "inset(0% 0 0 0)",
    transition: {
      duration: 0.85,
      delay: i * 0.15,
      ease: [0.76, 0, 0.24, 1] as const,
    },
  }),
};

function Line({ i, children }: { i: number; children: React.ReactNode }) {
  return (
    <div className="overflow-hidden block">
      <motion.div
        custom={i}
        initial="hidden"
        animate="show"
        variants={wipe}
        className="block"
      >
        {children}
      </motion.div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative z-0 h-screen pt-40 pb-20 px-6 flex flex-col items-center justify-center overflow-hidden text-center">
      {/* Exact Nexaro Aurora Background */}
      <AuroraBg />

      {/* Interactive Data Network Layer */}
      <NetworkBackground />

      <div className="relative z-10 mx-auto space-y-8 text-primary-foreground">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 bg-background/5 border border-background/10 text-primary-foreground/80 text-[11px] font-semibold tracking-wide px-4 py-2 rounded-full">
            ⭐ Trusted by 20+ Organizations Across 5 Countries
          </span>
        </motion.div>

        {/* Title */}
        <h1
          className={cn(
            "text-[clamp(44px,8vw,64px)] font-extrabold leading-[1.02] tracking-tight",
            bricolageGrotesque.className,
          )}
        >
          <Line i={0}>Raw Data Into</Line>
          <Line i={1}>Intelligent Decisions.</Line>
        </h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.7 }}
          className="text-sm text-primary-foreground/80 max-w-lg mx-auto"
        >
          ForgeDots delivers end-to-end data intelligence — from engineering
          clean pipelines to deploying AI chatbots — so your team makes faster,
          smarter decisions every day.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mb-16 flex flex-wrap justify-center gap-2 transform-gpu"
        >
          <Link
            href="/services"
            className="inline-flex items-center justify-center h-10 px-5 rounded-full bg-background text-foreground text-sm font-semibold hover:shadow-[0_0_24px_rgba(109,90,220,0.4)] transition-all duration-300 gap-2"
          >
            {/* bg-linear-to-r from-violet-600 to-indigo-600 */}
            Explore Our Services <ArrowRight size={16} />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center h-10 px-5 rounded-full bg-background/5 border border-background/10 text-sm font-semibold hover:bg-white/10 transition-all duration-300"
          >
            Talk to Our Experts
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="max-w-[880px] mx-auto py-6 border-y flex flex-wrap items-center justify-center gap-0 border-background/10"
        >
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={cn(
                "min-w-[160px] px-6 flex-1 text-center",
                i !== 0 && "border-l border-background/10",
              )}
            >
              <div className="text-lg font-bold">
                {s.num}
                {s.suffix}
              </div>
              <div className="mt-1 text-xs text-primary-foreground/80">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
