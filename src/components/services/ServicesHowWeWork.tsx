"use client";

import ScrollReveal from "@/components/animated/ScrollReveal";
import PipelineInfographic from "@/components/common/PipelineInfographic";

export default function ServicesHowWeWork() {
  return (
    <section className="section section-dark">
      <div className="container">
        <ScrollReveal>
          <div className="eyebrow-light" style={{ marginBottom: 16 }}>How We Work</div>
          <h2 className="h2" style={{ color: "#fff", fontSize: "clamp(32px, 4.8vw, 52px)", maxWidth: 720, marginBottom: 48 }}>
            A clear process. Measurable outcomes.
          </h2>
        </ScrollReveal>
        <PipelineInfographic />
      </div>
    </section>
  );
}
