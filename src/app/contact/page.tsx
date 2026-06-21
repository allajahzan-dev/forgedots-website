import ContactHero from "@/components/contact/ContactHero";
import ContactSection from "@/components/contact/ContactSection";

export default function Contact() {
  return (
    <main className="relative z-50 bg-background rounded-b-[30px] md:rounded-b-[50px] overflow-hidden">
      <ContactHero />
      <ContactSection />
    </main>
  );
}
