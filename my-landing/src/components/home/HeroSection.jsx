import Navbar from '../layout/Navbar';

export default function HeroSection() {
    return (
        <section id="hero" className="relative w-full h-[600px] md:h-[800px] overflow-hidden flex items-center justify-center">
            {/* Navbar - Now a separate component */}
            <Navbar />

            {/* Background Image - Primary */}
            <div
                className="absolute inset-0 w-full h-full"
                style={{
                    backgroundImage: 'url(/images/hero-bg.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />

            {/* Subtle dark overlay for text readability */}
            <div className="absolute inset-0 w-full h-full bg-black/20" />

            {/* Bottom Gradient for Seamless Transition */}
            <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-b from-transparent to-[#0F0F0F] z-10" />

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center gap-5 md:gap-8 px-4">
                {/* Main Heading */}
                <h1
                    className="text-white text-center uppercase max-w-[372px] md:max-w-[1046.34px]"
                    style={{
                        fontFamily: 'var(--font-bebas-neue)',
                        fontSize: '64px',
                        lineHeight: '84%',
                        fontWeight: 400,
                    }}
                >
                    <style>{`
                        @media (min-width: 768px) {
                            h1 {
                                font-size: 136px !important;
                            }
                        }
                    `}</style>
                    Stop Chasing Leads. Let Them Come to You.
                </h1>

                {/* Subheading */}
                <p
                    className="text-white text-center max-w-[294px] md:max-w-[708.44px]"
                    style={{
                        fontFamily: 'var(--font-inter)',
                        fontSize: '16px',
                        lineHeight: '19px',
                        fontWeight: 400,
                    }}
                >
                    <style>{`
                        @media (min-width: 768px) {
                            p {
                                font-size: 24px !important;
                                line-height: 29px !important;
                            }
                        }
                    `}</style>
                    Join India&apos;s first WhatsApp community built exclusively for manufacturers who are tired of cold calls that go nowhere.
                </p>
            </div>
        </section>
    );
}
