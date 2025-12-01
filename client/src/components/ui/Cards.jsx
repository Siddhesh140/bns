/**
 * Comprehensive Card Component Library
 * All card variants in one reusable component
 */

/**
 * Problem Card - Used in "Problems Section"
 * Displays an image with grayscale filter and content overlay at bottom
 */
export const ProblemCard = ({
    image,
    title,
    description,
    className = ''
}) => (
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

/**
 * Solution Card - Feature block with alternating image/text layout
 * Used in "What You Actually Get" section
 */
export const SolutionCard = ({
    image,
    title,
    subtitle,
    content,
    footer,
    imagePosition = 'left'
}) => {
    const isImageLeft = imagePosition === 'left';

    return (
        <div className="flex flex-col md:flex-row items-center p-5 md:p-6 gap-10 md:gap-[60px] w-full bg-dark-gray">
            {/* Image Container - Mobile First (always on top) */}
            <div className={`md:hidden relative flex justify-center items-center w-full h-[312px] bg-[#242424]`}>
                <div className="relative w-[80%] h-[80%]">
                    <img
                        src={image}
                        alt={title}
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                </div>
            </div>

            {/* Desktop: Image Left */}
            {isImageLeft && (
                <div className="hidden md:flex relative justify-center items-center w-[540px] h-[540px] bg-[#242424] order-1">
                    <div className="relative w-[80%] h-[80%]">
                        <img
                            src={image}
                            alt={title}
                            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                        />
                    </div>
                </div>
            )}

            {/* Content */}
            <div className={`flex flex-col items-start gap-6 md:gap-8 w-full ${isImageLeft ? 'md:order-2' : 'md:order-1'}`}>
                <div className="flex flex-col items-start gap-5 md:gap-5 w-full">
                    <h3 className="text-white uppercase text-2xl md:text-[40px] leading-[100%]" style={{ fontFamily: 'var(--font-bebas-neue)', fontWeight: 400 }}>
                        {title}
                    </h3>
                    <p className="text-white text-lg md:text-2xl leading-[22px] md:leading-[29px]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 600 }}>
                        {subtitle}
                    </p>
                </div>

                <p className="text-white text-base md:text-xl leading-[19px] md:leading-6" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}>
                    {content}
                </p>

                <p className="text-white text-base md:text-xl leading-[19px] md:leading-6" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, fontStyle: 'italic' }}>
                    {footer}
                </p>
            </div>

            {/* Desktop: Image Right */}
            {!isImageLeft && (
                <div className="hidden md:flex relative justify-center items-center w-[540px] h-[540px] bg-[#242424] order-2">
                    <div className="relative w-[80%] h-[80%]">
                        <img
                            src={image}
                            alt={title}
                            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

/**
 * Default Card - Generic card component
 * Fallback for simple card layouts
 */
export const DefaultCard = ({
    image,
    title,
    description,
    className = ''
}) => (
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

/**
 * Unified Card Component - Main export with variant support
 * Automatically selects the right card type based on variant prop
 */
export default function Card({ variant = 'default', ...props }) {
    switch (variant) {
        case 'problem':
            return <ProblemCard {...props} />;
        case 'solution':
            return <SolutionCard {...props} />;
        default:
            return <DefaultCard {...props} />;
    }
}
