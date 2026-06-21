"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
}

let smoother: ScrollSmoother | null = null;

// Smooth scroller
export const scrollSmoother = () => {
  if (smoother) return smoother;

  smoother = ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 1,
    smoothTouch: 0.1,
    effects: true,
  });

  return smoother;
};

// Kill scroller
export const killScroller = () => {
  if (smoother) {
    smoother.kill();
    smoother = null;
  }
};

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    scrollSmoother();

    return () => {
      killScroller();
    };
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
}
