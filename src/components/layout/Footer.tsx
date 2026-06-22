"use client";

import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import AppLogo from "@/components/common/AppLogo";
import { COMPANY, SERVICES_LIST } from "@/data/constants";
import { cn } from "@/lib/utils";
import { bricolageGrotesque } from "@/fonts";
import SectionWrapper from "../common/SectionWrapper";

export default function Footer() {
  const colTitleClass =
    "mb-5 text-xs font-semibold uppercase tracking-wider text-white";
  const linkClass =
    "block py-1.5 text-sm text-white/60 transition-colors hover:text-white";

  return (
    <SectionWrapper className="relative z-40 py-0 pt-44 -mt-14 bg-[#0c1029] text-white">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-12 will-change-transform">
        {/* Col 1 — brand */}
        <div className="space-y-5">
          {/* App logo */}
          <AppLogo className="text-xl" iconColor="#6d5adc" />
          <div className="text-sm text-white/60">{COMPANY.tagline}</div>
          <p className="max-w-[320px] text-sm text-white/60">
            We turn raw data into intelligent business decisions through
            Enterprise BI, Data Engineering, and Generative AI.
          </p>
        </div>

        {/* Col 2 — services */}
        <div>
          <div className={colTitleClass}>Services</div>
          {SERVICES_LIST.map((s) => (
            <Link key={s} href="/services" className={linkClass}>
              {s}
            </Link>
          ))}
        </div>

        {/* Col 3 — quick links */}
        <div>
          <div className={colTitleClass}>Quick Links</div>
          {[
            { href: "/", label: "Home" },
            { href: "/services", label: "Services" },
            { href: "/contact", label: "Contact" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className={linkClass}>
              {l.label}
            </Link>
          ))}
          <span className={cn(linkClass, "cursor-pointer")}>
            Privacy Policy
          </span>
          <span className={cn(linkClass, "cursor-pointer")}>
            Cookies Policy
          </span>
        </div>

        {/* Col 4 — contact */}
        <div>
          <div className={colTitleClass}>Get in Touch</div>
          <a
            href={`mailto:${COMPANY.email}`}
            className={cn(linkClass, "inline-flex items-center gap-2")}
          >
            <Mail size={14} /> {COMPANY.email}
          </a>
          <a
            href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
            className={cn(linkClass, "inline-flex items-center gap-2")}
          >
            <Phone size={14} /> {COMPANY.phone}
          </a>
          <a
            href="https://linkedin.com"
            aria-label="LinkedIn"
            className="ml-2 inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
        </div>
      </div>

      <div className="flex flex-wrap justify-between gap-3 border-t border-white/10 py-8 text-xs text-white/60 will-change-transform">
        <span>© 2026 ForgeDots Technologies LLC. All rights reserved.</span>
        <span>Crafted with intent — UAE · India</span>
      </div>
    </SectionWrapper>
  );
}
