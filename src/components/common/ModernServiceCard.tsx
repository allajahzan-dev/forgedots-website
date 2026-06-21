"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";

import type { SERVICE_CARDS } from "@/data/constants";
import { ACCENT_HEX } from "@/data/constants";
import { cn } from "@/lib/utils";
import { bricolageGrotesque } from "@/fonts";

type Card = (typeof SERVICE_CARDS)[number];

export default function ModernServiceCard({
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
      className="group relative p-6 flex flex-col items-start bg-background border shadow-md hover:shadow-lg rounded-2xl overflow-hidden transform-gpu"
    >
      {/* <span
        className="absolute left-0 top-0 bottom-0 w-[3px] scale-y-0 origin-top group-hover:scale-y-100 transition-transform duration-300 ease-out"
        style={{
          background: accent.base,
        }}
      /> */}
      <div
        className="mb-3 size-12 flex items-center justify-center rounded-xl"
        style={{
          background: accent.soft,
          color: accent.base,
        }}
      >
        <Icon size={20} />
      </div>
      <h1
        className={cn(
          "mb-2 text-lg font-semibold",
          bricolageGrotesque.className,
        )}
      >
        {card.name}
      </h1>
      <p className="text-sm text-muted-foreground">{card.desc}</p>
    </motion.article>
  );
}
