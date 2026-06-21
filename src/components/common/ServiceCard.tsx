"use client";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import type { SERVICE_CARDS } from "@/data/constants";
import { ACCENT_HEX } from "@/data/constants";

type Card = (typeof SERVICE_CARDS)[number];

export default function ServiceCard({
  card,
  delay = 0,
}: {
  card: Card;
  delay?: number;
}) {
  const Icon = (Icons as any)[card.icon] ?? Icons.Square;
  const accent = ACCENT_HEX[card.accent];

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative p-8 bg-background rounded-2xl transition-all duration-300 overflow-hidden group"
    >
      {/* <span
        className="absolute left-0 top-0 bottom-0 w-[3px] scale-y-0 origin-top group-hover:scale-y-100 transition-transform duration-300 ease-out"
        style={{
          background: accent.base,
        }}
      /> */}
      <div
        className="mb-5 size-11 inline-flex items-center justify-center rounded-xl"
        style={{
          background: accent.soft,
          color: accent.base,
        }}
      >
        <Icon size={22} strokeWidth={2} />
      </div>
      <h3 className="mb-2 text-[19px] font-semibold tracking-tight text-foreground">
        {card.name}
      </h3>
      <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
        {card.desc}
      </p>
      <div className="pt-4 border-t text-[11px] font-medium tracking-wide uppercase text-muted-foreground border-border">
        {card.tags}
      </div>
    </motion.article>
  );
}
