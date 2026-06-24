import ContactHero from "@/components/contact/ContactHero";
import ContactSection from "@/components/contact/ContactSection";
import ImageSection from "@/components/common/ImageSection";

export default function Contact() {
  return (
    <main className="relative z-50 bg-white rounded-b-[30px] md:rounded-b-[50px] overflow-hidden">
      <ContactHero />
      <ImageSection src="/contact-hero.png" alt="Contact banner" />
      <ContactSection />
    </main>
  );
}
