"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

import AppInputField from "@/components/common/AppInputField";
import AppButton from "@/components/common/AppButton";

import { SERVICES_LIST } from "@/data/constants";

// Enquiry types for the form
const ENQUIRY_TYPES = [...SERVICES_LIST, "Others"];

export default function ContactForm() {
  const [enquiry, setEnquiry] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-5 will-change-transform"
    >
      <p className="text-base font-semibold">Send a message:</p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <AppInputField
          id="fn"
          label="First Name"
          // placeholder="Enter First Name"
          required
        />
        <AppInputField
          id="ln"
          label="Last Name"
          // placeholder="Enter Last Name"
          required
        />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <AppInputField
          id="em"
          label="Email"
          type="email"
          // placeholder="Enter Email Address"
          required
        />
        <AppInputField
          id="ph"
          label="Phone"
          type="tel"
          // placeholder="Enter Phone Number"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold">
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
                  "rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium transition-all duration-200",
                  active
                    ? "border-[#0c1029] bg-[#0c1029] text-white"
                    : "border-zinc-200 bg-muted/50 text-zinc-500 hover:bg-muted",
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
        // placeholder="Tell us about your project or enquiry..."
        required
        className="resize-none"
      />

      <AppButton type="submit" className="w-full md:w-fit">
        Send Message
      </AppButton>
    </form>
  );
}
