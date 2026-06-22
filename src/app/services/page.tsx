"use client";

import CtaBanner from "@/components/common/CtaBanner";
import ServicesHero from "@/components/services/ServicesHero";
import ServiceList from "@/components/services/ServiceList";
import HowWeWorkSection from "@/components/home/HowWeWorkSection";
import TechPartnersSection from "@/components/home/TechPartnersSection";
import ImageSection from "@/components/common/ImageSection";

export default function Services() {
  return (
    <main className="relative z-50 bg-background rounded-b-[30px] md:rounded-b-[50px] overflow-hidden">
      <ServicesHero />
      <ImageSection src="/service-hero.png" alt="Service banner" />
      <ServiceList />
      <HowWeWorkSection />
      <CtaBanner />
    </main>
  );
}
