"use client";

import ScrollReveal from "@/components/animated/ScrollReveal";
import { cn } from "@/lib/utils";
import { bricolageGrotesque } from "@/fonts";
import AuroraBg from "../animated/AuroraBg";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-background px-6 py-32 text-primary-foreground">
      <div className="dot-grid absolute inset-0 z-0 opacity-50" aria-hidden />

      {/* Exact Nexaro Aurora Background */}
      <AuroraBg />

      <div className="container relative z-10 mx-auto text-center">
        <ScrollReveal>
          <h1
            className={cn(
              "mx-auto mb-5 max-w-xl text-5xl font-bold leading-tight tracking-tight",
              bricolageGrotesque.className,
            )}
          >
            Let's build something remarkable together.
          </h1>
          <p className="mx-auto text-base text-primary-foreground/80">
            Two offices. One team. Always ready to help. 🇮🇳 🇦🇪
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-5">
            {[
              "📍 India & UAE",
              "⚡ 24hr Response",
              "🌍 5+ Countries Served",
            ].map((p) => (
              <span
                key={p}
                className="rounded-full px-[18px] py-2 text-[13px] bg-background/5 border border-background/10 text-sm font-semibold hover:bg-white/10"
              >
                {p}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
