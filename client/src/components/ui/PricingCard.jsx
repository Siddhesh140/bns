/**
 * PricingCard Component
 * Premium pricing card modal with professional animations
 */

import PropTypes from 'prop-types';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const PricingCard = ({
    isOpen,
    onClose,
    onJoinClick,
    image = "/images/pricingcard.webp"
}) => {
    // Features list from Figma specs
    const features = [
        "Access to most lucrative communities of founders.",
        "3 Months of free LinkedIn Marketing.",
        "20 Qualified leads every month.",
        "Daily updated on manufacturing industry.",
        "Webinars on modern marketing & sales strategies."
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Background Overlay - Blur + Darken */}
                    <motion.div
                        className="fixed inset-0 z-50"
                        style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.8)',
                            backdropFilter: 'blur(8px)',
                            WebkitBackdropFilter: 'blur(8px)'
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={onClose}
                    />

                    {/* Modal Container */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
                        {/* Modal - Scale + Fade Entrance */}
                        <motion.div
                            className="relative flex flex-col md:flex-row items-start gap-2 w-full max-w-[1000px] bg-[#0F0F0F] pointer-events-auto"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button - Rotate 90° on hover */}
                            <motion.button
                                onClick={onClose}
                                className="absolute top-3 right-3 z-10 text-white md:top-4 md:right-4"
                                aria-label="Close pricing card"
                                whileHover={{ rotate: 90, scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ duration: 0.2 }}
                            >
                                <XMarkIcon className="w-6 h-6 md:w-7 md:h-7" />
                            </motion.button>

                            {/* Main content wrapper */}
                            <div className="flex flex-col md:flex-row justify-between items-center p-5 md:p-12 gap-5 md:gap-8 w-full">

                                {/* Left Content */}
                                <div className="flex flex-col items-start gap-5 md:gap-6 w-full md:w-[480px]">

                                    {/* Title - Slide from left */}
                                    <motion.h2
                                        className="w-full text-white uppercase text-[40px] md:text-[56px] leading-[88%]"
                                        style={{ fontFamily: 'var(--font-bebas-neue)', fontWeight: 400 }}
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
                                    >
                                        What you get
                                    </motion.h2>

                                    {/* Features List - Staggered fade-in */}
                                    <div className="flex flex-col items-start w-full">
                                        {features.map((feature, index) => (
                                            <motion.div
                                                key={index}
                                                className="box-border flex flex-row items-center py-4 md:py-5 gap-2 md:gap-3 w-full border-b border-white/20"
                                                initial={{ opacity: 0, y: 15 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{
                                                    delay: 0.3 + index * 0.1,
                                                    duration: 0.3,
                                                    ease: "easeOut"
                                                }}
                                            >
                                                {/* Check Icon */}
                                                <CheckCircleIcon className="w-5 h-5 md:w-6 md:h-6 text-white flex-shrink-0" />

                                                {/* Feature Text */}
                                                <span
                                                    className="text-white text-sm md:text-lg leading-[18px] md:leading-[24px]"
                                                    style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}
                                                >
                                                    {feature}
                                                </span>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Join Button - Fade up last + hover effect */}
                                    <motion.button
                                        onClick={onJoinClick}
                                        className="flex flex-row justify-center items-center py-3 px-6 gap-2 bg-white"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            delay: 0.3 + features.length * 0.1 + 0.1,
                                            duration: 0.4,
                                            ease: "easeOut"
                                        }}
                                        whileHover={{
                                            scale: 1.05,
                                            boxShadow: "0 0 30px rgba(255, 255, 255, 0.5)"
                                        }}
                                        whileTap={{ scale: 0.97 }}
                                    >
                                        <span
                                            className="text-[#0F0F0F] text-sm uppercase tracking-[0.08em]"
                                            style={{ fontFamily: 'var(--font-inter)', fontWeight: 600 }}
                                        >
                                            Join for only ₹4,999
                                        </span>
                                    </motion.button>
                                </div>

                                {/* Right Image - Desktop */}
                                <motion.div
                                    className="hidden md:block w-[350px] h-[420px] border border-white/20 flex-shrink-0 overflow-hidden cursor-pointer"
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
                                >
                                    <motion.div
                                        className="w-full h-full"
                                        style={{
                                            backgroundImage: `url(${image})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            filter: 'grayscale(100%)'
                                        }}
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </motion.div>

                                {/* Mobile Image */}
                                <motion.div
                                    className="md:hidden w-full h-[200px] border border-white/20 overflow-hidden"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
                                >
                                    <motion.div
                                        className="w-full h-full"
                                        style={{
                                            backgroundImage: `url(${image})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            filter: 'grayscale(100%)'
                                        }}
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};

PricingCard.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onJoinClick: PropTypes.func,
    image: PropTypes.string
};

export default PricingCard;
