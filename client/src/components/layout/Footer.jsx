import { InstagramIcon, LinkedInIcon, TwitterIcon, FacebookIcon, EmailIcon, PhoneIcon } from '../ui';

export default function Footer() {
    const handleLogoClick = () => {
        window.location.reload();
    };

    return (

        <footer
            className="flex flex-col md:flex-row justify-between items-start w-full max-w-[400px] md:max-w-[1440px] mx-auto bg-dark-secondary relative z-10"
            style={{
                padding: '80px 20px', // Mobile padding
            }}
        >
            {/* Desktop Padding Override */}
            <style>{`
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
                        <img
                            src="/images/logo.png"
                            alt="BNS Logo"
                            width={76}
                            height={40}
                            style={{ objectFit: 'contain' }}
                        />
                    </div>

                    {/* Title */}
                    <h3 className="text-white text-[1.75rem] leading-[2.125rem] font-normal" style={{ fontFamily: 'var(--font-inter)' }}>
                        Manufacturing Community
                    </h3>
                </div>

                {/* Subtitle */}
                <p className="text-light-gray text-base leading-[1.1875rem] font-normal w-full md:w-[417px]" style={{ fontFamily: 'var(--font-inter)' }}>
                    India&apos;s first WhatsApp community built exclusively for manufacturers.
                </p>
            </div>

            {/* Right Column (Frame 81) */}
            <div className="flex flex-col md:flex-row items-start gap-16 md:gap-16 w-full md:w-auto">
                {/* Social Media Column (Frame 78) */}
                <div className="flex flex-col items-start gap-6 md:gap-6 w-full md:w-[130px]">
                    <h4 className="text-white text-base leading-[1.1875rem] font-semibold uppercase tracking-[0.08em]" style={{ fontFamily: 'var(--font-inter)' }}>
                        Social Media
                    </h4>

                    {/* Links Container */}
                    <div className="flex flex-col items-start gap-3 md:gap-3 w-full">
                        {/* Instagram */}
                        <a href="https://www.instagram.com/bigvision2025/" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center gap-1 group transition-colors duration-300">
                            <div className="w-5 h-5 flex items-center justify-center">
                                <InstagramIcon size={20} className="stroke-light-gray group-hover:stroke-brand-blue transition-colors duration-300" />
                            </div>
                            <span className="text-light-gray group-hover:text-brand-blue transition-colors duration-300 text-base leading-[1.1875rem] font-normal" style={{ fontFamily: 'var(--font-inter)' }}>@BnS</span>
                        </a>

                        {/* LinkedIn */}
                        <a href="https://www.linkedin.com/company/bigvision-consulting-marketing/" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center gap-1 group transition-colors duration-300">
                            <div className="w-5 h-5 flex items-center justify-center">
                                <LinkedInIcon size={20} className="stroke-light-gray group-hover:stroke-brand-blue transition-colors duration-300" />
                            </div>
                            <span className="text-[#ADADAD] group-hover:text-[#3B82F6] transition-colors duration-300 text-base leading-[19px] font-normal" style={{ fontFamily: 'var(--font-inter)' }}>@BnS</span>
                        </a>

                        {/* Twitter (X) */}
                        <a href="#" className="flex flex-row items-center gap-1 group transition-colors duration-300">
                            <div className="w-5 h-5 flex items-center justify-center">
                                <TwitterIcon size={20} className="stroke-light-gray group-hover:stroke-brand-blue transition-colors duration-300" />
                            </div>
                            <span className="text-[#ADADAD] group-hover:text-[#3B82F6] transition-colors duration-300 text-base leading-[19px] font-normal" style={{ fontFamily: 'var(--font-inter)' }}>@BnS</span>
                        </a>

                        {/* Facebook */}
                        <a href="#" className="flex flex-row items-center gap-1 group transition-colors duration-300">
                            <div className="w-5 h-5 flex items-center justify-center">
                                <FacebookIcon size={20} className="stroke-light-gray group-hover:stroke-brand-blue transition-colors duration-300" />
                            </div>
                            <span className="text-[#ADADAD] group-hover:text-[#3B82F6] transition-colors duration-300 text-base leading-[19px] font-normal" style={{ fontFamily: 'var(--font-inter)' }}>@BnS</span>
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
                                <EmailIcon size={20} color="#ADADAD" />
                            </div>
                            <span className="text-light-gray text-base leading-[1.1875rem] font-normal" style={{ fontFamily: 'var(--font-inter)' }}>contact@BnS.com</span>
                        </div>

                        {/* Phone */}
                        <div className="flex flex-row items-center gap-2">
                            <div className="w-6 h-6 flex items-center justify-center">
                                <PhoneIcon size={20} color="#ADADAD" />
                            </div>
                            <span className="text-[#ADADAD] text-base leading-[19px] font-normal" style={{ fontFamily: 'var(--font-inter)' }}>+919579662005</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
