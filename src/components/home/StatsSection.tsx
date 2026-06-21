"use client";

import ScrollReveal from "@/components/animated/ScrollReveal";
import StatsRow from "@/components/common/StatsRow";
import { bricolageGrotesque } from "@/fonts";
import { cn } from "@/lib/utils";

export default function StatsSection() {
  return (
    <section className="py-32 px-10 md:px-20 lg:px-40 bg-background space-y-16">
      <ScrollReveal className="space-y-2">
        <p className="text-base text-muted-foreground text-center font-semibold">
          By the Numbers
        </p>
        <h2
          className={cn(
            "mx-auto text-4xl text-center font-bold",
            bricolageGrotesque.className,
          )}
        >
          Outcomes our clients can point to.
        </h2>
      </ScrollReveal>
      <StatsRow />
    </section>
  );
}
