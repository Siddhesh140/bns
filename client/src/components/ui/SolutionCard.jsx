/**
 * Reusable SolutionCard component for solution/feature blocks
 * @param {string} image - Image URL
 * @param {string} title - Card title
 * @param {string} subtitle - Subtitle text
 * @param {string|React.ReactNode} content - Main content (can be text or JSX)
 * @param {string} footer - Footer text
 * @param {string} imagePosition - 'left' | 'right' (desktop only, mobile always shows image on top)
 */
export default function SolutionCard({
    image,
    title,
    subtitle,
    content,
    footer,
    imagePosition = 'left'
}) {
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

            {/* Text Content */}
            <div className={`flex flex-col justify-center items-start flex-1 gap-10 md:gap-12 py-0 md:py-10 px-0 md:px-10 ${isImageLeft ? 'order-2' : 'order-1'}`}>
                <div className="flex flex-col items-start gap-8 w-full">
                    <h3
                        className="text-white text-2xl md:text-4xl leading-[29px] md:leading-[44px]"
                        style={{ fontFamily: 'var(--font-inter)', fontWeight: 500 }}
                    >
                        {title}
                    </h3>
                    {subtitle && (
                        <p
                            className="text-white text-xl md:text-2xl leading-6 md:leading-[29px]"
                            style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}
                        >
                            {subtitle}
                        </p>
                    )}
                    {content && (
                        <div
                            className="text-white text-lg md:text-xl leading-6"
                            style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}
                        >
                            {content}
                        </div>
                    )}
                </div>
                {footer && (
                    <p
                        className="text-white text-lg md:text-xl leading-6"
                        style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}
                    >
                        {footer}
                    </p>
                )}
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
}
