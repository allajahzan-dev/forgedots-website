import SectionWrapper from "@/components/common/SectionWrapper";
import SectionLabel from "@/components/common/SectionLabel";
import SectionTitle from "@/components/common/SectionTitle";
import SectionSubTitle from "@/components/common/SectionSubTitle";

import ScrollReveal from "@/components/animated/ScrollReveal";
import PipelineInfographic from "@/components/common/PipelineInfographic";

export default function HowWeWorkSection() {
  return (
    <SectionWrapper className="bg-[#0c1029] text-primary-foreground">
      <ScrollReveal className="space-y-5">
        <SectionLabel>How We Work</SectionLabel>
        <SectionTitle className="max-w-xl text-5xl">
          A clear process. Measurable outcomes.
        </SectionTitle>
        <SectionSubTitle className="text-primary-foreground/80">
          Six disciplined steps from objective to deployment — engineered for
          repeatable, lasting results.
        </SectionSubTitle>
      </ScrollReveal>
      <PipelineInfographic />
    </SectionWrapper>
  );
}
