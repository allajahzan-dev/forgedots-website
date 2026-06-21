"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function ScrollReveal({
  children,
  delay = 0,
  y = 40,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!container.current) return;

      gsap.fromTo(
        container.current,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay,
          ease: "power2.out",
          scrollTrigger: {
            trigger: container.current,
            start: "top 90%", // triggers when top of element hits 90% of viewport
            once: true,
          },
        },
      );
    },
    { scope: container, dependencies: [y, delay] },
  );

  return (
    <div
      ref={container}
      className={cn(className)}
      style={{ opacity: 0, willChange: "transform, opacity" }}
    >
      {children}
    </div>
  );
}
