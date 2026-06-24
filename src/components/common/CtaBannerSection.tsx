"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { bricolageGrotesque } from "@/fonts";

import SectionWrapper from "./SectionWrapper";
import SectionSubTitle from "./SectionSubTitle";
import SectionTitle from "./SectionTitle";
import AppButton from "./AppButton";
import { AnimateHeading } from "../animated/AnimatedHeading";
import { ArrowUpRight } from "lucide-react";

export default function CtaBannerSection() {
  return (
    <SectionWrapper className="overflow-hidden text-center rounded-b-[30px] md:rounded-b-[50px]">
      <span
        aria-hidden
        className="absolute left-[-80px] top-[-120px] size-40 md:size-56 lg:size-96 rounded-full bg-gray-100"
      />
      <span
        aria-hidden
        className="absolute bottom-[-100px] right-[-60px] size-36 md:size-64 lg:size-80 rounded-full bg-gray-100"
      />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative mx-auto space-y-5 transform-gpu"
      >
        <AnimateHeading className="mx-auto max-w-xl lg:max-w-4xl text-4xl lg:text-6xl">
          Ready to turn your data into your greatest asset?
        </AnimateHeading>
        <SectionSubTitle className="mx-auto text-zinc-500">
          Let's build your data strategy together.
        </SectionSubTitle>
        <AppButton
          href="/contact"
          className="bg-white hover:bg-[#0c1029] text-black hover:text-white border border-zinc-200 transition-all duration-300 rounded-full"
        >
          Start the Conversation <ArrowUpRight size={16} />
        </AppButton>
      </motion.div>
    </SectionWrapper>
  );
}
