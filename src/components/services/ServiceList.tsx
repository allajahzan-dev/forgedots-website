"use client";

import Link from "next/link";
import ScrollReveal from "@/components/animated/ScrollReveal";
import { INFOGRAPHIC_MAP } from "@/components/common/Infographics";
import { SERVICES, ACCENT_HEX } from "@/data/constants";
import SectionWrapper from "@/components/common/SectionWrapper";
import SectionLabel from "@/components/common/SectionLabel";
import SectionTitle from "@/components/common/SectionTitle";
import AppButton from "@/components/common/AppButton";
import { bricolageGrotesque } from "@/fonts";
import { cn } from "@/lib/utils";

export default function ServiceList() {
  return (
    <>
      {SERVICES.map((s, i) => {
        const alt = i % 2 === 1;
        const Info = (INFOGRAPHIC_MAP as any)[s.infographic];
        const accent =
          ACCENT_HEX[s.accent as keyof typeof ACCENT_HEX] || ACCENT_HEX.violet;
        return (
          <SectionWrapper
            key={s.n}
            className={cn(alt ? "bg-gray-50" : "bg-white")}
          >
            <div className="container mx-auto">
              <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
                <ScrollReveal>
                  <span
                    aria-hidden
                    className={cn(
                      "pointer-events-none absolute -left-5 -top-20 select-none text-[clamp(100px,14vw,180px)] font-bold leading-none text-[#0c1029]/10",
                      bricolageGrotesque.className,
                    )}
                  >
                    {s.n}
                  </span>
                  <div className="relative space-y-5">
                    {/* <SectionLabel style={{ color: accent.base }}>
                      Service {s.n}
                    </SectionLabel> */}
                    <SectionTitle className="text-[clamp(32px,4.2vw,48px)]">
                      {s.name}
                    </SectionTitle>
                    <p className="text-zinc-500">{s.long}</p>
                    <ul className="flex flex-col gap-3 list-none">
                      {s.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-3 text-[15px] text-black"
                        >
                          <span
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                            style={{ background: "#0c1029" }}
                          />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <AppButton href="/contact" variant="outline">
                      Get in Touch →
                    </AppButton>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={0.1}>{Info && <Info />}</ScrollReveal>
              </div>
            </div>
          </SectionWrapper>
        );
      })}
    </>
  );
}
