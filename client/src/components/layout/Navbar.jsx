import { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../ui';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { scrollToSection } from '../../utils/scroll';
import { motion, AnimatePresence } from 'framer-motion';

// Navigation links configuration - single source of truth
const NAV_LINKS = [
    { id: 'what', label: 'What' },
    { id: 'how', label: 'How' },
    { id: 'who', label: 'Who' },
    { id: 'why', label: 'Why' }
];

// Shared styles for navigation links
const navLinkStyles = {
    fontFamily: 'var(--font-inter)',
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: '19px',
    letterSpacing: '0.08em',
};

// Navbar Animation Variants
const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1], // Custom cubic bezier for smooth "premium" feel
            staggerChildren: 0.1,
            delayChildren: 0.3
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

const mobileMenuVariants = {
    closed: {
        opacity: 0,
        height: 0,
        transition: {
            duration: 0.3,
            ease: "easeInOut",
            when: "afterChildren"
        }
    },
    open: {
        opacity: 1,
        height: 'auto',
        transition: {
            duration: 0.3,
            ease: "easeInOut",
            when: "beforeChildren",
            staggerChildren: 0.05
        }
    }
};

const mobileItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0, transition: { duration: 0.3 } }
};

export default function Navbar({ onJoinClick }) {
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
            <motion.nav
                className="absolute top-0 left-0 w-full flex flex-col justify-center items-center z-10 px-5 md:px-20 py-4 md:py-0"
                style={{
                    height: '64px',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                }}
                initial="hidden"
                animate="visible"
                variants={navbarVariants}
            >
                <div className="flex flex-row justify-between items-center w-full max-w-[360px] md:max-w-[1280px] h-8 md:h-11">
                    {/* Logo */}
                    <motion.div
                        variants={itemVariants}
                        className="relative cursor-pointer"
                        style={{ width: '45.6px', height: '24px' }}
                        onClick={handleLogoClick}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <img
                            src="/images/logo.png"
                            alt="BNS Logo"
                            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                        />
                    </motion.div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex flex-row items-center gap-[60px] h-11">
                        {NAV_LINKS.map((link) => (
                            <motion.span
                                key={link.id}
                                variants={itemVariants}
                                className="text-white uppercase cursor-pointer relative"
                                style={navLinkStyles}
                                onClick={() => handleNavClick(link.id)}
                                whileHover={{
                                    scale: 1.1,
                                    textShadow: "0 0 8px rgba(255,255,255,0.8)",
                                    color: "#FFFFFF"
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {link.label}
                            </motion.span>
                        ))}

                        {/* Join Button */}
                        <motion.div variants={itemVariants}>
                            <Button variant="primary" className="px-7 py-4 h-11" onClick={onJoinClick}>
                                Join
                            </Button>
                        </motion.div>
                    </div>

                    {/* Mobile Hamburger Menu */}
                    <motion.button
                        variants={itemVariants}
                        className="md:hidden w-8 h-8 flex items-center justify-center"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                        whileTap={{ scale: 0.9 }}
                    >
                        {mobileMenuOpen ? (
                            <XMarkIcon className="w-6 h-6 text-white" />
                        ) : (
                            <Bars3Icon className="w-6 h-6 text-white" />
                        )}
                    </motion.button>
                </div>
            </motion.nav>

            {/* Mobile Menu Dropdown - AnimatePresence for smooth enter/exit */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={mobileMenuVariants}
                        className="md:hidden absolute top-[64px] left-0 w-full bg-dark z-20 border-b border-white/20 overflow-hidden"
                    >
                        <div className="flex flex-col items-center py-6 gap-6">
                            {NAV_LINKS.map((link) => (
                                <motion.span
                                    key={link.id}
                                    variants={mobileItemVariants}
                                    className="text-white uppercase cursor-pointer"
                                    style={navLinkStyles}
                                    onClick={() => handleNavClick(link.id)}
                                    whileHover={{ scale: 1.1, color: "#FFFFFF" }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {link.label}
                                </motion.span>
                            ))}

                            {/* Mobile Join Button */}
                            <motion.div variants={mobileItemVariants}>
                                <Button variant="primary" className="px-7 py-4 h-11" onClick={onJoinClick}>
                                    Join
                                </Button>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

Navbar.propTypes = {
    onJoinClick: PropTypes.func
};
