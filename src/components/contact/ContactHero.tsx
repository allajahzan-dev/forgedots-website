"use client";

import { cn } from "@/lib/utils";
import { bricolageGrotesque } from "@/fonts";

import ScrollReveal from "@/components/animated/ScrollReveal";
import SectionWrapper from "@/components/common/SectionWrapper";
import SectionLeftCenterLayout from "@/components/common/SectionLeftCenterLayout";
import SectionTitle from "@/components/common/SectionTitle";
import SectionSubTitle from "@/components/common/SectionSubTitle";
import SectionLabel from "@/components/common/SectionLabel";

export default function ContactHero() {
  const currentYear = new Date().getFullYear();

  return (
    <SectionWrapper className="pt-28 md:pt-36 lg:pt-44">
      <ScrollReveal>
        <SectionLeftCenterLayout
          leftContent={
            <SectionLabel
              className={cn("text-sm mt-3", bricolageGrotesque.className)}
            >
              2022 — {currentYear}
            </SectionLabel>
          }
          rightContent={
            <>
              <SectionTitle className="text-3xl md:text-4xl lg:text-6xl">
                Let's build something remarkable together.
              </SectionTitle>
              <SectionSubTitle className="text-muted-foreground">
                Two offices. One team. Always ready to help.
              </SectionSubTitle>
              <div className="flex flex-col md:flex-row w-full gap-3">
                {[
                  "📍 India & UAE",
                  "⚡ 24hr Response",
                  "🌍 5+ Countries Served",
                ].map((p) => (
                  <span key={p} className="text-sm font-medium">
                    {p}
                  </span>
                ))}
              </div>
            </>
          }
        />
      </ScrollReveal>
    </SectionWrapper>
  );
}
