"use client";

import ScrollReveal from "@/components/animated/ScrollReveal";
import ServiceCard from "@/components/common/ServiceCard";
import ServiceTicker from "@/components/animated/ServiceTicker";

import { SERVICE_CARDS } from "@/data/constants";
import { cn } from "@/lib/utils";
import { bricolageGrotesque } from "@/fonts";

export default function ServicesSection() {
  return (
    <section className="py-32 px-10 md:px-32 bg-[#f4f4f5] rounded-t-[30px] md:rounded-t-[50px] space-y-10">
      <ScrollReveal className="space-y-5">
        <p className="text-sm font-semibold text-zinc-500">
          Our Services
        </p>
        <div className="flex items-center justify-between">
          <h2
            className={cn(
              "max-w-xl text-4xl font-semibold",
              bricolageGrotesque.className,
            )}
          >
            Everything your data strategy needs — under one roof.
          </h2>
          <p className={cn("text-8xl font-bold", bricolageGrotesque.className)}>
            0-1
          </p>
        </div>
      </ScrollReveal>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 services-grid">
        {SERVICE_CARDS.map((c, i) => (
          <ServiceCard key={c.n} card={c} delay={i * 0.06} />
        ))}
      </div>
    </section>
  );
}
