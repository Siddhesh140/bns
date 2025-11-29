'use client';

import Image from 'next/image';

export default function HeroSection() {
    const handleLogoClick = () => {
        window.location.reload();
    };

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="hero" className="relative w-full h-[800px] overflow-hidden flex items-center justify-center">
            {/* Navbar */}
            <nav
                className="absolute top-0 left-0 w-full flex flex-col justify-center items-center z-10"
                style={{
                    padding: '16px 80px',
                    height: '76px',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                }}
            >
                <div
                    className="flex flex-row justify-between items-center"
                    style={{
                        width: '1280px',
                        height: '44px',
                    }}
                >
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

                    {/* Navigation Links */}
                    <div
                        className="flex flex-row items-center"
                        style={{
                            gap: '60px',
                            height: '44px',
                        }}
                    >
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
                </div>
            </nav>

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

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center gap-8 px-4">
                {/* Main Heading */}
                <h1
                    className="text-white text-center uppercase"
                    style={{
                        fontFamily: 'var(--font-bebas-neue)',
                        fontSize: '136px',
                        lineHeight: '84%',
                        fontWeight: 400,
                        maxWidth: '1046.34px',
                    }}
                >
                    Stop Chasing Leads. Let Them Come to You.
                </h1>

                {/* Subheading */}
                <p
                    className="text-white text-center"
                    style={{
                        fontFamily: 'var(--font-inter)',
                        fontSize: '24px',
                        lineHeight: '29px',
                        fontWeight: 400,
                        maxWidth: '708.44px',
                    }}
                >
                    Join India&apos;s first WhatsApp community built exclusively for manufacturers who are tired of cold calls that go nowhere.
                </p>
            </div>
        </section>
    );
}
