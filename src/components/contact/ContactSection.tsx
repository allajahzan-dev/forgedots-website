"use client";

import ScrollReveal from "@/components/animated/ScrollReveal";
import SectionWrapper from "@/components/common/SectionWrapper";

import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <SectionWrapper className="rounded-b-[30px] md:rounded-b-[50px]">
      <div className="grid grid-cols-1 gap-10 items-center lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <ScrollReveal>
          <ContactInfo />
        </ScrollReveal>

        <ScrollReveal>
          <ContactForm />
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
}
