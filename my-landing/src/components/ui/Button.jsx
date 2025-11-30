/**
 * Reusable Button component with different variants
 * @param {string} variant - Button style variant: 'primary' | 'secondary'
 * @param {function} onClick - Click handler function
 * @param {React.ReactNode} children - Button content
 * @param {string} className - Additional CSS classes
 */
export default function Button({
    variant = 'primary',
    onClick,
    children,
    className = ''
}) {
    const baseStyles = 'flex justify-center items-center uppercase cursor-pointer transition-all duration-300';

    const variantStyles = {
        primary: 'bg-white text-[#0F0F0F] hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] hover:scale-105',
        secondary: 'bg-transparent text-white border border-white hover:bg-white hover:text-[#0F0F0F]'
    };

    const fontStyles = {
        fontFamily: 'var(--font-inter)',
        fontWeight: 600,
        fontSize: '16px',
        lineHeight: '19px',
        letterSpacing: '0.08em',
    };

    return (
        <button
            onClick={onClick}
            className={`${baseStyles} ${variantStyles[variant]} ${className}`}
            style={fontStyles}
        >
            {children}
        </button>
    );
}
