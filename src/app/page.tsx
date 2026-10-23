import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { PlatformStrip } from "@/components/sections/platform-strip";
import { ServicesSection } from "@/components/sections/services-section";
import { SecurityAlertBanner } from "@/components/sections/security-alert-banner";
import { ProcessSection } from "@/components/sections/process-section";
import { AboutSection } from "@/components/sections/about-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { ExampleScenariosSection } from "@/components/sections/example-scenarios-section";
import { TestimonialsPlaceholder } from "@/components/sections/testimonials-placeholder";
import { FAQSection } from "@/components/sections/faq-section";
import { ContactSection } from "@/components/sections/contact-section";
import { CTASection } from "@/components/sections/cta-section";
import { StructuredData } from "@/components/seo/structured-data";

export default function Home() {
  return (
    <>
      <StructuredData />
      <Header />
      <main>
        <HeroSection />
        <PlatformStrip />
        <ServicesSection />
        <SecurityAlertBanner />
        <ProcessSection />
        <AboutSection />
        <PricingSection />
        <ExampleScenariosSection />
        <FAQSection />
        <ContactSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
