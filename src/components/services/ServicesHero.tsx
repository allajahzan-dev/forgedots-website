"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/animated/ScrollReveal";
import { SERVICE_CARDS, ACCENT_HEX } from "@/data/constants";

export function ServiceMap() {
  return (
    <div style={{ marginTop: 48, width: "100%", overflowX: "auto" }}>
      <svg
        viewBox="0 0 1100 120"
        style={{ width: "100%", minWidth: 720, height: 120 }}
        aria-hidden
      >
        <motion.line
          x1="50"
          y1="60"
          x2="1050"
          y2="60"
          stroke="#ebebf0"
          strokeWidth="2"
          strokeDasharray="4 4"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        />
        {SERVICE_CARDS.map((s, i) => {
          const x = 50 + (i * 1000) / (SERVICE_CARDS.length - 1);
          const c =
            ACCENT_HEX[s.accent as keyof typeof ACCENT_HEX]?.base || "#000";
          return (
            <motion.g
              key={s.n}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
            >
              <circle
                cx={x}
                cy="60"
                r="10"
                fill="#fff"
                stroke={c}
                strokeWidth="2.5"
              />
              <circle cx={x} cy="60" r="4" fill={c} />
              <text
                x={x}
                y="100"
                textAnchor="middle"
                fontSize="11"
                fontWeight="600"
                fill="#0f0e1a"
                fontFamily="Inter"
              >
                {s.name.length > 18
                  ? s.name.split(" ").slice(0, 2).join(" ")
                  : s.name}
              </text>
            </motion.g>
          );
        })}
      </svg>
    </div>
  );
}

export default function ServicesHero() {
  return (
    <section
      style={{
        position: "relative",
        padding: "100px 24px 80px",
        background: "#fff",
        overflow: "hidden",
      }}
    >
      <div
        className="dot-grid"
        style={{ position: "absolute", inset: 0, opacity: 0.5, zIndex: 0 }}
        aria-hidden
      />
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <ScrollReveal>
          <div className="eyebrow" style={{ marginBottom: 16 }}>
            Our Services
          </div>
          <h1
            className="display"
            style={{
              fontSize: "clamp(42px, 7vw, 80px)",
              maxWidth: 1100,
              marginBottom: 24,
            }}
          >
            End-to-end data and AI —{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #6d5adc, #9b5fe3)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              built for your business.
            </span>
          </h1>
          <p
            style={{
              fontSize: 18,
              color: "var(--text-secondary)",
              maxWidth: 700,
              lineHeight: 1.7,
            }}
          >
            Six interconnected services that cover every layer of your analytics
            and AI journey.
          </p>
          <ServiceMap />
        </ScrollReveal>
      </div>
    </section>
  );
}
