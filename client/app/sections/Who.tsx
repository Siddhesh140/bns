'use client';

import Image from 'next/image';

export default function Who() {
    return (
        <>
            <section id="who"
                className="relative flex flex-col justify-end items-start overflow-hidden w-full min-h-[800px] md:min-h-[954px] p-5 md:p-20 max-w-[400px] md:max-w-[1440px] mx-auto"
                style={{ isolation: 'isolate' }}
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

                {/* Dark Gradient / Blur Ellipses - Keep desktop positioning */}
                <div className="hidden md:block absolute z-0" style={{ width: '1262.77px', height: '653.58px', left: '-710.53px', top: '212.36px', background: '#0F0F0F', filter: 'blur(388.996px)', transform: 'matrix(0.99, 0.12, -0.29, 0.96, 0, 0)', opacity: 0.6 }} />
                <div className="hidden md:block absolute z-0" style={{ width: '904.82px', height: '760.07px', left: '-1129.55px', top: '3.91px', background: '#0F0F0F', filter: 'blur(333.426px)', transform: 'matrix(0.98, -0.22, 0.14, 0.99, 0, 0)', opacity: 0.6 }} />
                <div className="hidden md:block absolute z-0" style={{ width: '2779.49px', height: '835.54px', left: '-747.27px', top: '402.92px', background: '#0F0F0F', filter: 'blur(277.855px)', transform: 'matrix(0.97, 0.23, -0.41, 0.91, 0, 0)', opacity: 0.3 }} />
                <div className="hidden md:block absolute z-0" style={{ width: '4269.13px', height: '1076.38px', left: '-2447.41px', top: '486.16px', background: '#0F0F0F', filter: 'blur(388.996px)', transform: 'matrix(0.99, 0.13, -0.31, 0.95, 0, 0)', opacity: 0.3 }} />
                <div className="hidden md:block absolute z-0" style={{ width: '1576.76px', height: '327.76px', left: '-161.9px', top: '798.73px', background: '#0F0F0F', filter: 'blur(222.284px)', transform: 'matrix(0.98, -0.22, 0.14, 0.99, 0, 0)', opacity: 0.5 }} />

                {/* Mobile Blur Overlays */}
                <div className="md:hidden absolute inset-0 w-full h-full z-0" style={{ background: 'linear-gradient(180deg, rgba(15, 15, 15, 0.3) 0%, rgba(15, 15, 15, 0.8) 100%)' }} />

                {/* Content Container */}
                <div className="relative z-[2] flex flex-col md:flex-row justify-between items-start gap-10 md:gap-16 w-full">
                    {/* Top Content */}
                    <div className="flex flex-col items-start gap-7 md:gap-7 w-full md:w-auto">
                        <h2 className="text-white uppercase w-full text-[52px] md:text-[88px] leading-[88%]" style={{ fontFamily: 'var(--font-bebas-neue)', fontWeight: 400 }}>
                            Join Now. Start Growing.
                        </h2>
                        <p className="text-white text-lg md:text-2xl leading-[22px] md:leading-[29px] w-full md:w-[402px]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}>
                            No annual lock-in. No contracts. Stay as long as it&apos;s valuable.
                        </p>

                        {/* Join Button */}
                        <button
                            className="bg-white flex justify-center items-center uppercase cursor-pointer transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] hover:scale-105 px-7 md:px-7 py-4 md:py-4 text-sm md:text-base"
                            style={{
                                fontFamily: 'var(--font-inter)',
                                fontWeight: 600,
                                letterSpacing: '0.08em',
                                color: '#0F0F0F',
                            }}
                        >
                            Join Now
                        </button>
                    </div>

                    {/* Benefits List - With dark background box */}
                    <div className="flex flex-col items-start p-5 md:p-10 gap-4 md:gap-4 w-full md:w-auto bg-[#191919]">
                        {/* Item 1 */}
                        <div className="flex flex-row items-start gap-[15px]">
                            <div style={{ width: '32px', height: '32px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FFFFFF', borderRadius: '50%' }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 6L9 17L4 12" stroke="#0F0F0F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <p className="text-white text-lg md:text-2xl leading-[22px] md:leading-[29px]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}>
                                20 qualified leads monthly
                            </p>
                        </div>

                        {/* Item 2 */}
                        <div className="flex flex-row items-start gap-[15px]">
                            <div style={{ width: '32px', height: '32px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FFFFFF', borderRadius: '50%' }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 6L9 17L4 12" stroke="#0F0F0F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <p className="text-white text-lg md:text-2xl leading-[22px] md:leading-[29px]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}>
                                Manufacturing-only WhatsApp group
                            </p>
                        </div>

                        {/* Item 3 */}
                        <div className="flex flex-row items-start gap-[15px]">
                            <div style={{ width: '32px', height: '32px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FFFFFF', borderRadius: '50%' }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 6L9 17L4 12" stroke="#0F0F0F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <p className="text-white text-lg md:text-2xl leading-[22px] md:leading-[29px]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}>
                                Competitor & market data
                            </p>
                        </div>

                        {/* Item 4 */}
                        <div className="flex flex-row items-start gap-[15px]">
                            <div style={{ width: '32px', height: '32px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FFFFFF', borderRadius: '50%' }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 6L9 17L4 12" stroke="#0F0F0F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <p className="text-white text-lg md:text-2xl leading-[22px] md:leading-[29px]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}>
                                Daily opportunity alerts
                            </p>
                        </div>

                        {/* Item 5 */}
                        <div className="flex flex-row items-start gap-[15px]">
                            <div style={{ width: '32px', height: '32px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FFFFFF', borderRadius: '50%' }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 6L9 17L4 12" stroke="#0F0F0F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <p className="text-white text-lg md:text-2xl leading-[22px] md:leading-[29px]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}>
                                Webinars for your team
                            </p>
                        </div>

                        {/* Item 6 */}
                        <div className="flex flex-row items-start gap-[15px]">
                            <div style={{ width: '32px', height: '32px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FFFFFF', borderRadius: '50%' }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 6L9 17L4 12" stroke="#0F0F0F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <p className="text-white text-lg md:text-2xl leading-[22px] md:leading-[29px]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}>
                                Priority platform access
                            </p>
                        </div>
                    </div>
                </div>
            </section>



            {/* Still Thinking Section */}
            <section className="w-full flex flex-col items-start p-5 md:p-20 gap-16 md:gap-16 max-w-[400px] md:max-w-[1440px] mx-auto bg-[#0F0F0F]">
                <div className="flex flex-col md:flex-row justify-between items-start gap-7 md:gap-7 w-full">
                    {/* Left Content */}
                    <div className="flex flex-col items-start gap-7 md:gap-7 w-full md:w-auto">
                        <h2 className="text-white uppercase w-full text-[52px] md:text-[88px] leading-[88%]" style={{ fontFamily: 'var(--font-bebas-neue)', fontWeight: 400 }}>
                            Still thinking?
                        </h2>
                        <p className="text-white text-xl md:text-[28px] leading-6 md:leading-[34px] w-full" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}>
                            Book a 10-Minute Call
                        </p>
                    </div>

                    {/* Right Content - Button */}
                    <button
                        className="flex justify-center items-center bg-white cursor-pointer transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] hover:scale-105 px-7 py-4 w-full md:w-auto uppercase text-sm md:text-base"
                        style={{
                            fontFamily: 'var(--font-inter)',
                            fontWeight: 600,
                            letterSpacing: '0.08em',
                            color: '#0F0F0F',
                        }}
                    >
                        Book Now
                    </button>
                </div>
            </section>
        </>
    );
}
