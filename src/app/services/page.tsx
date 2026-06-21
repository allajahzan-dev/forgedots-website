"use client";

import ServiceTicker from "@/components/animated/ServiceTicker";
import CtaBanner from "@/components/common/CtaBanner";
import ServicesHero from "@/components/services/ServicesHero";
import ServiceList from "@/components/services/ServiceList";
import ServicesHowWeWork from "@/components/services/ServicesHowWeWork";
import ServicesTechPartners from "@/components/services/ServicesTechPartners";

export default function Services() {
  return (
    <main className="relative z-50 bg-background rounded-b-[30px] md:rounded-b-[50px] overflow-hidden">
      <ServicesHero />
      <ServiceList />
      <ServicesHowWeWork />
      <ServicesTechPartners />
      <CtaBanner />
    </main>
  );
}
