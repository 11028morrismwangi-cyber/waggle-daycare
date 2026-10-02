import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBadges from "@/components/TrustBadges";
import ServicesSection from "@/components/ServicesSection";
import IntelligenceDifference from "@/components/IntelligenceDifference";
import HowItWorks from "@/components/HowItWorks";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingPreview from "@/components/PricingPreview";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TrustBadges />
      <ServicesSection />
      <IntelligenceDifference />
      <HowItWorks />
      <PricingPreview />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
