import HeroSection from './sections/HeroSection';
import What from './sections/What';
import How from './sections/How';
import Who from './sections/Who';
import Why from './sections/Why';
import Footer from './sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F0F0F]">
      <HeroSection />
      <What />
      <How />
      <Who />
      <Why />
      <Footer />
    </main>
  );
}
