import HeroSection from './sections/HeroSection';
import What from './sections/What';
import How from './sections/How';
import Who from './sections/Who';
import Why from './sections/Why';
import Footer from './sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black flex flex-col gap-20 md:gap-0">
      <HeroSection />
      <What />
      <How />
      <Who />
      <Why />
      <Footer />
    </main>
  );
}
