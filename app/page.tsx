// app/page.tsx
import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import HighlightsStrip from "@/components/HighlightsStrip";
import ExperiencesSection from "@/components/ExperiencesSection";
import WhyUsSection from "@/components/WhyUsSection";
import PackagesSection from "@/components/PackagesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HeroSlider />
        <HighlightsStrip />
        <section id="experiencias" className="section-wrapper">
          <ExperiencesSection />
        </section>
        <section id="por-que-nosotros" className="section-wrapper">
          <WhyUsSection />
        </section>
        <section id="paquetes" className="section-wrapper">
          <PackagesSection />
        </section>
        <section id="testimonios" className="section-wrapper">
          <TestimonialsSection />
        </section>
        <section id="faq" className="section-wrapper">
          <FAQSection />
        </section>
        <section id="contacto" className="section-wrapper">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}
