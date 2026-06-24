"use client";

import { SERVICES_LIST } from "@/data/constants";

export default function ServiceTicker() {
  const items = [...SERVICES_LIST, ...SERVICES_LIST, ...SERVICES_LIST];

  return (
    <div className="h-12 flex items-center overflow-hidden bg-white border-y border-zinc-200 rounded-t-[30px] md:rounded-t-[50px]">
      <div className="w-full flex overflow-hidden">
        <div className="flex shrink-0 whitespace-nowrap animate-[marquee-scroll_55s_linear_infinite]">
          {[...items, ...items].map((s, i) => (
            <span
              key={i}
              className="px-6 inline-flex items-center gap-6 text-[11px] font-semibold tracking-widest uppercase text-text-muted"
            >
              {s}
              <span className="text-sm text-violet">·</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
