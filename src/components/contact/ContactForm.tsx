"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

import AppInputField from "@/components/common/AppInputField";

import { SERVICES_LIST } from "@/data/constants";

// Enquiry types for the form
const ENQUIRY_TYPES = [...SERVICES_LIST, "Others"];

export default function ContactForm() {
  const [enquiry, setEnquiry] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="will-change-transform">
      <form onSubmit={onSubmit} className="flex flex-col gap-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <AppInputField id="fn" label="First Name" required />
          <AppInputField id="ln" label="Last Name" required />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <AppInputField id="em" label="Email" type="email" required />
          <AppInputField id="ph" label="Phone" type="tel" />
        </div>

        <div>
          <label className="mb-2 block text-xs font-semibold tracking-[0.02em] text-foreground">
            Type of Enquiry
          </label>
          <div className="flex flex-wrap gap-2">
            {ENQUIRY_TYPES.map((t) => {
              const active = enquiry === t;
              return (
                <button
                  type="button"
                  key={t}
                  onClick={() => setEnquiry(t)}
                  className={cn(
                    "rounded-full border px-4 py-2 text-xs font-medium transition-all duration-200",
                    active
                      ? "border-[#0c1029] bg-[#0c1029] text-white"
                      : "border-border bg-muted/50 text-muted-foreground hover:bg-muted",
                  )}
                >
                  {t}
                </button>
              );
            })}
          </div>
        </div>

        <AppInputField
          id="msg"
          label="Message"
          textarea
          rows={4}
          required
          className="resize-none"
        />

        <motion.button
          type="submit"
          whileTap={{ scale: 0.99 }}
          className="w-fit p-3 px-4 items-center justify-center rounded-lg bg-[#0c1029] text-sm font-medium text-white transition-colors"
        >
          Send Message
        </motion.button>
      </form>
    </div>
  );
}
