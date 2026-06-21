"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { bricolageGrotesque } from "@/fonts";
import SectionWrapper from "./SectionWrapper";
import SectionSubTitle from "./SectionSubTitle";
import SectionTitle from "./SectionTitle";

export default function CtaBanner() {
  return (
    <SectionWrapper className="overflow-hidden py-32 px-10 md:px-20 lg:px-40 text-center rounded-b-[30px] md:rounded-b-[50px]">
      <span
        aria-hidden
        className="absolute left-[-80px] top-[-120px] h-[400px] w-[400px] rounded-full bg-gray-100"
      />
      <span
        aria-hidden
        className="absolute bottom-[-100px] right-[-60px] h-[320px] w-[320px] rounded-full bg-gray-100"
      />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative mx-auto space-y-8 transform-gpu"
      >
        <SectionTitle
          className={cn(
            "mx-auto max-w-4xl text-6xl",
            bricolageGrotesque.className,
          )}
        >
          Ready to turn your data into your greatest asset?
        </SectionTitle>
        <SectionSubTitle className="mx-auto text-muted-foreground">
          Let's build your data strategy together.
        </SectionSubTitle>
        <Link
          href="/contact"
          className="mt-2 inline-flex items-center justify-center gap-2 h-10 px-5 rounded-full border text-sm font-semibold bg-background text-foreground hover:bg-[#0c1029] hover:text-primary-foreground transition-all duration-300"
        >
          Start the Conversation →
        </Link>
      </motion.div>
    </SectionWrapper>
  );
}
