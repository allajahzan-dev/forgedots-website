"use client";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import type { INDUSTRIES } from "@/data/constants";
import { ACCENT_HEX } from "@/data/constants";

type Industry = (typeof INDUSTRIES)[number];

export default function IndustryCard({ industry, delay = 0 }: { industry: Industry; delay?: number }) {
  const Icon = (Icons as any)[industry.icon] ?? Icons.Square;
  const accent = ACCENT_HEX[industry.accent];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -6 }}
      className="industry-card"
      style={{
        position: "relative",
        background: "#fff",
        border: "1px solid var(--border)",
        borderRadius: 20,
        padding: 28,
        boxShadow: "var(--card-shadow)",
        overflow: "hidden",
        transition: "border-color 0.3s",
      }}
    >
      <span
        className="industry-card__bar"
        style={{
          position: "absolute",
          left: 0, top: 0, bottom: 0,
          width: 3,
          background: accent.base,
          transform: "scaleY(0)",
          transformOrigin: "top",
          transition: "transform 0.35s",
        }}
      />
      <div
        style={{
          width: 48, height: 48,
          borderRadius: 14,
          background: accent.soft,
          color: accent.base,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 18,
        }}
      >
        <Icon size={24} />
      </div>
      <h3 style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 600, color: "var(--text)", marginBottom: 6 }}>
        {industry.name}
      </h3>
      <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.6 }}>
        {industry.desc}
      </p>
      <style>{`
        .industry-card:hover { border-color: ${accent.base}40 !important; }
        .industry-card:hover .industry-card__bar { transform: scaleY(1) !important; }
      `}</style>
    </motion.div>
  );
}

