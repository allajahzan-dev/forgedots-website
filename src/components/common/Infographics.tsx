"use client";
import { motion } from "framer-motion";

/* Simple shared in-view fade for infographic containers */
const inView = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
};

const wrap: React.CSSProperties = {
  background: "#fff",
  border: "1px solid var(--border)",
  borderRadius: 20,
  padding: 32,
  boxShadow: "var(--card-shadow)",
  minHeight: 340,
};
const wrapAlt: React.CSSProperties = { ...wrap, background: "#fff" };

/* ---------- 01 BI Dashboard ---------- */
export function BiDashboard() {
  return (
    <motion.div {...inView} style={wrapAlt}>
      <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
        {[
          { v: "84%", l: "Conversion", c: "#6d5adc" },
          { v: "$2.4M", l: "Revenue", c: "#10b981" },
        ].map((k) => (
          <div key={k.l} style={{ flex: 1, background: "#f8f7ff", borderRadius: 12, padding: 14 }}>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, color: k.c }}>{k.v}</div>
            <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 2 }}>{k.l}</div>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", alignItems: "flex-end", gap: 8, height: 110, padding: "10px 4px", borderBottom: "1px solid var(--border)" }}>
        {[40, 65, 50, 80, 55, 90, 70].map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, delay: i * 0.07, ease: "easeOut" }}
            style={{ flex: 1, background: i % 2 ? "#6d5adc" : "#f59e0b", borderRadius: "6px 6px 0 0" }}
          />
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8, fontSize: 10, color: "var(--text-muted)" }}>
        {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => <span key={i}>{d}</span>)}
      </div>
      <div style={{ marginTop: 20, display: "flex", alignItems: "center", gap: 16 }}>
        <svg width="80" height="80" viewBox="0 0 80 80">
          <circle cx="40" cy="40" r="32" fill="none" stroke="#ebebf0" strokeWidth="10" />
          <motion.circle
            cx="40" cy="40" r="32" fill="none"
            stroke="#6d5adc" strokeWidth="10" strokeLinecap="round"
            strokeDasharray="201" strokeDashoffset="201"
            transform="rotate(-90 40 40)"
            whileInView={{ strokeDashoffset: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          />
        </svg>
        <div>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18 }}>72%</div>
          <div style={{ fontSize: 12, color: "var(--text-muted)" }}>Goal completion</div>
        </div>
      </div>
    </motion.div>
  );
}

