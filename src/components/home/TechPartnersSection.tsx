import SectionWrapper from "@/components/common/SectionWrapper";
import SectionLabel from "@/components/common/SectionLabel";
import SectionTitle from "@/components/common/SectionTitle";
import SectionSubTitle from "@/components/common/SectionSubTitle";

import ScrollReveal from "@/components/animated/ScrollReveal";
import TechPills from "@/components/animated/TechMarquee";

import { TECH_ROW_1, TECH_ROW_2 } from "@/data/constants";

export default function TechPartnersSection() {
  return (
    <SectionWrapper className="bg-gray-100">
      <ScrollReveal className="space-y-5">
        <SectionLabel>Technology Partners</SectionLabel>
        <SectionTitle className="max-w-xl text-5xl">
          Best-in-class platforms. Proven expertise.
        </SectionTitle>
        <SectionSubTitle className="text-muted-foreground">
          Our team is certified and experienced across the platforms that lead
          enterprise data and AI today.
        </SectionSubTitle>
      </ScrollReveal>

      <div className="mask-[linear-gradient(to_right,transparent_0,black_15%,black_85%,transparent_100%)]">
        <TechPills items={TECH_ROW_1} duration={55} />
        <TechPills items={TECH_ROW_2} duration={55} reverse={true} />
      </div>
    </SectionWrapper>
  );
}
