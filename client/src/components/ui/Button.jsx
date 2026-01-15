/**
 * Reusable Button component with different variants
 * @param {string} variant - Button style variant: 'primary' | 'secondary'
 * @param {function} onClick - Click handler function
 * @param {React.ReactNode} children - Button content
 * @param {string} className - Additional CSS classes
 */
import { motion } from 'framer-motion';

export default function Button({
    variant = 'primary',
    onClick,
    children,
    className = '',
    disabled = false,
    loading = false
}) {
    // ES7 Feature: Array.includes() for validation
    const validVariants = ['primary', 'secondary'];
    const safeVariant = validVariants.includes(variant) ? variant : 'primary';

    const baseStyles = 'flex justify-center items-center uppercase transition-colors duration-300';

    const fontStyles = {
        fontFamily: 'var(--font-inter)',
        fontWeight: 600,
        fontSize: '16px',
        lineHeight: '19px',
        letterSpacing: '0.08em',
    };

    const variantStyles = {
        primary: 'bg-white text-dark disabled:opacity-50 disabled:cursor-not-allowed',
        secondary: 'bg-transparent text-white border border-white disabled:opacity-50 disabled:cursor-not-allowed'
    };

    // Hover animations based on variant
    const hoverAnimations = {
        primary: {
            scale: 1.05,
            boxShadow: "0 0 25px rgba(255, 255, 255, 0.5)"
        },
        secondary: {
            scale: 1.02,
            backgroundColor: "rgba(255, 255, 255, 1)",
            color: "#0F0F0F"
        }
    };

    return (
        <motion.button
            onClick={onClick}
            disabled={disabled || loading}
            className={`${baseStyles} ${variantStyles[safeVariant]} ${loading ? 'cursor-wait' : 'cursor-pointer'} ${className}`}
            style={fontStyles}
            whileHover={!disabled && !loading ? hoverAnimations[safeVariant] : {}}
            whileTap={!disabled && !loading ? { scale: 0.97 } : {}}
            transition={{ duration: 0.2, ease: "easeOut" }}
        >
            {loading ? 'Loading...' : children}
        </motion.button>
    );
}
