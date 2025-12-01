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
    className = '',
    disabled = false,
    loading = false
}) {
    const baseStyles = 'flex justify-center items-center uppercase transition-all duration-300 font-inter font-semibold text-base leading-[1.1875rem] tracking-[0.08em]';

    const variantStyles = {
        primary: 'bg-white text-dark hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100',
        secondary: 'bg-transparent text-white border border-white hover:bg-white hover:text-dark disabled:opacity-50 disabled:cursor-not-allowed'
    };

    return (
        <button
            onClick={onClick}
            disabled={disabled || loading}
            className={`${baseStyles} ${variantStyles[variant]} ${loading ? 'cursor-wait' : 'cursor-pointer'} ${className}`}
        >
            {loading ? 'Loading...' : children}
        </button>
    );
}
