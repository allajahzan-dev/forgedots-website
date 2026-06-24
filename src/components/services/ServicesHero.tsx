"use client";

import { cn } from "@/lib/utils";
import { bricolageGrotesque } from "@/fonts";

import ScrollReveal from "@/components/animated/ScrollReveal";
import SectionWrapper from "@/components/common/SectionWrapper";
import SectionLeftCenterLayout from "@/components/common/SectionLeftCenterLayout";
import SectionTitle from "@/components/common/SectionTitle";
import SectionSubTitle from "@/components/common/SectionSubTitle";
import SectionLabel from "@/components/common/SectionLabel";

export default function ServicesHero() {
  const currentYear = new Date().getFullYear();

  return (
    <SectionWrapper className="pt-28 md:pt-36 lg:pt-44">
      <ScrollReveal>
        <SectionLeftCenterLayout
          leftContent={
            <SectionLabel
              className={cn("text-sm mt-3", bricolageGrotesque.className)}
            >
              22 — {currentYear}
            </SectionLabel>
          }
          rightContent={
            <>
              <SectionTitle className="text-3xl md:text-4xl lg:text-6xl">
                Ed-to-end data and AI — built for your business.
              </SectionTitle>
              <SectionSubTitle className="text-zinc-500">
                Six interconnected services that cover every layer of your
                alytics and AI journey.
              </SectionSubTitle>
            </>
          }
        />
      </ScrollReveal>
    </SectionWrapper>
  );
}
