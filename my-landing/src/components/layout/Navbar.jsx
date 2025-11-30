import { useState } from 'react';
import Button from '../ui/Button';
import { scrollToSection } from '../../utils/scroll';

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleLogoClick = () => {
        window.location.reload();
    };

    const handleNavClick = (sectionId) => {
        scrollToSection(sectionId);
        setMobileMenuOpen(false);
    };

    return (
        <>
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
                        <img
                            src="/images/logo.png"
                            alt="BNS Logo"
                            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
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
                            onClick={() => handleNavClick('what')}
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
                            onClick={() => handleNavClick('how')}
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
                            onClick={() => handleNavClick('who')}
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
                            onClick={() => handleNavClick('why')}
                        >
                            Why
                        </span>

                        {/* Join Button */}
                        <Button variant="primary" className="px-7 py-4 h-11">
                            Join
                        </Button>
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
                            onClick={() => handleNavClick('what')}
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
                            onClick={() => handleNavClick('how')}
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
                            onClick={() => handleNavClick('who')}
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
                            onClick={() => handleNavClick('why')}
                        >
                            Why
                        </span>

                        {/* Mobile Join Button */}
                        <Button variant="primary" className="px-7 py-4 h-11">
                            Join
                        </Button>
                    </div>
                </div>
            )}
        </>
    );
}
