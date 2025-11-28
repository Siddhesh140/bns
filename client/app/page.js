import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturesSection from "./components/FeaturesSection";
import ProblemSection from "./components/ProblemSection";
import WhatYouGetSection from "./components/WhatYouGetSection";
import HowItWorksSection from "./components/HowItWorksSection";
import IsThisForYouSection from "./components/IsThisForYouSection";
import EarlyAccessSection from "./components/EarlyAccessSection";
import JoinNowSection from "./components/JoinNowSection";
import StillThinkingSection from "./components/StillThinkingSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <Hero />
      <FeaturesSection />
      <ProblemSection />
      <WhatYouGetSection />
      <HowItWorksSection />
      <IsThisForYouSection />
      <EarlyAccessSection />
      <JoinNowSection />
      <StillThinkingSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
