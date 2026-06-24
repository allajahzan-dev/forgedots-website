import ScrollReveal from "@/components/animated/ScrollReveal";
import ModernServiceCard from "@/components/common/ModernServiceCard";
import AnimatedLink from "@/components/common/AnimatedLink";
import SectionWrapper from "@/components/common/SectionWrapper";
import SectionLabel from "@/components/common/SectionLabel";
import SectionLeftCenterLayout from "@/components/common/SectionLeftCenterLayout";
import { AnimateHeading } from "@/components/animated/AnimatedHeading";

import { SERVICE_CARDS } from "@/data/constants";

export default function ModernServicesSection() {
  return (
    <SectionWrapper className="bg-gray-50">
      <ScrollReveal>
        <SectionLeftCenterLayout
          leftContent={<SectionLabel>Our Services</SectionLabel>}
          rightContent={
            <>
              <AnimateHeading className="max-w-xs md:max-w-sm lg:max-w-md text-xl md:text-2xl lg:text-3xl">
                Everything your data strategy needs — under one roof.
              </AnimateHeading>
              <AnimatedLink href="/services" text="See more" />
            </>
          }
        />
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {SERVICE_CARDS.map((c, i) => (
          <ModernServiceCard key={c.n} card={c} delay={i * 0.06} />
        ))}
      </div>
    </SectionWrapper>
  );
}
