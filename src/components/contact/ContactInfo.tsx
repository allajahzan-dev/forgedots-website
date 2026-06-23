"use client";

import { MapPin, Phone, Mail } from "lucide-react";

import SectionTitle from "@/components/common/SectionTitle";
import SectionSubTitle from "@/components/common/SectionSubTitle";

import { COMPANY } from "@/data/constants";

export function InfoBlock({
  icon: Icon,
  label,
  children,
}: {
  icon: any;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 py-5 border-b last:border-0 will-change-transform">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0c1029]/10 text-[#0c1029]">
        <Icon size={20} />
      </div>
      <div className="space-y-2">
        <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          {label}
        </div>
        <div className="text-sm leading-relaxed text-foreground">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function ContactInfo() {
  return (
    <div>
      <SectionTitle className="text-xl md:text-2xl lg:text-3xl">
        Get in touch directly.
      </SectionTitle>
      <SectionSubTitle className="mb-5 text-muted-foreground">
        Reach out by phone, email, or visit us at either office.
      </SectionSubTitle>

      {/* Contact details */}
      <InfoBlock icon={MapPin} label="India Office">
        {COMPANY.india}
      </InfoBlock>
      <InfoBlock icon={MapPin} label="UAE Office">
        {COMPANY.uae}
      </InfoBlock>
      <InfoBlock icon={Phone} label="Phone">
        <a
          href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
          className="text-[#0c1029] transition-colors"
        >
          {COMPANY.phone}
        </a>
      </InfoBlock>
      <InfoBlock icon={Mail} label="Email">
        <a
          href={`mailto:${COMPANY.email}`}
          className="text-[#0c1029] transition-colors"
        >
          {COMPANY.email}
        </a>
      </InfoBlock>
      <InfoBlock
        icon={() => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
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
        )}
        label="LinkedIn"
      >
        <a
          href="https://linkedin.com"
          className="text-[#0c1029] transition-colors"
        >
          Follow us on LinkedIn
        </a>
      </InfoBlock>
    </div>
  );
}
