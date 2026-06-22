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
    <SectionWrapper className="py-32 pt-52">
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
              <SectionTitle className="text-6xl leading-tight">
                Ed-to-end data and AI — built for your business.
              </SectionTitle>
              <SectionSubTitle className="text-muted-foreground">
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
