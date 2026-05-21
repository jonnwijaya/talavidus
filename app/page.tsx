import Navbar from "@/components/ui/Navbar";
import HeroSection from "@/components/ui/HeroSection";
import PrescientSection from "@/components/ui/PrescientSection";
import AccessModelSection from "@/components/ui/AccessModelSection";
import SystemCredibilitySection from "@/components/ui/SystemCredibilitySection";
import ResearchSection from "@/components/ui/ResearchSection";
import ContactSection from "@/components/ui/ContactSection";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <HeroSection />

      <div className="max-w-container mx-auto px-8 md:px-16">
        <div className="w-full h-px bg-border-dark" />
      </div>

      <PrescientSection />

      <div className="max-w-container mx-auto px-8 md:px-16">
        <div className="w-full h-px bg-border-dark" />
      </div>

      <AccessModelSection />

      <div className="max-w-container mx-auto px-8 md:px-16">
        <div className="w-full h-px bg-border-dark" />
      </div>

      <SystemCredibilitySection />

      <div className="max-w-container mx-auto px-8 md:px-16">
        <div className="w-full h-px bg-border-dark" />
      </div>

      <ResearchSection />

      <div className="max-w-container mx-auto px-8 md:px-16">
        <div className="w-full h-px bg-border-dark" />
      </div>

      <ContactSection />

      <Footer />
    </>
  );
}