/* ---------- 02 Data Pipeline ---------- */
export function DataPipeline() {
  const stages = ["Raw Data", "Ingest", "Transform", "Warehouse", "Analytics"];
  const colors = ["#f59e0b", "#6d5adc", "#6d5adc", "#10b981", "#10b981"];
  return (
    <motion.div {...inView} style={wrap}>
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {stages.map((s, i) => (
          <motion.div
            key={s}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            style={{ display: "flex", alignItems: "center", gap: 14 }}
          >
            <div
              style={{
                flex: 1,
                background: `${colors[i]}14`,
                border: `1px solid ${colors[i]}40`,
                borderRadius: 12,
                padding: "14px 18px",
                fontSize: 14,
                fontWeight: 600,
                color: "var(--text)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>{s}</span>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: colors[i] }} />
            </div>
            {i < stages.length - 1 && (
              <div style={{ width: 24, height: 1, borderTop: `1.5px dashed ${colors[i]}80` }} />
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

/* ---------- 03 Analytics Chart ---------- */
export function AnalyticsChart() {
  return (
    <motion.div {...inView} style={wrap}>
      <div style={{ fontSize: 12, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>
        Forecast Trend
      </div>
      <svg viewBox="0 0 320 200" style={{ width: "100%", height: 200 }}>
        {/* grid */}
        {[40, 80, 120, 160].map((y) => (
          <line key={y} x1="0" y1={y} x2="320" y2={y} stroke="#ebebf0" strokeDasharray="2 4" />
        ))}
        {/* area */}
        <motion.path
          d="M0 150 L60 130 L110 110 L160 95 L210 70 L260 55 L320 35 L320 200 L0 200 Z"
          fill="url(#grad)"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
        />
        <defs>
          <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* line */}
        <motion.path
          d="M0 150 L60 130 L110 110 L160 95 L210 70 L260 55 L320 35"
          fill="none"
          stroke="#10b981"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        />
        {/* dots */}
        {[[0,150],[60,130],[110,110],[160,95],[210,70],[260,55],[320,35]].map(([x,y], i) => (
          <motion.circle
            key={i} cx={x} cy={y} r="4"
            fill="#fff" stroke="#10b981" strokeWidth="2"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 + i * 0.08 }}
          />
        ))}
      </svg>
      <div style={{ display: "flex", gap: 16, marginTop: 16 }}>
        <div style={{ fontSize: 11, color: "var(--text-muted)" }}><span style={{ display: "inline-block", width: 8, height: 8, background: "#10b981", borderRadius: "50%", marginRight: 6 }} />Actual</div>
        <div style={{ fontSize: 11, color: "var(--text-muted)" }}><span style={{ display: "inline-block", width: 8, height: 8, background: "#6d5adc", borderRadius: "50%", marginRight: 6 }} />Predicted</div>
      </div>
    </motion.div>
  );
}

/* ---------- 04 GenAI Chat ---------- */
export function GenAiChat() {
  return (
    <motion.div {...inView} style={wrap}>
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        style={{
          background: "#f8f7ff",
          borderRadius: "14px 14px 14px 4px",
          padding: "12px 16px",
          fontSize: 14,
          color: "var(--text)",
          marginBottom: 12,
          maxWidth: "85%",
        }}
      >
        What was Q4 revenue by region?
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        style={{
          background: "#6d5adc",
          color: "#fff",
          borderRadius: "14px 14px 4px 14px",
          padding: "14px 16px",
          fontSize: 14,
          marginLeft: "auto",
          maxWidth: "90%",
          marginBottom: 12,
        }}
      >
        Q4 total: <strong>$8.4M</strong>. APAC leads at $3.1M (+18% YoY), EMEA $2.7M, AMER $2.6M. Want a regional breakdown chart?
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1.0 }}
        style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 16, padding: "10px 14px", border: "1px solid var(--border)", borderRadius: 100, color: "var(--text-muted)", fontSize: 13 }}
      >
        <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#10b981" }} />
        Ask anything about your data…
      </motion.div>
    </motion.div>
  );
}

/* ---------- 05 Monitoring Dial ---------- */
export function MonitoringDial() {
  return (
    <motion.div {...inView} style={wrap}>
      <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
        <svg width="160" height="160" viewBox="0 0 160 160">
          <circle cx="80" cy="80" r="64" fill="none" stroke="#ebebf0" strokeWidth="14" />
          <motion.circle
            cx="80" cy="80" r="64"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="14"
            strokeLinecap="round"
            strokeDasharray="402"
            strokeDashoffset="402"
            transform="rotate(-90 80 80)"
            whileInView={{ strokeDashoffset: 402 * 0.005 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: "easeOut" }}
          />
          <text x="80" y="78" textAnchor="middle" fontFamily="var(--font-display)" fontWeight="700" fontSize="28" fill="#0f0e1a">
            99.5%
          </text>
          <text x="80" y="96" textAnchor="middle" fontFamily="Inter" fontSize="11" fill="#9896a8">UPTIME</text>
        </svg>
        <div style={{ flex: 1 }}>
          {[
            { l: "Response", v: "112ms", c: "#10b981" },
            { l: "Incidents", v: "0 open", c: "#10b981" },
            { l: "SLA", v: "Met", c: "#6d5adc" },
          ].map((r) => (
            <div key={r.l} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid var(--border)", fontSize: 13 }}>
              <span style={{ color: "var(--text-muted)" }}>{r.l}</span>
              <span style={{ fontWeight: 600, color: r.c }}>{r.v}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ---------- 06 Training Bars ---------- */
export function TrainingBars() {
  const skills = [
    { l: "BI Skills", p: 92, c: "#6d5adc" },
    { l: "Analytics", p: 78, c: "#10b981" },
    { l: "AI Literacy", p: 85, c: "#f59e0b" },
  ];
  return (
    <motion.div {...inView} style={wrap}>
      <div style={{ fontSize: 12, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 20 }}>
        Team Capability
      </div>
      {skills.map((s, i) => (
        <div key={s.l} style={{ marginBottom: 22 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, fontSize: 14 }}>
            <span style={{ fontWeight: 600 }}>{s.l}</span>
            <span style={{ color: s.c, fontWeight: 700 }}>{s.p}%</span>
          </div>
          <div style={{ height: 10, background: "#f3f1ff", borderRadius: 100, overflow: "hidden" }}>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${s.p}%` }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 1.1, delay: 0.15 + i * 0.18, ease: "easeOut" }}
              style={{ height: "100%", background: s.c, borderRadius: 100 }}
            />
          </div>
        </div>
      ))}
    </motion.div>
  );
}

export const INFOGRAPHIC_MAP = {
  bi: BiDashboard,
  pipeline: DataPipeline,
  analytics: AnalyticsChart,
  genai: GenAiChat,
  monitoring: MonitoringDial,
  training: TrainingBars,
} as const;

