"use client";

import Link from "next/link";
import ScrollReveal from "@/components/animated/ScrollReveal";
import { INFOGRAPHIC_MAP } from "@/components/common/Infographics";
import { SERVICES, ACCENT_HEX } from "@/data/constants";

export default function ServiceList() {
  return (
    <>
      {SERVICES.map((s, i) => {
        const alt = i % 2 === 1;
        const Info = (INFOGRAPHIC_MAP as any)[s.infographic];
        const accent = ACCENT_HEX[s.accent as keyof typeof ACCENT_HEX] || ACCENT_HEX.violet;
        return (
          <section
            key={s.n}
            className={alt ? "section section-alt" : "section"}
            style={{ position: "relative" }}
          >
            <div className="container">
              <div
                className="service-detail-grid"
                style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}
              >
                <ScrollReveal>
                  <div style={{ position: "relative" }}>
                    <span
                      aria-hidden
                      className="display"
                      style={{
                        position: "absolute",
                        top: -80, left: -20,
                        fontSize: "clamp(100px, 14vw, 180px)",
                        color: "rgba(109,90,220,0.08)",
                        lineHeight: 1,
                        pointerEvents: "none",
                      }}
                    >
                      {s.n}
                    </span>
                    <div style={{ position: "relative" }}>
                      <div className="eyebrow" style={{ marginBottom: 16, color: accent.base }}>
                        Service {s.n}
                      </div>
                      <h2 className="h2" style={{ fontSize: "clamp(32px, 4.2vw, 48px)", marginBottom: 20 }}>
                        {s.name}
                      </h2>
                      <p style={{ fontSize: 17, color: "var(--text-secondary)", lineHeight: 1.75, marginBottom: 28 }}>
                        {s.long}
                      </p>
                      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
                        {s.bullets.map((b) => (
                          <li key={b} style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: 15, color: "var(--text)" }}>
                            <span style={{ width: 6, height: 6, borderRadius: "50%", background: accent.base, marginTop: 8, flexShrink: 0 }} />
                            {b}
                          </li>
                        ))}
                      </ul>
                      <Link href="/contact" className="btn btn-outline">Get in Touch →</Link>
                    </div>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={0.1}>
                  {Info && <Info />}
                </ScrollReveal>
              </div>
            </div>
          </section>
        );
      })}
      <style>{`
        @media (max-width: 900px) {
          .service-detail-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </>
  );
}
