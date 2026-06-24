"use client";

import CtaBanner from "@/components/common/CtaBannerSection";
import ServicesHero from "@/components/services/ServicesHero";
import ServiceList from "@/components/services/ServiceList";
import HowWeWorkSection from "@/components/home/HowWeWorkSection";
import ImageSection from "@/components/common/ImageSection";

export default function Services() {
  return (
    <main className="relative z-50 bg-white rounded-b-[30px] md:rounded-b-[50px] overflow-hidden">
      <ServicesHero />
      <ImageSection src="/service-hero.png" alt="Service banner" />
      <ServiceList />
      <HowWeWorkSection />
      <CtaBanner />
    </main>
  );
}
