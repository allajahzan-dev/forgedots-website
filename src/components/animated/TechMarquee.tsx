"use client";

import { cn } from "@/lib/utils";

export default function TechPills({
  items,
  duration = 50,
  reverse = false,
}: {
  items: string[];
  duration?: number;
  reverse?: boolean;
}) {
  const loop = [...items, ...items, ...items, ...items];
  return (
    <div className="w-full py-3 flex overflow-hidden will-change-transform">
      <div
        className={cn(
          "flex shrink-0 whitespace-nowrap gap-5",
          reverse
            ? "animate-[marquee-scroll_1s_linear_infinite_reverse]"
            : "animate-[marquee-scroll_1s_linear_infinite]",
        )}
        style={{ animationDuration: `${duration}s` }}
      >
        {[...loop, ...loop].map((t, i) => (
          <div
            key={i}
            className="px-3 py-2 border flex items-center whitespace-nowrap text-sm font-semibold text-foreground rounded-full bg-white border-border shadow-md"
          >
            {t}
          </div>
        ))}
      </div>
    </div>
  );
}
