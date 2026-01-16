/**
 * Framer Motion Animation Variants
 * Centralized animation configurations for consistent, reusable animations
 * across the application.
 */

// =============================================================================
// BASE TRANSITIONS
// =============================================================================

export const transitions = {
    default: { duration: 0.6, ease: "easeOut" },
    fast: { duration: 0.3, ease: "easeOut" },
    medium: { duration: 0.4, ease: "easeOut" },
    slow: { duration: 0.5, ease: "easeOut" },
    backOut: { duration: 0.4, ease: "backOut" },
    backOutSlow: { duration: 0.5, ease: "backOut" },
};

// =============================================================================
// VIEWPORT SETTINGS
// =============================================================================

export const viewportSettings = {
    default: { once: true, margin: "-100px" },
    immediate: { once: true },
};

// =============================================================================
// FADE ANIMATIONS
// =============================================================================

// Simple fade in (used in hero subheading)
export const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: transitions.slow,
};

// Fade in from below - main section animation
export const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: viewportSettings.default,
    transition: transitions.default,
};

// Fade in from below - smaller distance (hero text)
export const fadeInUpSmall = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: 0.3, duration: 0.6, ease: "easeOut" },
};

// Fade in from below - smallest distance
export const fadeInUpTiny = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: 0.8, duration: 0.5, ease: "easeOut" },
};

// Fade in with y=20 for viewport trigger
export const fadeInUpViewport = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: viewportSettings.default,
    transition: transitions.slow,
};

// =============================================================================
// SLIDE ANIMATIONS
// =============================================================================

// Slide in from left
export const slideInLeft = {
    initial: { opacity: 0, x: -40 },
    whileInView: { opacity: 1, x: 0 },
    viewport: viewportSettings.default,
    transition: transitions.default,
};

// Slide in from right
export const slideInRight = {
    initial: { opacity: 0, x: 40 },
    whileInView: { opacity: 1, x: 0 },
    viewport: viewportSettings.default,
    transition: transitions.default,
};

// Slide in from right with delay
export const slideInRightDelayed = {
    initial: { opacity: 0, x: 40 },
    whileInView: { opacity: 1, x: 0 },
    viewport: viewportSettings.default,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.1 },
};

// Slide in from right for desktop images
export const slideInRightImage = {
    initial: { opacity: 0, x: 40 },
    whileInView: { opacity: 1, x: 0 },
    viewport: viewportSettings.default,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
};

// =============================================================================
// HERO SECTION ANIMATIONS
// =============================================================================

// Hero background zoom out
export const heroBackgroundZoom = {
    initial: { scale: 1.1 },
    animate: { scale: 1 },
    transition: { duration: 1.5, ease: "easeOut" },
};

// =============================================================================
// STAGGER CONTAINER VARIANTS
// =============================================================================

// Standard stagger container (0.15s delay between children)
export const staggerContainer = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.15 },
    },
};

// Fast stagger container (0.1s delay between children)
export const staggerContainerFast = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1 },
    },
};

// =============================================================================
// STAGGER CHILD VARIANTS
// =============================================================================

// Basic fade in child for stagger containers
export const staggerChild = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.3 },
    },
};

// Fade in up child for stagger containers
export const staggerChildFadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
    },
};

// FAQ item variant
export const faqItemVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

// =============================================================================
// ICON ANIMATIONS
// =============================================================================

// Icon pop effect with rotation (positive rotation)
export const iconPopPositive = {
    initial: { scale: 0, rotate: 180 },
    whileInView: { scale: 1, rotate: 0 },
    viewport: viewportSettings.immediate,
    transition: transitions.backOut,
};

// Icon pop effect with rotation (negative rotation)
export const iconPopNegative = {
    initial: { scale: 0, rotate: -180 },
    whileInView: { scale: 1, rotate: 0 },
    viewport: viewportSettings.immediate,
    transition: transitions.backOutSlow,
};

// Icon check pop for benefits/features
export const iconCheckPop = {
    initial: { scale: 0, opacity: 0 },
    whileInView: { scale: 1, opacity: 1 },
    viewport: viewportSettings.immediate,
    transition: { duration: 0.3, ease: "backOut" },
};

