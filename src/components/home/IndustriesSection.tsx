import ScrollReveal from "@/components/animated/ScrollReveal";
import ModernIndustryCard from "@/components/common/ModernIndustryCard";
import SectionWrapper from "@/components/common/SectionWrapper";
import SectionLabel from "@/components/common/SectionLabel";
import SectionSubTitle from "@/components/common/SectionSubTitle";
import SectionLeftCenterLayout from "@/components/common/SectionLeftCenterLayout";

import { INDUSTRIES } from "@/data/constants";
import { AnimateHeading } from "../animated/AnimatedHeading";

export default function IndustriesSection() {
  return (
    <SectionWrapper className="bg-white">
      <ScrollReveal>
        <SectionLeftCenterLayout
          leftContent={<SectionLabel>Industries We Serve</SectionLabel>}
          rightContent={
            <>
              <AnimateHeading className="max-w-xs md:max-w-sm lg:max-w-md text-xl md:text-2xl lg:text-3xl">
                Deep expertise in the sectors that matter.
              </AnimateHeading>
              <SectionSubTitle className="text-zinc-500">
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
