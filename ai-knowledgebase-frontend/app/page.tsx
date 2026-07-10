import Navbar from "./components/landing/Navbar";
import HeroSection from "./components/landing/HeroSection";
import TrustedBy from "./components/landing/TrustedBy";
import FeaturesGrid from "./components/landing/FeaturesGrid";
import HowItWorks from "./components/landing/HowItWorks";
import EnterpriseSection from "./components/landing/EnterpriseSection";
import IntegrationsSection from "./components/landing/IntegrationsSection";
import TestimonialsSection from "./components/landing/TestimonialsSection";
import CTABanner from "./components/landing/CTABanner";
import Footer from "./components/landing/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <TrustedBy />
        <FeaturesGrid />
        <HowItWorks />
        <EnterpriseSection />
        <IntegrationsSection />
        <TestimonialsSection />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
