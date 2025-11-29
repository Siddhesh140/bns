
import Image from 'next/image';

export default function Who() {
    return (
        <>
            <section id="who"
                className="relative flex flex-col justify-end items-start overflow-hidden"
                style={{
                    padding: '80px',
                    gap: '64px',
                    width: '1440px',
                    height: '954px',
                    isolation: 'isolate',
                }}
            >
                {/* Background Image */}
                <div
                    className="absolute inset-0 w-full h-full z-0"
                    style={{
                        backgroundImage: 'url(/images/join-bg.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />

                {/* Saturation Overlay */}
                <div
                    className="absolute inset-0 w-full h-full z-[1]"
                    style={{
                        background: '#D9D9D9',
                        mixBlendMode: 'saturation',
                    }}
                />

                {/* Dark Gradient / Blur Ellipses */}
                {/* Ellipse 55 */}
                <div
                    className="absolute z-0"
                    style={{
                        width: '1262.77px',
                        height: '653.58px',
                        left: '-710.53px',
                        top: '212.36px',
                        background: '#0F0F0F',
                        filter: 'blur(388.996px)',
                        transform: 'matrix(0.99, 0.12, -0.29, 0.96, 0, 0)',
                        opacity: 0.6,
                    }}
                />
                {/* Ellipse 54 */}
                <div
                    className="absolute z-0"
                    style={{
                        width: '904.82px',
                        height: '760.07px',
                        left: '-1129.55px',
                        top: '3.91px',
                        background: '#0F0F0F',
                        filter: 'blur(333.426px)',
                        transform: 'matrix(0.98, -0.22, 0.14, 0.99, 0, 0)',
                        opacity: 0.6,
                    }}
                />
                {/* Ellipse 53 */}
                <div
                    className="absolute z-0"
                    style={{
                        width: '2779.49px',
                        height: '835.54px',
                        left: '-747.27px',
                        top: '402.92px',
                        background: '#0F0F0F',
                        filter: 'blur(277.855px)',
                        transform: 'matrix(0.97, 0.23, -0.41, 0.91, 0, 0)',
                        opacity: 0.3,
                    }}
                />
                {/* Ellipse 52 */}
                <div
                    className="absolute z-0"
                    style={{
                        width: '4269.13px',
                        height: '1076.38px',
                        left: '-2447.41px',
                        top: '486.16px',
                        background: '#0F0F0F',
                        filter: 'blur(388.996px)',
                        transform: 'matrix(0.99, 0.13, -0.31, 0.95, 0, 0)',
                        opacity: 0.3,
                    }}
                />
                {/* Ellipse 56 */}
                <div
                    className="absolute z-0"
                    style={{
                        width: '1576.76px',
                        height: '327.76px',
                        left: '-161.9px',
                        top: '798.73px',
                        background: '#0F0F0F',
                        filter: 'blur(222.284px)',
                        transform: 'matrix(0.98, -0.22, 0.14, 0.99, 0, 0)',
                        opacity: 0.5,
                    }}
                />

                {/* Content Container (Frame 43) */}
                <div
                    className="relative z-[2] flex flex-row justify-between items-start"
                    style={{
                        gap: '64px',
                        width: '1280px',
                        height: '352px',
                    }}
                >
                    {/* Left Content (Frame 42) */}
                    <div
                        className="flex flex-col items-start"
                        style={{
                            gap: '28px',
                            width: '560px',
                            height: '285px',
                        }}
                    >
                        <h2
                            className="text-white uppercase"
                            style={{
                                fontFamily: 'var(--font-bebas-neue)',
                                fontWeight: 400,
                                fontSize: '88px',
                                lineHeight: '88%',
                                width: '560px',
                            }}
                        >
                            Join Now. Start Growing.
                        </h2>
                        <p
                            className="text-white"
                            style={{
                                fontFamily: 'var(--font-inter)',
                                fontWeight: 400,
                                fontSize: '24px',
                                lineHeight: '29px',
                                width: '402px',
                            }}
                        >
                            No annual lock-in. No contracts. Stay as long as it&apos;s valuable.
                        </p>

                        {/* Join Button */}
                        <button
                            className="bg-white flex justify-center items-center uppercase cursor-pointer transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] hover:scale-105"
                            style={{
                                padding: '16px 28px',
                                height: '44px',
                                fontFamily: 'var(--font-inter)',
                                fontWeight: 600,
                                fontSize: '16px',
                                lineHeight: '19px',
                                letterSpacing: '0.08em',
                                color: '#0F0F0F',
                            }}
                        >
                            Join Now
                        </button>
                    </div>

                    {/* Right Content (Frame 37) - Benefits List */}
                    <div
                        className="flex flex-col items-start"
                        style={{
                            padding: '40px',
                            gap: '56px',
                            width: '546.12px',
                            height: '352px',
                            background: '#191919',
                        }}
                    >
                        <div
                            className="flex flex-col items-start"
                            style={{
                                gap: '16px',
                                width: '466.12px',
                            }}
                        >
                            {/* Item 1 */}
                            <div className="flex flex-row items-center" style={{ gap: '15px' }}>
                                <div style={{ width: '32px', height: '32px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FFFFFF', borderRadius: '50%' }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 6L9 17L4 12" stroke="#0F0F0F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <p className="text-white" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, fontSize: '24px', lineHeight: '29px' }}>
                                    20 qualified leads monthly
                                </p>
                            </div>

                            {/* Item 2 */}
                            <div className="flex flex-row items-center" style={{ gap: '15px' }}>
                                <div style={{ width: '32px', height: '32px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FFFFFF', borderRadius: '50%' }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 6L9 17L4 12" stroke="#0F0F0F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <p className="text-white" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, fontSize: '24px', lineHeight: '29px' }}>
                                    Manufacturing-only WhatsApp group
                                </p>
                            </div>

                            {/* Item 3 */}
                            <div className="flex flex-row items-center" style={{ gap: '15px' }}>
                                <div style={{ width: '32px', height: '32px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FFFFFF', borderRadius: '50%' }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 6L9 17L4 12" stroke="#0F0F0F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <p className="text-white" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, fontSize: '24px', lineHeight: '29px' }}>
                                    Competitor & market data
                                </p>
                            </div>

                            {/* Item 4 */}
                            <div className="flex flex-row items-center" style={{ gap: '15px' }}>
                                <div style={{ width: '32px', height: '32px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FFFFFF', borderRadius: '50%' }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 6L9 17L4 12" stroke="#0F0F0F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <p className="text-white" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, fontSize: '24px', lineHeight: '29px' }}>
                                    Webinars for your team
                                </p>
                            </div>

                            {/* Item 5 */}
                            <div className="flex flex-row items-center" style={{ gap: '15px' }}>
                                <div style={{ width: '32px', height: '32px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FFFFFF', borderRadius: '50%' }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 6L9 17L4 12" stroke="#0F0F0F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <p className="text-white" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, fontSize: '24px', lineHeight: '29px' }}>
                                    Daily opportunity alerts
                                </p>
                            </div>

                            {/* Item 6 */}
                            <div className="flex flex-row items-center" style={{ gap: '15px' }}>
                                <div style={{ width: '32px', height: '32px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FFFFFF', borderRadius: '50%' }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 6L9 17L4 12" stroke="#0F0F0F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <p className="text-white" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, fontSize: '24px', lineHeight: '29px' }}>
                                    Priority platform access
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Still Thinking Section */}
            <section
                className="flex flex-col items-start"
                style={{
                    padding: '80px',
                    gap: '64px',
                    width: '1440px',
                    height: '270px',
                    background: '#0F0F0F',
                }}
            >
                <div
                    className="flex flex-row justify-between items-start"
                    style={{
                        gap: '28px',
                        width: '1280px',
                        height: '110px',
                    }}
                >
                    {/* Left Content */}
                    <div
                        className="flex flex-col items-start"
                        style={{
                            gap: '28px',
                            width: '673.57px',
                            height: '110px',
                        }}
                    >
                        <h2
                            className="text-white uppercase text-center"
                            style={{
                                fontFamily: 'var(--font-bebas-neue)',
                                fontWeight: 400,
                                fontSize: '88px',
                                lineHeight: '88%',
                                width: '438px',
                            }}
                        >
                            Still thinking?
                        </h2>
                        <p
                            className="text-white"
                            style={{
                                fontFamily: 'var(--font-inter)',
                                fontWeight: 400,
                                fontSize: '28px',
                                lineHeight: '34px',
                                width: '673.57px',
                            }}
                        >
                            Book a 10-Minute Call
                        </p>
                    </div>

                    {/* Right Content - Button */}
                    <div
                        className="flex flex-row justify-center items-center bg-white cursor-pointer transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] hover:scale-105"
                        style={{
                            padding: '16px 28px',
                            gap: '8px',
                            width: '180px',
                            height: '44px',
                        }}
                    >
                        <span
                            className="uppercase"
                            style={{
                                fontFamily: 'var(--font-inter)',
                                fontWeight: 600,
                                fontSize: '16px',
                                lineHeight: '19px',
                                letterSpacing: '0.08em',
                                color: '#0F0F0F',
                            }}
                        >
                            Book Now
                        </span>
                    </div>
                </div>
            </section>
        </>
    );
}
