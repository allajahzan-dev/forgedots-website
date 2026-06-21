"use client";

import ScrollReveal from "@/components/animated/ScrollReveal";
import TechPills from "@/components/animated/TechMarquee";
import { TECH_ROW_1, TECH_ROW_2 } from "@/data/constants";

export default function ServicesTechPartners() {
  return (
    <section className="section">
      <div className="container">
        <ScrollReveal>
          <div className="eyebrow" style={{ marginBottom: 16, textAlign: "center" }}>Technology Partners</div>
          <h2 className="h2" style={{ fontSize: "clamp(28px, 3.8vw, 44px)", maxWidth: 720, margin: "0 auto 48px", textAlign: "center" }}>
            The platforms we build with.
          </h2>
        </ScrollReveal>
      </div>
      <TechPills items={TECH_ROW_1} duration={55} />
      <div style={{ height: 12 }} />
      <TechPills items={TECH_ROW_2} duration={50} reverse />
    </section>
  );
}
