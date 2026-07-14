import Navbar from "./components/landing/Navbar";
import HeroSection from "./components/landing/HeroSection";
import TrustedBy from "./components/landing/TrustedBy";
import FeaturesGrid from "./components/landing/FeaturesGrid";
import OurUsersSection from "./components/landing/OurUsersSection";
import HowItWorks from "./components/landing/HowItWorks";
import EnterpriseSection from "./components/landing/EnterpriseSection";
import SecurityComplianceSection from "./components/landing/SecurityComplianceSection";
import IntegrationsSection from "./components/landing/IntegrationsSection";
import TestimonialsSection from "./components/landing/TestimonialsSection";
import FAQSection from "./components/landing/FAQSection";
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
        <OurUsersSection />
        <HowItWorks />
        <EnterpriseSection />
        <SecurityComplianceSection />
        <IntegrationsSection />
        <TestimonialsSection />
        <FAQSection />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}

