"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SERVICES_LIST } from "@/data/constants";
import { cn } from "@/lib/utils";

const ENQUIRY_TYPES = [...SERVICES_LIST, "Others"];

export default function ContactForm() {
  const [enquiry, setEnquiry] = useState("");
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="rounded-[24px] border border-border bg-background p-8 md:p-12 shadow-[0_8px_48px_rgba(109,90,220,0.1)]">
      {sent ? (
        <div className="py-[60px] text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-emerald-500"
          >
            <Check size={36} strokeWidth={3} />
          </motion.div>
          <h3 className="mb-3 text-[28px] font-bold text-emerald-500">
            Message Sent!
          </h3>
          <p className="text-[15px] text-muted-foreground">
            We'll respond within 24 hours.
          </p>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="flex flex-col gap-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label
                htmlFor="fn"
                className="mb-2 block text-xs font-semibold tracking-[0.02em] text-foreground"
              >
                First Name
              </label>
              <input
                id="fn"
                required
                className="w-full rounded-xl border border-border bg-background px-4 py-3.5 text-[15px] text-foreground outline-none transition-all focus:border-[#6d5adc] focus:ring-3 focus:ring-[#6d5adc]/15"
              />
            </div>
            <div>
              <label
                htmlFor="ln"
                className="mb-2 block text-xs font-semibold tracking-[0.02em] text-foreground"
              >
                Last Name
              </label>
              <input
                id="ln"
                required
                className="w-full rounded-xl border border-border bg-background px-4 py-3.5 text-[15px] text-foreground outline-none transition-all focus:border-[#6d5adc] focus:ring-3 focus:ring-[#6d5adc]/15"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label
                htmlFor="em"
                className="mb-2 block text-xs font-semibold tracking-[0.02em] text-foreground"
              >
                Email
              </label>
              <input
                id="em"
                type="email"
                required
                className="w-full rounded-xl border border-border bg-background px-4 py-3.5 text-[15px] text-foreground outline-none transition-all focus:border-[#6d5adc] focus:ring-3 focus:ring-[#6d5adc]/15"
              />
            </div>
            <div>
              <label
                htmlFor="ph"
                className="mb-2 block text-xs font-semibold tracking-[0.02em] text-foreground"
              >
                Phone
              </label>
              <input
                id="ph"
                type="tel"
                className="w-full rounded-xl border border-border bg-background px-4 py-3.5 text-[15px] text-foreground outline-none transition-all focus:border-[#6d5adc] focus:ring-3 focus:ring-[#6d5adc]/15"
              />
            </div>
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
                      "rounded-full border px-4 py-[9px] text-[12px] font-semibold transition-all duration-200",
                      active
                        ? "border-[#6d5adc] bg-[#6d5adc] text-white"
                        : "border-border bg-muted/50 text-muted-foreground hover:bg-muted",
                    )}
                  >
                    {t}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <label
              htmlFor="msg"
              className="mb-2 block text-xs font-semibold tracking-[0.02em] text-foreground"
            >
              Message
            </label>
            <textarea
              id="msg"
              rows={5}
              required
              className="w-full resize-y rounded-xl border border-border bg-background px-4 py-3.5 text-[15px] text-foreground outline-none transition-all focus:border-[#6d5adc] focus:ring-3 focus:ring-[#6d5adc]/15"
            />
          </div>

          <motion.button
            type="submit"
            whileTap={{ scale: 0.99 }}
            className="flex h-[52px] w-full items-center justify-center rounded-xl bg-[#6d5adc] text-sm font-semibold text-white transition-colors hover:bg-[#5b4abf]"
          >
            Send Message →
          </motion.button>
        </form>
      )}
    </div>
  );
}
