import Link from "next/link";
import ScrollReveal from "@/components/animated/ScrollReveal";
import AdvantageGrid from "@/components/common/AdvantageGrid";
import SectionWrapper from "@/components/common/SectionWrapper";
import SectionLabel from "@/components/common/SectionLabel";
import SectionSubTitle from "@/components/common/SectionSubTitle";
import AppButton from "@/components/common/AppButton";

import { ArrowUpRight } from "lucide-react";
import { AnimateHeading } from "../animated/AnimatedHeading";

export default function WhyForgeDotsSection() {
  return (
    <SectionWrapper className="bg-[#0c1029] text-white">
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] items-center gap-10">
        <ScrollReveal className="space-y-5 transform-gpu">
          <SectionLabel>Why ForgeDots</SectionLabel>
          <AnimateHeading className="max-w-xl text-3xl md:text-4xl lg:text-5xl">
            We don't just build dashboards. We build data-driven organizations.
          </AnimateHeading>
          <SectionSubTitle className="text-zinc-300">
            ForgeDots was built on a simple belief — data should drive every
            decision, at every level. With presence in UAE and India, we bring
            30+ years of combined expertise to every engagement, working as a
            true extension of your team.
          </SectionSubTitle>
          <AppButton
            href="/contact"
            className="hover:bg-white hover:text-black border border-zinc-200 transition-all duration-300 rounded-full"
          >
            Meet Our Team <ArrowUpRight size={16} />
          </AppButton>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <AdvantageGrid />
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
}
