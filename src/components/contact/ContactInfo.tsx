"use client";

import { MapPin, Phone, Mail } from "lucide-react";
import { COMPANY } from "@/data/constants";
import { cn } from "@/lib/utils";
import { bricolageGrotesque } from "@/fonts";

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
    <div className="flex gap-4 py-5 border-b border-border">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#6d5adc]/10 text-[#6d5adc]">
        <Icon size={20} />
      </div>
      <div>
        <div className="mb-1.5 text-[11px] font-semibold uppercase tracking-[0.13em] text-muted-foreground">
          {label}
        </div>
        <div className="text-[15px] leading-relaxed text-foreground">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function ContactInfo() {
  return (
    <div>
      <h2
        className={cn(
          "mb-3 text-[28px] font-bold text-foreground",
          bricolageGrotesque.className,
        )}
      >
        Get in touch directly.
      </h2>
      <p className="mb-5 text-[15px] text-muted-foreground">
        Reach out by phone, email, or visit us at either office.
      </p>
      <InfoBlock icon={MapPin} label="India Office">
        {COMPANY.india}
      </InfoBlock>
      <InfoBlock icon={MapPin} label="UAE Office">
        {COMPANY.uae}
      </InfoBlock>
      <InfoBlock icon={Phone} label="Phone">
        <a
          href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
          className="hover:text-[#6d5adc] transition-colors"
        >
          {COMPANY.phone}
        </a>
      </InfoBlock>
      <InfoBlock icon={Mail} label="Email">
        <a
          href={`mailto:${COMPANY.email}`}
          className="font-medium text-[#6d5adc] hover:text-[#5b4abf] transition-colors"
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
          className="text-[#6d5adc] hover:text-[#5b4abf] transition-colors"
        >
          Follow us on LinkedIn →
        </a>
      </InfoBlock>
    </div>
  );
}
