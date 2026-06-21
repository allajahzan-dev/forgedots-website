import Link from "next/link";
import ScrollReveal from "@/components/animated/ScrollReveal";
import AdvantageGrid from "@/components/common/AdvantageGrid";
import SectionWrapper from "@/components/common/SectionWrapper";
import SectionLabel from "@/components/common/SectionLabel";
import SectionTitle from "@/components/common/SectionTitle";
import SectionSubTitle from "@/components/common/SectionSubTitle";

import { ArrowUpRight } from "lucide-react";

export default function WhyForgeDotsSection() {
  return (
    <SectionWrapper className="bg-[#0c1029] text-primary-foreground">
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] items-center gap-12 lg:gap-20">
        <ScrollReveal className="space-y-5 transform-gpu">
          <SectionLabel className="text-primary-foreground">
            Why ForgeDots
          </SectionLabel>
          <SectionTitle className="max-w-xl text-5xl">
            We don't just build dashboards. We build data-driven organizations.
          </SectionTitle>
          <SectionSubTitle className="text-primary-foreground/80">
            ForgeDots was built on a simple belief — data should drive every
            decision, at every level. With presence in UAE and India, we bring
            30+ years of combined expertise to every engagement, working as a
            true extension of your team.
          </SectionSubTitle>
          <Link
            href="/contact"
            className="mt-2 inline-flex items-center justify-center gap-2 h-10 px-5 rounded-full border text-sm font-semibold hover:bg-background hover:text-foreground transition-all duration-300"
          >
            Meet Our Team <ArrowUpRight size={14} />
          </Link>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <AdvantageGrid />
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
}
