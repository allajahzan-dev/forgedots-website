"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { bricolageGrotesque } from "@/fonts";
import { ArrowUpRight } from "lucide-react";

import AppButton from "@/components/common/AppButton";
import NetworkBackground from "@/components/animated/NetworkBackground";
import AuroraBg from "@/components/animated/AuroraBg";
import { AnimateHeading } from "@/components/animated/AnimatedHeading";

import { STATS } from "@/data/constants";

export default function HeroSection() {
  return (
    <section className="relative z-0 py-32 pb-12 md:pb-16 lg:pb-20 px-6 flex flex-col items-center justify-center overflow-hidden text-center">
      {/* Exact Nexaro Aurora Background */}
      <AuroraBg />

      {/* Interactive Data Network Layer */}
      <NetworkBackground />

      <div className="relative z-10 mx-auto space-y-8 text-white">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 bg-white/5 border border-zinc-200/10 text-zinc-300 text-[11px] font-semibold tracking-wide px-4 py-2 rounded-full">
            ⭐ Trusted by 20+ Organizations Across 5 Countries
          </span>
        </motion.div>

        {/* Title */}
        <AnimateHeading
          className={cn(
            bricolageGrotesque.className,
            "text-3xl md:text-4xl lg:text-6xl font-extrabold tracking-tight",
          )}
        >
          Raw Data Into <br /> Intelligent Decisions.
        </AnimateHeading>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-base text-zinc-300 max-w-lg mx-auto"
        >
          ForgeDots delivers end-to-end data intelligence from engineering clean
          pipelines to deploying AI chatbots - so your team makes faster,
          smarter decisions every day.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.5 }}
          className="mb-12 flex flex-wrap justify-center gap-2 transform-gpu"
        >
          <AppButton
            href="/services"
            className="bg-white hover:bg-white text-black hover:shadow-[0_0_24px_rgba(109,90,220,0.4)] transition-all duration-300 rounded-full"
          >
            Explore Services <ArrowUpRight size={16} />
          </AppButton>
          <AppButton
            href="/contact"
            className="bg-white/5 hover:bg-white/10 text-white border border-white transition-all duration-300 rounded-full"
          >
            Contact Us
          </AppButton>
        </motion.div>

        {/* Stats */}
        <div className="mx-auto py-5 grid grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-y-0 items-center justify-center">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 + i * 0.2, duration: 0.5 }}
              className={cn(
                "p-4 py-0 text-center border-white/10",
                i % 2 !== 0 && "border-l",
                i !== 0 && "md:border-l",
              )}
            >
              <div className="text-xl md:text-lg font-bold">
                {s.num}
                {s.suffix}
              </div>
              <div className="mt-1 text-[11px] md:text-xs text-zinc-300">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
