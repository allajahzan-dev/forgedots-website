"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { STATS } from "@/data/constants";

function useCountUp(target: number, inView: boolean, duration = 2000) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf: number;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(Math.floor(eased * target));
      if (t < 1) raf = requestAnimationFrame(tick);
      else setVal(target);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration]);
  return val;
}

function Stat({ num, suffix, label, desc, color }: (typeof STATS)[number]) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const value = useCountUp(num, inView);

  const colorClass =
    {
      violet: "text-[#6d5adc]",
      amber: "text-[#f59e0b]",
      emerald: "text-[#10b981]",
    }[color] || "text-foreground";

  return (
    <div ref={ref} className="px-6 text-center">
      <div
        className={`mb-3 text-[clamp(48px,6vw,72px)] font-bold leading-none tabular-nums ${colorClass} display`}
      >
        {value}
        {suffix}
      </div>
      <div className="mb-1.5 text-base font-semibold text-foreground">
        {label}
      </div>
      <div className="text-[13px] leading-relaxed text-muted-foreground">
        {desc}
      </div>
    </div>
  );
}

export default function StatsRow() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 md:gap-0 stats-grid">
      {STATS.map((s, i) => (
        <div
          key={s.label}
          className={i !== 0 ? "md:border-l md:border-border" : ""}
        >
          <Stat {...s} />
        </div>
      ))}
    </div>
  );
}
