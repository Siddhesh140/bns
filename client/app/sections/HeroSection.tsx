'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function HeroSection() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleLogoClick = () => {
        window.location.reload();
    };

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setMobileMenuOpen(false);
    };

    return (
        <section id="hero" className="relative w-full h-[600px] md:h-[800px] overflow-hidden flex items-center justify-center">
            {/* Navbar */}
            <nav
                className="absolute top-0 left-0 w-full flex flex-col justify-center items-center z-10 px-5 md:px-20 py-4 md:py-0"
                style={{
                    height: '64px',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                }}
            >
                <div className="flex flex-row justify-between items-center w-full max-w-[360px] md:max-w-[1280px] h-8 md:h-11">
                    {/* Logo */}
                    <div
                        className="relative cursor-pointer"
                        style={{ width: '45.6px', height: '24px' }}
                        onClick={handleLogoClick}
                    >
                        <Image
                            src="/images/logo.png"
                            alt="BNS Logo"
                            fill
                            style={{ objectFit: 'contain' }}
                        />
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex flex-row items-center gap-[60px] h-11">
                        <span
                            className="text-white uppercase cursor-pointer transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                            style={{
                                fontFamily: 'var(--font-inter)',
                                fontWeight: 600,
                                fontSize: '16px',
                                lineHeight: '19px',
                                letterSpacing: '0.08em',
                            }}
                            onClick={() => scrollToSection('what')}
                        >
                            What
                        </span>
                        <span
                            className="text-white uppercase cursor-pointer transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                            style={{
                                fontFamily: 'var(--font-inter)',
                                fontWeight: 600,
                                fontSize: '16px',
                                lineHeight: '19px',
                                letterSpacing: '0.08em',
                            }}
                            onClick={() => scrollToSection('how')}
                        >
                            How
                        </span>
                        <span
                            className="text-white uppercase cursor-pointer transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                            style={{
                                fontFamily: 'var(--font-inter)',
                                fontWeight: 600,
                                fontSize: '16px',
                                lineHeight: '19px',
                                letterSpacing: '0.08em',
                            }}
                            onClick={() => scrollToSection('who')}
                        >
                            Who
                        </span>
                        <span
                            className="text-white uppercase cursor-pointer transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                            style={{
                                fontFamily: 'var(--font-inter)',
                                fontWeight: 600,
                                fontSize: '16px',
                                lineHeight: '19px',
                                letterSpacing: '0.08em',
                            }}
                            onClick={() => scrollToSection('why')}
                        >
                            Why
                        </span>

                        {/* Join Button */}
                        <button
                            className="bg-white flex justify-center items-center uppercase cursor-pointer transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] hover:scale-105"
                            style={{
                                padding: '16px 28px',
                                height: '44px',
                                fontFamily: 'var(--font-inter)',
                                fontWeight: 600,
                                fontSize: '16px',
                                lineHeight: '19px',
                                letterSpacing: '0.08em',
                                color: '#0F0F0F',
                            }}
                        >
                            Join
                        </button>
                    </div>

                    {/* Mobile Hamburger Menu */}
                    <button
                        className="md:hidden w-8 h-8 flex items-center justify-center"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 12H21M3 6H21M3 18H21" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Dropdown */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-[64px] left-0 w-full bg-[#0F0F0F] z-20 border-b border-white/20">
                    <div className="flex flex-col items-center py-6 gap-6">
                        <span
                            className="text-white uppercase cursor-pointer"
                            style={{
                                fontFamily: 'var(--font-inter)',
                                fontWeight: 600,
                                fontSize: '16px',
                                lineHeight: '19px',
                                letterSpacing: '0.08em',
                            }}
                            onClick={() => scrollToSection('what')}
                        >
                            What
                        </span>
                        <span
                            className="text-white uppercase cursor-pointer"
                            style={{
                                fontFamily: 'var(--font-inter)',
                                fontWeight: 600,
                                fontSize: '16px',
                                lineHeight: '19px',
                                letterSpacing: '0.08em',
                            }}
                            onClick={() => scrollToSection('how')}
                        >
                            How
                        </span>
                        <span
                            className="text-white uppercase cursor-pointer"
                            style={{
                                fontFamily: 'var(--font-inter)',
                                fontWeight: 600,
                                fontSize: '16px',
                                lineHeight: '19px',
                                letterSpacing: '0.08em',
                            }}
                            onClick={() => scrollToSection('who')}
                        >
                            Who
                        </span>
                        <span
                            className="text-white uppercase cursor-pointer"
                            style={{
                                fontFamily: 'var(--font-inter)',
                                fontWeight: 600,
                                fontSize: '16px',
                                lineHeight: '19px',
                                letterSpacing: '0.08em',
                            }}
                            onClick={() => scrollToSection('why')}
                        >
                            Why
                        </span>
                        <button
                            className="bg-white flex justify-center items-center uppercase cursor-pointer"
                            style={{
                                padding: '16px 28px',
                                height: '44px',
                                fontFamily: 'var(--font-inter)',
                                fontWeight: 600,
                                fontSize: '16px',
                                lineHeight: '19px',
                                letterSpacing: '0.08em',
                                color: '#0F0F0F',
                            }}
                        >
                            Join
                        </button>
                    </div>
                </div>
            )}

            {/* Background Image - Primary */}
            <div
                className="absolute inset-0 w-full h-full"
                style={{
                    backgroundImage: 'url(/images/hero-bg.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />

            {/* Subtle dark overlay for text readability */}
            <div className="absolute inset-0 w-full h-full bg-black/20" />

            {/* Bottom Gradient for Seamless Transition */}
            <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-b from-transparent to-[#0F0F0F] z-10" />

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center gap-5 md:gap-8 px-4">
                {/* Main Heading */}
                <h1
                    className="text-white text-center uppercase max-w-[372px] md:max-w-[1046.34px]"
                    style={{
                        fontFamily: 'var(--font-bebas-neue)',
                        fontSize: '64px',
                        lineHeight: '84%',
                        fontWeight: 400,
                    }}
                >
                    <style jsx>{`
                        @media (min-width: 768px) {
                            h1 {
                                font-size: 136px !important;
                            }
                        }
                    `}</style>
                    Stop Chasing Leads. Let Them Come to You.
                </h1>

                {/* Subheading */}
                <p
                    className="text-white text-center max-w-[294px] md:max-w-[708.44px]"
                    style={{
                        fontFamily: 'var(--font-inter)',
                        fontSize: '16px',
                        lineHeight: '19px',
                        fontWeight: 400,
                    }}
                >
                    <style jsx>{`
                        @media (min-width: 768px) {
                            p {
                                font-size: 24px !important;
                                line-height: 29px !important;
                            }
                        }
                    `}</style>
                    Join India&apos;s first WhatsApp community built exclusively for manufacturers who are tired of cold calls that go nowhere.
                </p>
            </div>
        </section>
    );
}
