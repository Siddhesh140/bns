/**
 * Reusable checkmark icon component
 * @param {string} size - Icon size: 'sm' | 'md' | 'lg'
 * @param {string} color - Icon color (default: white)
 * @param {string} bgColor - Background color (default: #0F0F0F)
 */
export default function CheckIcon({
    size = 'md',
    color = '#FFFFFF',
    bgColor = '#0F0F0F'
}) {
    const sizes = {
        sm: { container: '24px', icon: '16' },
        md: { container: '32px', icon: '20' },
        lg: { container: '40px', icon: '24' }
    };

    const { container, icon } = sizes[size];

    return (
        <div
            style={{
                width: container,
                height: container,
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: bgColor,
                borderRadius: '50%'
            }}
        >
            <svg width={icon} height={icon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    );
}
