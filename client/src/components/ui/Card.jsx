/**
 * Reusable Card component for different card types
 * @param {string} variant - Card style: 'problem' | 'solution' | 'benefit'
 * @param {string} image - Image URL
 * @param {string} title - Card title
 * @param {string} description - Card description
 * @param {string} className - Additional CSS classes
 * @param {string} imagePosition - For solution cards: 'left' | 'right'
 */
export default function Card({
    variant = 'default',
    image,
    title,
    description,
    className = '',
    imagePosition = 'left'
}) {
    // Problem Card - Used in "Problems Section"
    if (variant === 'problem') {
        return (
            <div className={`relative flex flex-col justify-end items-start w-full h-[500px] md:h-[630px] ${className}`}>
                <img
                    src={image}
                    alt={title}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'grayscale(100%)'
                    }}
                />
                <div className="relative z-10 flex flex-col items-start justify-start p-5 md:p-9 gap-6 w-full bg-dark-gray min-h-[210px] md:min-h-[220px]">
                    <h3
                        className="text-white uppercase text-xl md:text-2xl leading-6 md:leading-[29px] tracking-[0.08em]"
                        style={{ fontFamily: 'var(--font-inter)', fontWeight: 600 }}
                    >
                        {title}
                    </h3>
                    <p
                        className="text-white text-xl md:text-2xl leading-6 md:leading-[29px]"
                        style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}
                    >
                        {description}
                    </p>
                </div>
            </div>
        );
    }

    // Default card (fallback)
    return (
        <div className={`flex flex-col items-start p-5 gap-5 w-full bg-dark-secondary ${className}`}>
            {image && (
                <div className="relative w-full h-[200px]">
                    <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
            )}
            <div className="flex flex-col gap-4">
                {title && (
                    <h3 className="text-white text-xl font-semibold" style={{ fontFamily: 'var(--font-inter)' }}>
                        {title}
                    </h3>
                )}
                {description && (
                    <p className="text-white text-base" style={{ fontFamily: 'var(--font-inter)' }}>
                        {description}
                    </p>
                )}
            </div>
        </div>
    );
}
