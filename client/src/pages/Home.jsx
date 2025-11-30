import { lazy, Suspense } from 'react';
import HeroSection from '../components/home/HeroSection';

// Lazy load sections for better performance
const WhatSection = lazy(() => import('../components/home/WhatSection'));
const HowSection = lazy(() => import('../components/home/HowSection'));
const WhoSection = lazy(() => import('../components/home/WhoSection'));
const WhySection = lazy(() => import('../components/home/WhySection'));
const Footer = lazy(() => import('../components/layout/Footer'));

// Loading component
const SectionLoader = () => (
    <div className="w-full h-32 flex items-center justify-center bg-[#0F0F0F]">
        <div className="text-white" style={{ fontFamily: 'var(--font-inter)' }}>Loading...</div>
    </div>
);

export default function Home() {
    return (
        <main className="min-h-screen bg-[#0F0F0F] flex flex-col gap-0">
            <HeroSection />
            <Suspense fallback={<SectionLoader />}>
                <WhatSection />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
                <HowSection />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
                <WhoSection />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
                <WhySection />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
                <Footer />
            </Suspense>
        </main>
    );
}
