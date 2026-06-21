import ScrollReveal from "@/components/animated/ScrollReveal";
import ModernIndustryCard from "@/components/common/ModernIndustryCard";
import SectionWrapper from "@/components/common/SectionWrapper";
import SectionLabel from "@/components/common/SectionLabel";
import SectionTitle from "@/components/common/SectionTitle";
import SectionSubTitle from "@/components/common/SectionSubTitle";
import SectionLeftCenterLayout from "@/components/common/SectionLeftCenterLayout";

import { INDUSTRIES } from "@/data/constants";

export default function IndustriesSection() {
  return (
    <SectionWrapper className="bg-background">
      <ScrollReveal>
        <SectionLeftCenterLayout
          leftContent={<SectionLabel>Industries We Serve</SectionLabel>}
          rightContent={
            <>
              <SectionTitle className="max-w-md text-3xl">
                Deep expertise in the sectors that matter.
              </SectionTitle>
              <SectionSubTitle className="text-muted-foreground">
                Expertise in Today's Technology, Solutions for Tomorrow's
                Challenges. Trust our seasoned team to navigate the
                ever-evolving landscape of technology, delivering innovative
                solutions that propel your business forward.
              </SectionSubTitle>
            </>
          }
        />
      </ScrollReveal>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-5">
        {INDUSTRIES.map((ind, i) => (
          <ModernIndustryCard key={ind.name} industry={ind} delay={i * 0.06} />
        ))}
      </div>
    </SectionWrapper>
  );
}
