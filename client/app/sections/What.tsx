'use client';

import Image from 'next/image';

export default function What() {
    return (
        <div id="what">
            {/* Features Section */}
            <section className="w-full flex flex-col md:flex-row md:justify-between md:items-center p-5 md:p-20 gap-5 md:gap-5 max-w-[400px] md:max-w-[1440px] mx-auto min-h-[962px] md:min-h-[720px]">
                {/* Mobile: Image First, Desktop: Content First */}
                <div className="md:hidden relative w-full max-w-[360px] h-[300px] border border-white/20">
                    <Image
                        src="/images/features-image.jpg"
                        alt="Manufacturing professional"
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </div>

                {/* Content */}
                <div className="flex flex-col items-start gap-[30px] w-full max-w-[360px] md:max-w-[687px]">
                    {/* Description */}
                    <p className="text-white w-full text-base md:text-2xl leading-[19px] md:leading-[29px]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}>
                        India&apos;s first WhatsApp community built exclusively for manufacturers. Get 20 qualified leads delivered monthly—plus live market intel, competitor insights, and daily industry updates.
                    </p>

                    {/* Benefits List */}
                    <div className="flex flex-col items-start w-full">
                        {/* Benefit 1 */}
                        <div className="flex flex-row items-start py-8 gap-4 md:gap-4 w-full border-b border-white/20">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                                <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
                                <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="text-white text-base md:text-2xl leading-[19px] md:leading-[29px] flex-1" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}>
                                20 qualified leads land in your WhatsApp every month
                            </span>
                        </div>

                        {/* Benefit 2 */}
                        <div className="flex flex-row items-start py-8 gap-2 md:gap-2 w-full border-b border-white/20">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                                <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
                                <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="text-white text-base md:text-2xl leading-[19px] md:leading-[29px] flex-1" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}>
                                See what your competitors are doing (legally, of course)
                            </span>
                        </div>

                        {/* Benefit 3 */}
                        <div className="flex flex-row items-start py-8 gap-2 md:gap-2 w-full border-b border-white/20">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                                <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
                                <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="text-white text-base md:text-2xl leading-[19px] md:leading-[29px] flex-1" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}>
                                Know which products are hot before your rivals do
                            </span>
                        </div>

                        {/* Benefit 4 */}
                        <div className="flex flex-row items-start py-8 gap-2 md:gap-2 w-full border-b border-white/20">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                                <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
                                <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="text-white text-base md:text-2xl leading-[19px] md:leading-[29px] flex-1" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}>
                                Daily news that matters—no fluff, just fact
                            </span>
                        </div>
                    </div>

                    {/* Join Now Button */}
                    <button
                        className="bg-white flex justify-center items-center uppercase cursor-pointer transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] hover:scale-105 px-7 py-4 h-11"
                        style={{
                            fontFamily: 'var(--font-inter)',
                            fontWeight: 600,
                            fontSize: '16px',
                            lineHeight: '19px',
                            letterSpacing: '0.08em',
                            color: '#0F0F0F',
                        }}
                        onClick={() => {
                            const element = document.getElementById('who');
                            if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                    >
                        Join Now
                    </button>
                </div>

                {/* Desktop: Image on Right */}
                <div className="hidden md:block relative w-full max-w-[522px] h-[560px] border border-white/20">
                    <Image
                        src="/images/features-image.jpg"
                        alt="Manufacturing professional"
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </div>
            </section>


            {/* Problems Section */}
            <section className="w-full flex flex-col items-start p-5 md:p-20 gap-20 md:gap-20 max-w-[400px] md:max-w-[1440px] mx-auto">
                <div className="flex flex-col items-start gap-14 md:gap-14 w-full max-w-[360px] md:max-w-[1280px]">
                    {/* Section Header */}
                    <div className="flex flex-col items-start gap-16 md:gap-16 w-full">
                        <div className="flex flex-col items-start gap-5 md:gap-5 w-full">
                            <h2 className="text-white uppercase w-full text-[52px] md:text-[88px] leading-[88%]" style={{ fontFamily: 'var(--font-bebas-neue)', fontWeight: 400 }}>
                                Your Factory Runs Like Clockwork. Your Lead Pipeline? Not So Much.
                            </h2>
                        </div>

                        <p className="text-white w-full text-xl md:text-2xl leading-6 md:leading-[29px]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}>
                            Let&apos;s be honest:
                        </p>
                    </div>

                    {/* Problem Cards - Mobile: Stacked, Desktop: 2x2 Grid */}
                    <div className="flex flex-col items-start gap-7 w-full">
                        {/* Mobile Only: All 4 cards stacked */}
                        <div className="md:hidden flex flex-col items-start gap-7 w-full">
                            {/* Card 1 - Exhibitions (Mobile) */}
                            <div className="relative flex flex-col justify-end items-start w-full h-[500px]">
                                <Image
                                    src="/images/problem-01.jpg"
                                    alt="Exhibition"
                                    fill
                                    style={{ objectFit: 'cover', filter: 'grayscale(100%)' }}
                                />
                                <div className="relative z-10 flex flex-col items-start p-5 gap-6 w-full bg-[#1A1A1A]">
                                    <h3 className="text-white uppercase text-xl leading-6 tracking-[0.08em]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 600 }}>
                                        Exhibitions?
                                    </h3>
                                    <p className="text-white text-xl leading-6" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}>
                                        ₹2 lakhs spent. 500 handshakes. 3 serious buyers. Maybe.
                                    </p>
                                </div>
                            </div>

                            {/* Card 2 - Website (Mobile) */}
                            <div className="relative flex flex-col justify-end items-start w-full h-[500px]">
                                <Image
                                    src="/images/problem-04.jpg"
                                    alt="Website"
                                    fill
                                    style={{ objectFit: 'cover', filter: 'grayscale(100%)' }}
                                />
                                <div className="relative z-10 flex flex-col items-start p-5 gap-6 w-full bg-[#1A1A1A]">
                                    <h3 className="text-white uppercase text-xl leading-6 tracking-[0.08em]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 600 }}>
                                        Your website?
                                    </h3>
                                    <p className="text-white text-xl leading-6" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}>
                                        Last inquiry: 6 weeks ago. Subject: &quot;Can you make plastic toys?&quot; (You manufacture industrial pumps.)
                                    </p>
                                </div>
                            </div>

                            {/* Card 3 - Cold Calling (Mobile) */}
                            <div className="relative flex flex-col justify-end items-start w-full h-[500px]">
                                <Image
                                    src="/images/problem-03.jpg"
                                    alt="Cold Calling"
                                    fill
                                    style={{ objectFit: 'cover', filter: 'grayscale(100%)' }}
                                />
                                <div className="relative z-10 flex flex-col items-start p-5 gap-6 w-full bg-[#1A1A1A]">
                                    <h3 className="text-white uppercase text-xl leading-6 tracking-[0.08em]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 600 }}>
                                        Cold calling?
                                    </h3>
                                    <p className="text-white text-xl leading-6" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}>
                                        100 calls. 80 don&apos;t answer. 15 ghost you. 5 waste your time.
                                    </p>
                                </div>
                            </div>

                            {/* Card 4 - Online Leads (Mobile) */}
                            <div className="relative flex flex-col justify-end items-start w-full h-[500px]">
                                <Image
                                    src="/images/problem-02.jpg"
                                    alt="Online Leads"
                                    fill
                                    style={{ objectFit: 'cover', filter: 'grayscale(100%)' }}
                                />
                                <div className="relative z-10 flex flex-col items-start p-5 gap-6 w-full bg-[#1A1A1A]">
                                    <h3 className="text-white uppercase text-xl leading-6 tracking-[0.08em]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 600 }}>
                                        Online leads?
                                    </h3>
                                    <p className="text-white text-xl leading-6" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}>
                                        Half spam. Half &quot;students doing project work.&quot;
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Desktop: Row 1 with 2 cards side by side */}
                        <div className="hidden md:flex flex-row items-center gap-7 w-full">
                            {/* Card 1 - Exhibitions (Desktop) */}
                            <div className="relative flex flex-col justify-end items-start flex-1 h-[630px]">
                                <Image
                                    src="/images/problem-01.jpg"
                                    alt="Exhibition"
                                    fill
                                    style={{ objectFit: 'cover', filter: 'grayscale(100%)' }}
                                />
                                <div className="relative z-10 flex flex-col items-start p-9 gap-6 w-full bg-[#1A1A1A]">
                                    <h3 className="text-white uppercase text-2xl leading-[29px] tracking-[0.08em]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 600 }}>
                                        Exhibitions?
                                    </h3>
                                    <p className="text-white text-2xl leading-[29px]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}>
                                        ₹2 lakhs spent. 500 handshakes. 3 serious buyers. Maybe.
                                    </p>
                                </div>
                            </div>

                            {/* Card 2 - Website (Desktop) */}
                            <div className="relative flex flex-col justify-end items-start flex-1 h-[630px]">
                                <Image
                                    src="/images/problem-04.jpg"
                                    alt="Website"
                                    fill
                                    style={{ objectFit: 'cover', filter: 'grayscale(100%)' }}
                                />
                                <div className="relative z-10 flex flex-col items-start p-9 gap-6 w-full bg-[#1A1A1A]">
                                    <h3 className="text-white uppercase text-2xl leading-[29px] tracking-[0.08em]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 600 }}>
                                        Your website?
                                    </h3>
                                    <p className="text-white text-2xl leading-[29px]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}>
                                        Last inquiry: 6 weeks ago. Subject: &quot;Can you make plastic toys?&quot; (You manufacture industrial pumps.)
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Desktop: Row 2 with 2 cards side by side */}
                        <div className="hidden md:flex flex-row items-center gap-7 w-full">
                            {/* Card 3 - Cold Calling (Desktop) */}
                            <div className="relative flex flex-col justify-end items-start flex-1 h-[630px]">
                                <Image
                                    src="/images/problem-03.jpg"
                                    alt="Cold Calling"
                                    fill
                                    style={{ objectFit: 'cover', filter: 'grayscale(100%)' }}
                                />
                                <div className="relative z-10 flex flex-col items-start p-9 gap-6 w-full bg-[#1A1A1A]">
                                    <h3 className="text-white uppercase text-2xl leading-[29px] tracking-[0.08em]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 600 }}>
                                        Cold calling?
                                    </h3>
                                    <p className="text-white text-2xl leading-[29px]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}>
                                        100 calls. 80 don&apos;t answer. 15 ghost you. 5 waste your time.
                                    </p>
                                </div>
                            </div>

                            {/* Card 4 - Online Leads (Desktop) */}
                            <div className="relative flex flex-col justify-end items-start flex-1 h-[630px]">
                                <Image
                                    src="/images/problem-02.jpg"
                                    alt="Online Leads"
                                    fill
                                    style={{ objectFit: 'cover', filter: 'grayscale(100%)' }}
                                />
                                <div className="relative z-10 flex flex-col items-start p-9 gap-6 w-full bg-[#1A1A1A]">
                                    <h3 className="text-white uppercase text-2xl leading-[29px] tracking-[0.08em]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 600 }}>
                                        Online leads?
                                    </h3>
                                    <p className="text-white text-2xl leading-[29px]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}>
                                        Half spam. Half &quot;students doing project work.&quot;
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Closing Text */}
                    <div className="flex flex-col items-start gap-10 w-full">
                        <p className="text-white text-xl md:text-2xl leading-6 md:leading-[29px] w-full" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}>
                            You don&apos;t have a production problem. You have a consistent lead-flow problem.
                        </p>
                        <p className="text-white text-xl md:text-2xl leading-6 md:leading-[29px] w-full" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}>
                            We built something simple: A WhatsApp community where qualified leads land in your phone every month— no exhibitions, no cold calls, no wasted time.
                        </p>
                    </div>
                </div>
            </section>



            {/* Solutions Section */}
            <section className="w-full flex flex-col items-start p-5 md:p-20 gap-12 md:gap-20 max-w-[400px] md:max-w-[1440px] mx-auto">
                {/* Section Header */}
                <div className="flex flex-col items-start w-full">
                    <h2 className="text-white uppercase w-full text-[52px] md:text-[88px] leading-[88%]" style={{ fontFamily: 'var(--font-bebas-neue)', fontWeight: 400 }}>
                        What You Actually Get
                    </h2>
                </div>

                {/* Feature Block 01 - Mobile: Image Top, Desktop: Image Left */}
                <div className="flex flex-col md:flex-row items-center p-5 md:p-6 gap-10 md:gap-[60px] w-full bg-[#1A1A1A]">
                    {/* Image Container */}
                    <div className="relative flex justify-center items-center w-full md:w-[540px] h-[312px] md:h-[540px] bg-[#242424] order-1 md:order-1">
                        <div className="relative w-[80%] h-[80%]">
                            <Image
                                src="/images/solution-01.png"
                                alt="Qualified Leads"
                                fill
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="flex flex-col justify-center items-start flex-1 gap-10 md:gap-12 py-0 md:py-10 px-0 md:px-10 order-2 md:order-2">
                        <div className="flex flex-col items-start gap-8 w-full">
                            <h3 className="text-white text-2xl md:text-4xl leading-[29px] md:leading-[44px]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 500 }}>
                                20 Qualified Leads Every Month - Guaranteed
                            </h3>
                            <p className="text-white text-xl md:text-2xl leading-6 md:leading-[29px]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}>
                                Real decision-makers who need what you make:
                            </p>
                            <p className="text-white text-lg md:text-xl leading-6" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}>
                                Buyers actively searching for suppliers<br />
                                Companies seeking OEM partners<br />
                                Distributors scouting products<br />
                                Projects with actual budgets
                            </p>
                        </div>
                        <p className="text-white text-lg md:text-xl leading-6" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}>
                            Convert just ONE lead, you&apos;ve made all of your money back which you invested. Everything after? Pure profit.
                        </p>
                    </div>
                </div>

                {/* Feature Block 02 - Mobile: Image Top, Desktop: Text Left */}
                <div className="flex flex-col md:flex-row items-center p-5 md:p-6 gap-10 md:gap-[60px] w-full bg-[#1A1A1A]">
                    {/* Image Container - Mobile First */}
                    <div className="md:hidden relative flex justify-center items-center w-full h-[312px] bg-[#242424]">
                        <div className="relative w-[80%] h-[80%]">
                            <Image
                                src="/images/solution-02.png"
                                alt="Competitor Insights"
                                fill
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="flex flex-col justify-center items-start flex-1 gap-10 md:gap-12 py-0 md:py-10 px-0 md:px-10">
                        <div className="flex flex-col items-start gap-8 w-full">
                            <h3 className="text-white text-2xl md:text-4xl leading-[29px] md:leading-[44px]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 500 }}>
                                Know What Your Competitors Are Doing
                            </h3>
                            <p className="text-white text-xl md:text-2xl leading-6 md:leading-[29px]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}>
                                We track performance across manufacturing categories:
                            </p>
                            <p className="text-white text-lg md:text-xl leading-6" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}>
                                Which products are getting bombarded with inquiries<br />
                                Which regions are buying like crazy<br />
                                What&apos;s trending up vs. dying down<br />
                                Where demand is exploding
                            </p>
                        </div>
                        <p className="text-white text-lg md:text-xl leading-6" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}>
                            Example: &quot;This month, automotive component suppliers got 40% more inquiries, mostly from Pune and Coimbatore.&quot;
                        </p>
                    </div>

                    {/* Image Container - Desktop Only */}
                    <div className="hidden md:flex relative justify-center items-center w-[540px] h-[540px] bg-[#242424]">
                        <div className="relative w-[80%] h-[80%]">
                            <Image
                                src="/images/solution-02.png"
                                alt="Competitor Insights"
                                fill
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                    </div>
                </div>

                {/* Feature Block 03 - Mobile: Image Top, Desktop: Image Left */}
                <div className="flex flex-col md:flex-row items-center p-5 md:p-6 gap-10 md:gap-[60px] w-full bg-[#1A1A1A]">
                    {/* Image Container */}
                    <div className="relative flex justify-center items-center w-full md:w-[540px] h-[312px] md:h-[540px] bg-[#242424]">
                        <div className="relative w-[80%] h-[80%]">
                            <Image
                                src="/images/solution-03.png"
                                alt="Daily Industry Updates"
                                fill
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="flex flex-col justify-center items-start flex-1 gap-10 md:gap-12 py-0 md:py-10 px-0 md:px-10">
                        <div className="flex flex-col items-start gap-8 w-full">
                            <h3 className="text-white text-2xl md:text-4xl leading-[29px] md:leading-[44px]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 500 }}>
                                Daily Industry Updates (That Actually Matter)
                            </h3>
                            <p className="text-white text-xl md:text-2xl leading-6 md:leading-[29px]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}>
                                Every morning, get:
                            </p>
                            <p className="text-white text-lg md:text-xl leading-6" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}>
                                Policy changes that affect your bottom line<br />
                                New export opportunities<br />
                                Raw material price alerts<br />
                                Industry shifts you need to know
                            </p>
                        </div>
                        <p className="text-white text-lg md:text-xl leading-6" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}>
                            No fluff. No generic news. Just the intel that helps you make better decisions.
                        </p>
                    </div>
                </div>

                {/* Feature Block 04 - Mobile: Image Top, Desktop: Text Left */}
                <div className="flex flex-col md:flex-row items-center p-5 md:p-6 gap-10 md:gap-[60px] w-full bg-[#1A1A1A]">
                    {/* Image Container - Mobile First */}
                    <div className="md:hidden relative flex justify-center items-center w-full h-[312px] bg-[#242424]">
                        <div className="relative w-[80%] h-[80%]">
                            <Image
                                src="/images/solution-04.png"
                                alt="Verified Network"
                                fill
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="flex flex-col justify-center items-start flex-1 gap-10 md:gap-12 py-0 md:py-10 px-0 md:px-10">
                        <div className="flex flex-col items-start gap-8 w-full">
                            <h3 className="text-white text-2xl md:text-4xl leading-[29px] md:leading-[44px]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 500 }}>
                                A Network That Actually Works
                            </h3>
                            <p className="text-white text-xl md:text-2xl leading-6 md:leading-[29px]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}>
                                Verified community of:
                            </p>
                            <p className="text-white text-lg md:text-xl leading-6" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}>
                                Manufacturing company owners<br />
                                Production managers<br />
                                Serious buyers and distributors<br />
                                Industry veterans
                            </p>
                        </div>
                        <p className="text-white text-lg md:text-xl leading-6" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}>
                            No spam. No &quot;Good morning&quot; GIFs. Just real business connections.
                        </p>
                    </div>

                    {/* Image Container - Desktop Only */}
                    <div className="hidden md:flex relative justify-center items-center w-[540px] h-[540px] bg-[#242424]">
                        <div className="relative w-[80%] h-[80%]">
                            <Image
                                src="/images/solution-04.png"
                                alt="Verified Network"
                                fill
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
