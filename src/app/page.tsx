import CtaBannerSection from "@/components/common/CtaBannerSection";
import HeroSection from "@/components/home/HeroSection";
import ModernServicesSection from "@/components/home/ModernServicesSection";
import HowWeWorkSection from "@/components/home/HowWeWorkSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import TechPartnersSection from "@/components/home/TechPartnersSection";
import WhyForgeDotsSection from "@/components/home/WhyForgeDotsSection";

export default function Home() {
  return (
    <main className="relative z-50 bg-white rounded-b-[30px] md:rounded-b-[50px] overflow-hidden">
      <HeroSection />
      <ModernServicesSection />
      <HowWeWorkSection />
      <IndustriesSection />
      <TechPartnersSection />
      <WhyForgeDotsSection />
      <CtaBannerSection />
    </main>
  );
}