// =============================================================================
// TEXT SLIDE ANIMATIONS
// =============================================================================

// Text slide in from left
export const textSlideIn = {
    initial: { opacity: 0, x: -10 },
    whileInView: { opacity: 1, x: 0 },
    viewport: viewportSettings.immediate,
    transition: transitions.medium,
};

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Create icon pop animation with custom delay
 * @param {number} delay - Delay in seconds before animation starts
 * @param {boolean} negativeRotation - If true, rotates from -180 instead of 180
 * @returns {object} Animation props object
 */
export const createIconPop = (delay, negativeRotation = false) => ({
    initial: { scale: 0, rotate: negativeRotation ? -180 : 180 },
    whileInView: { scale: 1, rotate: 0 },
    viewport: { once: true },
    transition: { delay, duration: 0.4, ease: "backOut" },
});

/**
 * Create X icon pop animation with custom delay (negative rotation)
 * Used for "Not For You" sections with X marks
 * @param {number} delay - Delay in seconds before animation starts
 * @returns {object} Animation props object
 */
export const createXIconPop = (delay) => ({
    initial: { scale: 0, rotate: -180 },
    whileInView: { scale: 1, rotate: 0 },
    viewport: { once: true },
    transition: { delay, duration: 0.4, ease: "backOut" },
});

/**
 * Create text slide animation with custom delay
 * @param {number} delay - Delay in seconds before animation starts
 * @returns {object} Animation props object
 */
export const createTextSlide = (delay) => ({
    initial: { opacity: 0, x: -10 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { delay, duration: 0.4 },
});

/**
 * Create icon pop animation with opacity for check icons
 * @param {number} delay - Delay in seconds before animation starts
 * @returns {object} Animation props object
 */
export const createCheckIconPop = (delay) => ({
    initial: { scale: 0, opacity: 0 },
    whileInView: { scale: 1, opacity: 1 },
    viewport: { once: true },
    transition: { delay, duration: 0.3, ease: "backOut" },
});

/**
 * Create step number animation with rotation
 * @param {number} delay - Delay in seconds before animation starts
 * @returns {object} Animation props object
 */
export const createStepNumberPop = (delay) => ({
    initial: { scale: 0, rotate: -180 },
    whileInView: { scale: 1, rotate: 0 },
    viewport: { once: true },
    transition: { delay, duration: 0.5, ease: "backOut" },
});

/**
 * Create step text slide animation
 * @param {number} delay - Delay in seconds before animation starts
 * @returns {object} Animation props object
 */
export const createStepTextSlide = (delay) => ({
    initial: { opacity: 0, x: -10 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { delay, duration: 0.4 },
});

// =============================================================================
// PRESET DELAY SEQUENCES
// =============================================================================

/**
 * Delay sequences for common patterns
 * Use these to maintain consistent timing across sections
 */
export const delaySequences = {
    // Benefits list (4 items with icons and text)
    benefits: {
        icon: [0.3, 0.45, 0.6, 0.75],
        text: [0.45, 0.6, 0.75, 0.9],
    },
    // How it works steps (5 steps)
    steps: {
        number: [0.2, 0.3, 0.4, 0.5, 0.6],
        text: [0.35, 0.45, 0.55, 0.65, 0.75],
    },
    // Perfect If You / Not For You sections (4 items each)
    isThisForYou: {
        light: {
            icon: [0.2, 0.35, 0.5, 0.65],
            text: [0.35, 0.5, 0.65, 0.8],
        },
        dark: {
            icon: [0.3, 0.45, 0.6, 0.75],
            text: [0.45, 0.6, 0.75, 0.9],
        },
    },
    // Join Now benefits (6 items)
    joinNow: {
        icon: [0.3, 0.45, 0.6, 0.75, 0.9, 1.05],
        text: [0.45, 0.6, 0.75, 0.9, 1.05, 1.2],
    },
    // Platform access benefits (3 items)
    platformAccess: {
        icon: [0.2, 0.35, 0.5],
        text: [0.35, 0.5, 0.65],
    },
};
