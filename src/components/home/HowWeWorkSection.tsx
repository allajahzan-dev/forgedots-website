import SectionWrapper from "@/components/common/SectionWrapper";
import SectionLabel from "@/components/common/SectionLabel";
import SectionSubTitle from "@/components/common/SectionSubTitle";

import ScrollReveal from "@/components/animated/ScrollReveal";
import PipelineInfographic from "@/components/common/PipelineInfographic";
import { AnimateHeading } from "../animated/AnimatedHeading";

export default function HowWeWorkSection() {
  return (
    <SectionWrapper className="bg-[#0c1029] text-white">
      <ScrollReveal className="space-y-5">
        <SectionLabel>How We Work</SectionLabel>
        <AnimateHeading className="max-w-md lg:max-w-xl text-3xl md:text-4xl lg:text-5xl">
          A clear process. Measurable outcomes.
        </AnimateHeading>
        <SectionSubTitle className="text-zinc-300">
          Six disciplined steps from objective to deployment — engineered for
          repeatable, lasting results.
        </SectionSubTitle>
      </ScrollReveal>

      <PipelineInfographic />
    </SectionWrapper>
  );
}
