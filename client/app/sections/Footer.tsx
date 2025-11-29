'use client';

import Image from 'next/image';

export default function Footer() {
    const handleLogoClick = () => {
        window.location.reload();
    };

    return (

        <footer
            className="flex flex-col md:flex-row justify-between items-start w-full max-w-[400px] md:max-w-[1440px] mx-auto bg-[#191919] relative z-10"
            style={{
                padding: '80px 20px', // Mobile padding
            }}
        >
            {/* Desktop Padding Override */}
            <style jsx>{`
                @media (min-width: 768px) {
                    footer {
                        padding: 80px !important;
                    }
                }
            `}</style>

            {/* Left Column (Frame 75) */}
            <div className="flex flex-col items-start gap-10 md:gap-10 w-full md:w-auto mb-16 md:mb-0">
                {/* Frame 83: Logo and Title */}
                <div className="flex flex-col items-start gap-6 md:gap-6 w-full md:w-auto">
                    {/* Logo */}
                    <div
                        className="cursor-pointer relative flex items-center"
                        onClick={handleLogoClick}
                        style={{ width: '76px', height: '40px' }}
                    >
                        <Image
                            src="/images/logo.png"
                            alt="BNS Logo"
                            width={76}
                            height={40}
                            style={{ objectFit: 'contain' }}
                            unoptimized
                        />
                    </div>

                    {/* Title */}
                    <h3 className="text-white text-[28px] leading-[34px] font-normal" style={{ fontFamily: 'var(--font-inter)' }}>
                        Manufacturing Community
                    </h3>
                </div>

                {/* Subtitle */}
                <p className="text-[#ADADAD] text-base leading-[19px] font-normal w-full md:w-[417px]" style={{ fontFamily: 'var(--font-inter)' }}>
                    India&apos;s first WhatsApp community built exclusively for manufacturers.
                </p>
            </div>

            {/* Right Column (Frame 81) */}
            <div className="flex flex-col md:flex-row items-start gap-16 md:gap-16 w-full md:w-auto">
                {/* Social Media Column (Frame 78) */}
                <div className="flex flex-col items-start gap-6 md:gap-6 w-full md:w-[130px]">
                    <h4 className="text-white text-base leading-[19px] font-semibold uppercase tracking-[0.08em]" style={{ fontFamily: 'var(--font-inter)' }}>
                        Social Media
                    </h4>

                    {/* Links Container */}
                    <div className="flex flex-col items-start gap-3 md:gap-3 w-full">
                        {/* Instagram */}
                        <a href="https://www.instagram.com/bigvision2025/" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center gap-1 group transition-colors duration-300">
                            <div className="w-5 h-5 flex items-center justify-center">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-[#ADADAD] group-hover:stroke-[#3B82F6] transition-colors duration-300">
                                    <rect x="2" y="2" width="20" height="20" rx="5" strokeWidth="2" />
                                    <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61991 14.1902 8.22773 13.4229 8.09406 12.5922C7.9604 11.7616 8.09206 10.9099 8.47032 10.1584C8.84858 9.40685 9.45418 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87658 12.63 8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M17.5 6.5H17.51" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <span className="text-[#ADADAD] group-hover:text-[#3B82F6] transition-colors duration-300 text-base leading-[19px] font-normal" style={{ fontFamily: 'var(--font-inter)' }}>@bigvision</span>
                        </a>

                        {/* LinkedIn */}
                        <a href="https://www.linkedin.com/company/bigvision-consulting-marketing/" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center gap-1 group transition-colors duration-300">
                            <div className="w-5 h-5 flex items-center justify-center">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-[#ADADAD] group-hover:stroke-[#3B82F6] transition-colors duration-300">
                                    <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6 9H2V21H6V9Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <span className="text-[#ADADAD] group-hover:text-[#3B82F6] transition-colors duration-300 text-base leading-[19px] font-normal" style={{ fontFamily: 'var(--font-inter)' }}>@bigvision</span>
                        </a>

                        {/* Twitter (X) */}
                        <a href="#" className="flex flex-row items-center gap-1 group transition-colors duration-300">
                            <div className="w-5 h-5 flex items-center justify-center">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-[#ADADAD] group-hover:stroke-[#3B82F6] transition-colors duration-300">
                                    <path d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34675 17.567 3.11798C16.6767 2.88921 15.736 2.9326 14.8611 3.24293C13.9862 3.55326 13.2168 4.11637 12.6486 4.86114C12.0804 5.60591 11.7381 6.49961 11.664 7.43C11.664 7.43 11.664 7.43 11.664 7.43C8.28 7.43 5.14 5.73 3 3C3 3 -1 12 8 16C5.94 17.43 3.37 17.79 1 17.5C9 22 18 17.5 18 7.43C18 7.15 18 6.87 17.96 6.59C18.98 5.56 19.84 4.34 20.5 3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <span className="text-[#ADADAD] group-hover:text-[#3B82F6] transition-colors duration-300 text-base leading-[19px] font-normal" style={{ fontFamily: 'var(--font-inter)' }}>@bigvision</span>
                        </a>

                        {/* Facebook */}
                        <a href="#" className="flex flex-row items-center gap-1 group transition-colors duration-300">
                            <div className="w-5 h-5 flex items-center justify-center">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-[#ADADAD] group-hover:stroke-[#3B82F6] transition-colors duration-300">
                                    <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <span className="text-[#ADADAD] group-hover:text-[#3B82F6] transition-colors duration-300 text-base leading-[19px] font-normal" style={{ fontFamily: 'var(--font-inter)' }}>@bigvision</span>
                        </a>
                    </div>
                </div>

                {/* Contact Column (Frame 77) */}
                <div className="flex flex-col items-start gap-5 md:gap-5 w-full md:w-[161px]">
                    <h4 className="text-white text-base leading-[19px] font-semibold uppercase tracking-[0.08em]" style={{ fontFamily: 'var(--font-inter)' }}>
                        Contact
                    </h4>

                    {/* Info Container */}
                    <div className="flex flex-col items-start gap-4 md:gap-4 w-full">
                        {/* Email */}
                        <div className="flex flex-row items-center gap-2">
                            <div className="w-6 h-6 flex items-center justify-center">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#ADADAD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M22 6L12 13L2 6" stroke="#ADADAD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <span className="text-[#ADADAD] text-base leading-[19px] font-normal" style={{ fontFamily: 'var(--font-inter)' }}>contact@bigvision.com</span>
                        </div>

                        {/* Phone */}
                        <div className="flex flex-row items-center gap-2">
                            <div className="w-6 h-6 flex items-center justify-center">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 16.92V19.92C22.0011 20.1986 21.9441 20.4742 21.8325 20.7294C21.7209 20.9846 21.5573 21.2137 21.3521 21.402C21.1468 21.5902 20.9046 21.7336 20.6407 21.8228C20.3769 21.912 20.0974 21.9452 19.82 21.92C16.7428 21.5857 13.787 20.5342 11.19 18.85C8.77382 17.2436 6.72159 15.1631 5.12 12.72C3.42697 10.1192 2.37858 7.16718 2.05 4.09C2.02474 3.81285 2.0581 3.53377 2.14757 3.27028C2.23705 3.00679 2.38066 2.76455 2.56924 2.55891C2.75782 2.35328 2.98725 2.18871 3.24305 2.07542C3.49885 1.96213 3.77558 1.90253 4.056 1.9H7.06C7.53618 1.89763 7.99753 2.0693 8.35619 2.38247C8.71484 2.69564 8.94978 3.13192 9.016 3.609C9.13845 4.53531 9.36453 5.44544 9.69 6.32C9.82264 6.67711 9.85122 7.06455 9.77258 7.43905C9.69394 7.81356 9.51126 8.16035 9.245 8.44L7.97 9.71C9.39615 12.2146 11.4695 14.2602 13.98 15.65L15.25 14.38C15.5302 14.1132 15.8778 13.9301 16.2533 13.8512C16.6288 13.7723 17.0173 13.8009 17.375 13.934C18.2496 14.2595 19.1597 14.4856 20.086 14.608C20.5651 14.6747 21.0028 14.9116 21.3166 15.2726C21.6305 15.6335 21.8016 16.0968 21.8 16.574V16.92Z" stroke="#ADADAD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <span className="text-[#ADADAD] text-base leading-[19px] font-normal" style={{ fontFamily: 'var(--font-inter)' }}>+91 95796 62005</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
