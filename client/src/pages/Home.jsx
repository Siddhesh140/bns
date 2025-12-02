import { useState } from 'react';
import { Navbar, Footer } from '../components/layout';
import { Button, ProblemCard, SolutionCard, CheckIcon, CrossIcon, CheckCircleIcon, QuestionIcon, PlusIcon } from '../components/ui';

export default function Home() {
    // State for FAQ accordion
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "What kind of leads will I get?",
            answer: "Real buyers, distributors, OEM partners, project inquiries—filtered for quality."
        },
        {
            question: "Will I compete with other members?",
            answer: "We limit membership to avoid overcrowding in specific categories, ensuring you get a fair share of relevant leads."
        },
        {
            question: "Can you guarantee sales?",
            answer: "We guarantee qualified leads that match your profile. Closing the deal is up to your sales team, but we provide the opportunities."
        },
        {
            question: "What if I don't like it?",
            answer: "You can cancel your subscription at any time. There are no long-term contracts or lock-in periods."
        },
        {
            question: "What if someone spams?",
            answer: "We have a zero-tolerance policy for spam. Any member found spamming the group will be removed immediately to maintain quality."
        }
    ];

    return (
        <main className="min-h-screen bg-dark flex flex-col gap-0">
            {/* ========== HERO SECTION ========== */}
            <section id="hero" className="relative w-full h-[600px] md:h-[800px] overflow-hidden flex items-center justify-center">
                {/* Navbar */}
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
                            fontSize: '4rem',
                            lineHeight: '84%',
                            fontWeight: 400,
                        }}
                    >
                        <style>{`
                            @media (min-width: 768px) {
                                h1 {
                                    font-size: 8.5rem !important;
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
                            fontSize: '1rem',
                            lineHeight: '1.1875rem',
                            fontWeight: 400,
                        }}
                    >
                        <style>{`
                            @media (min-width: 768px) {
                                p {
                                    font-size: 1.5rem !important;
                                    line-height: 1.8125rem !important;
                                }
                            }
                        `}</style>
                        Join India&apos;s first WhatsApp community built exclusively for manufacturers who are tired of cold calls that go nowhere.
                    </p>
                </div>
            </section>

            {/* ========== WHAT SECTION ========== */}
            <div id="what">
                {/* Features Section */}
                <section className="w-full flex flex-col md:flex-row md:justify-between md:items-center px-5 py-10 md:px-20 md:py-20 gap-5 md:gap-5 max-w-[400px] md:max-w-[1440px] mx-auto min-h-[962px] md:min-h-[720px]">
                    {/* Mobile: Image First, Desktop: Content First */}
                    <div className="md:hidden relative w-full max-w-[360px] h-[300px] border border-white/20">
                        <img
                            src="/images/features-image.jpg"
                            alt="Manufacturing professional"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col items-start gap-[30px] w-full max-w-[360px] md:max-w-[687px]">
                        {/* Description */}
                        <p className="text-white w-full text-base md:text-2xl leading-[1.1875rem] md:leading-[1.8125rem]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}>
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
                                <span className="text-white text-base md:text-2xl leading-[1.1875rem] md:leading-[1.8125rem] flex-1" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}>
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
                        <Button
                            variant="primary"
                            className="px-7 py-4 h-11"
                        >
                            Join Now
                        </Button>
                    </div>

                    {/* Desktop: Image on Right */}
                    <div className="hidden md:block relative w-full max-w-[522px] h-[560px] border border-white/20">
                        <img
                            src="/images/features-image.jpg"
                            alt="Manufacturing professional"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
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
                                <ProblemCard
                                    image="/images/problem-04.jpg"
                                    title="Exhibitions?"
                                    description="₹2 lakhs spent. 500 handshakes. 3 serious buyers. Maybe."
                                />
                                <ProblemCard
                                    image="/images/problem-01.jpg"
                                    title="Your website?"
                                    description='Last inquiry: 6 weeks ago. Subject: "Can you make plastic toys?" (You manufacture industrial pumps.)'
                                />
                                <ProblemCard
                                    image="/images/problem-03.jpg"
                                    title="Cold calling?"
                                    description="100 calls. 80 don't answer. 15 ghost you. 5 waste your time."
                                />
                                <ProblemCard
                                    image="/images/problem-02.jpg"
                                    title="Online leads?"
                                    description='Half spam. Half "students doing project work."'
                                    className="[&_img]:object-right"
                                />
                            </div>

                            {/* Desktop: Row 1 with 2 cards side by side */}
                            <div className="hidden md:flex flex-row items-center gap-7 w-full">
                                <ProblemCard
                                    image="/images/problem-04.jpg"
                                    title="Exhibitions?"
                                    description="₹2 lakhs spent. 500 handshakes. 3 serious buyers. Maybe."
                                    className="flex-1"
                                />
                                <ProblemCard
                                    image="/images/problem-01.jpg"
                                    title="Your website?"
                                    description='Last inquiry: 6 weeks ago. Subject: "Can you make plastic toys?" (You manufacture industrial pumps.)'
                                    className="flex-1"
                                />
                            </div>

                            {/* Desktop: Row 2 with 2 cards side by side */}
                            <div className="hidden md:flex flex-row items-center gap-7 w-full">
                                <ProblemCard
                                    image="/images/problem-03.jpg"
                                    title="Cold calling?"
                                    description="100 calls. 80 don't answer. 15 ghost you. 5 waste your time."
                                    className="flex-1"
                                />
                                <ProblemCard
                                    image="/images/problem-02.jpg"
                                    title="Online leads?"
                                    description='Half spam. Half "students doing project work."'
                                    className="flex-1 [&_img]:object-right"
                                />
                            </div>
                        </div>

                        {/* Closing Text */}
                        <div className="flex flex-col items-start gap-10 w-full">
                            <p className="text-white text-xl md:text-2xl leading-6 md:leading-[1.8125rem] w-full" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}>
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

                    {/* Feature Block 01 - Image Left */}
                    <SolutionCard
                        image="/images/solution-01.png"
                        title="20 Qualified Leads Every Month - Guaranteed"
                        subtitle="Real decision-makers who need what you make:"
                        content={
                            <>
                                • Buyers actively searching for suppliers<br />
                                • Companies seeking OEM partners<br />
                                • Distributors scouting products<br />
                                • Projects with actual budgets
                            </>
                        }
                        footer="Convert just ONE lead, you've made all of your money back which you invested. Everything after? Pure profit."
                        imagePosition="left"
                    />

                    {/* Feature Block 02 - Image Right */}
                    <SolutionCard
                        image="/images/solution-02.png"
                        title="Know What Your Competitors Are Doing"
                        subtitle="We track performance across manufacturing categories:"
                        content={
                            <>
                                • Which products are getting bombarded with inquiries<br />
                                • Which regions are buying like crazy<br />
                                • What's trending up vs. dying down<br />
                                • Where demand is exploding
                            </>
                        }
                        footer='Example: "This month, automotive component suppliers got 40% more inquiries, mostly from Pune and Coimbatore."'
                        imagePosition="right"
                    />

                    {/* Feature Block 03 - Image Left */}
                    <SolutionCard
                        image="/images/solution-03.png"
                        title="Daily Industry Updates (That Actually Matter)"
                        subtitle="Every morning, get:"
                        content={
                            <>
                                • Policy changes that affect your bottom line<br />
                                • New export opportunities<br />
                                • Raw material price alerts<br />
                                • Industry shifts you need to know
                            </>
                        }
                        footer="No fluff. No generic news. Just the intel that helps you make better decisions."
                        imagePosition="left"
                    />

                    {/* Feature Block 04 - Image Right */}
                    <SolutionCard
                        image="/images/solution-04.png"
                        title="A Network That Actually Works"
                        subtitle="Verified community of:"
                        content={
                            <>
                                • Manufacturing company owners<br />
                                • Production managers<br />
                                • Serious buyers and distributors<br />
                                • Industry veterans
                            </>
                        }
                        footer='No spam. No "Good morning" GIFs. Just real business connections.'
                        imagePosition="right"
                    />
                </section>
            </div>

            {/* ========== HOW SECTION ========== */}
            <div id="how">
                {/* HowItWorks Section */}
                <section className="w-full flex flex-col items-center p-5 md:p-20 gap-12 md:gap-12 max-w-[400px] md:max-w-[1440px] mx-auto bg-dark">
                    <h2 className="text-white uppercase w-full text-[52px] md:text-[88px] leading-[88%]" style={{ fontFamily: 'var(--font-bebas-neue)', fontWeight: 400 }}>
                        How this works
                    </h2>

                    <div className="flex flex-col items-start p-5 md:p-10 gap-8 md:gap-14 w-full bg-dark-secondary">
                        <div className="flex flex-col items-start gap-6 md:gap-8 w-full">
                            {/* Step 1 */}
                            <div className="flex flex-row items-start gap-[15px] w-full">
                                <div className="flex justify-center items-center bg-white rounded-full flex-shrink-0" style={{ width: '36px', height: '36px' }}>
                                    <span className="text-dark" style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '0.9rem' }}>1</span>
                                </div>
                                <p className="text-white text-lg md:text-2xl leading-[1.375rem] md:leading-[1.8125rem]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 600 }}>
                                    Join – Costs less than a team dinner or a client lunch.
                                </p>
                            </div>

                            {/* Step 2 */}
                            <div className="flex flex-row items-start gap-[15px] w-full">
                                <div className="flex justify-center items-center bg-white rounded-full flex-shrink-0" style={{ width: '36px', height: '36px' }}>
                                    <span className="text-[#0F0F0F]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '14.4px' }}>2</span>
                                </div>
                                <p className="text-white text-lg md:text-2xl leading-[22px] md:leading-[29px]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 600 }}>
                                    Get Added – Within 24 hours after verification.
                                </p>
                            </div>

                            {/* Step 3 */}
                            <div className="flex flex-row items-start gap-[15px] w-full">
                                <div className="flex justify-center items-center bg-white rounded-full flex-shrink-0" style={{ width: '36px', height: '36px' }}>
                                    <span className="text-[#0F0F0F]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '14.4px' }}>3</span>
                                </div>
                                <p className="text-white text-lg md:text-2xl leading-[22px] md:leading-[29px]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 600 }}>
                                    Leads Start Flowing – First leads arrive within a week.
                                </p>
                            </div>

                            {/* Step 4 */}
                            <div className="flex flex-row items-start gap-[15px] w-full">
                                <div className="flex justify-center items-center bg-white rounded-full flex-shrink-0" style={{ width: '36px', height: '36px' }}>
                                    <span className="text-[#0F0F0F]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '14.4px' }}>4</span>
                                </div>
                                <p className="text-white text-lg md:text-2xl leading-[22px] md:leading-[29px]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 600 }}>
                                    Track What&apos;s Hot – Monthly data shows industry trends.
                                </p>
                            </div>

                            {/* Step 5 */}
                            <div className="flex flex-row items-start gap-[15px] w-full">
                                <div className="flex justify-center items-center bg-white rounded-full flex-shrink-0" style={{ width: '36px', height: '36px' }}>
                                    <span className="text-[#0F0F0F]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '14.4px' }}>5</span>
                                </div>
                                <p className="text-white text-lg md:text-2xl leading-[22px] md:leading-[29px]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 600 }}>
                                    Grow Smarter – Network, learn, spot opportunities early.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* IsThisForYou Section */}
                <section className="w-full flex flex-col items-start p-5 md:p-20 gap-16 md:gap-16 max-w-[400px] md:max-w-[1440px] mx-auto bg-dark">
                    <h2 className="text-white uppercase w-full text-[52px] md:text-[88px] leading-[88%]" style={{ fontFamily: 'var(--font-bebas-neue)', fontWeight: 400 }}>
                        Is This For You?
                    </h2>

                    <div className="flex flex-col md:flex-row items-stretch gap-10 md:gap-16 w-full">
                        {/* Perfect If You - Light Card */}
                        <div className="flex flex-col items-start p-5 md:p-10 gap-10 md:gap-14 w-full md:w-1/2 bg-[#F5F5F5]">
                            <h3 className="text-2xl md:text-[40px] leading-[100%]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 600, color: '#151515' }}>
                                Perfect If You
                            </h3>

                            <div className="flex flex-col items-start gap-6 md:gap-8 w-full">
                                {/* Item 1 */}
                                <div className="flex flex-row items-start gap-[15px]">
                                    <div className="w-8 h-8 flex items-center justify-center bg-dark rounded-full flex-shrink-0">
                                        <CheckIcon size={20} color="white" />
                                    </div>
                                    <p className="text-lg md:text-2xl leading-[1.375rem] md:leading-[1.8125rem]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, color: '#0F0F0F' }}>
                                        Manufacture industrial products (machines, components, OEM parts, tools)
                                    </p>
                                </div>

                                {/* Item 2 */}
                                <div className="flex flex-row items-start gap-[15px]">
                                    <div className="w-8 h-8 flex items-center justify-center bg-dark rounded-full flex-shrink-0">
                                        <CheckIcon size={20} color="white" />
                                    </div>
                                    <p className="text-lg md:text-2xl leading-[22px] md:leading-[29px]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, color: '#0F0F0F' }}>
                                        Want leads you can actually call, not just website traffic
                                    </p>
                                </div>

                                {/* Item 3 */}
                                <div className="flex flex-row items-start gap-[15px]">
                                    <div style={{ width: '32px', height: '32px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0F0F0F', borderRadius: '50%' }}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20 6L9 17L4 12" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <p className="text-lg md:text-2xl leading-[22px] md:leading-[29px]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, color: '#0F0F0F' }}>
                                        Will follow up and close deals yourself
                                    </p>
                                </div>

                                {/* Item 4 */}
                                <div className="flex flex-row items-start gap-[15px]">
                                    <div style={{ width: '32px', height: '32px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0F0F0F', borderRadius: '50%' }}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20 6L9 17L4 12" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <p className="text-lg md:text-2xl leading-[22px] md:leading-[29px]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, color: '#0F0F0F' }}>
                                        Want market insights before everyone else
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Not For You If You - Dark Card */}
                        <div className="flex flex-col items-start p-5 md:p-10 gap-10 md:gap-14 w-full md:w-1/2 bg-dark-secondary">
                            <h3 className="text-2xl md:text-[40px] leading-[100%]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 600, color: '#FFFFFF' }}>
                                Not For You If You
                            </h3>

                            <div className="flex flex-col items-start gap-6 md:gap-8 w-full">
                                {/* Item 1 */}
                                <div className="flex flex-row items-start gap-[15px]">
                                    <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full flex-shrink-0">
                                        <CrossIcon size={20} color="#0F0F0F" />
                                    </div>
                                    <p className="text-lg md:text-2xl leading-[1.375rem] md:leading-[1.8125rem]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, color: '#FFFFFF' }}>
                                        Expect automated sales while you sleep
                                    </p>
                                </div>

                                {/* Item 2 */}
                                <div className="flex flex-row items-start gap-[15px]">
                                    <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full flex-shrink-0">
                                        <CrossIcon size={20} color="#0F0F0F" />
                                    </div>
                                    <p className="text-lg md:text-2xl leading-[22px] md:leading-[29px]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, color: '#FFFFFF' }}>
                                        Won&apos;t talk to buyers because you&apos;re &quot;too busy&quot;
                                    </p>
                                </div>

                                {/* Item 3 */}
                                <div className="flex flex-row items-start gap-[15px]">
                                    <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full flex-shrink-0">
                                        <CrossIcon size={20} color="#0F0F0F" />
                                    </div>
                                    <p className="text-lg md:text-2xl leading-[22px] md:leading-[29px]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, color: '#FFFFFF' }}>
                                        Think our subscription is &quot;too expensive&quot; for 20 qualified leads
                                    </p>
                                </div>

                                {/* Item 4 */}
                                <div className="flex flex-row items-start gap-[15px]">
                                    <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full flex-shrink-0">
                                        <CrossIcon size={20} color="#0F0F0F" />
                                    </div>
                                    <p className="text-lg md:text-2xl leading-[22px] md:leading-[29px]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, color: '#FFFFFF' }}>
                                        Plan to spam the group (we&apos;ll kick you out)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* WhyBigVision Section */}
                <section className="w-full flex flex-col items-start p-5 md:p-20 gap-10 md:gap-16 max-w-[400px] md:max-w-[1440px] mx-auto bg-dark">
                    <div className="flex flex-col items-start gap-7 md:gap-7 w-full">
                        <h2 className="text-white uppercase w-full text-[52px] md:text-[88px] leading-[88%]" style={{ fontFamily: 'var(--font-bebas-neue)', fontWeight: 400 }}>
                            Plus: Early Access to Something Bigger
                        </h2>
                        <p className="text-white text-xl md:text-[1.75rem] leading-6 md:leading-[2.125rem] w-full" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}>
                            WhatsApp community members get first access to our upcoming platform where you can:
                        </p>
                    </div>

                    <div className="flex flex-col items-start p-5 md:p-10 gap-8 md:gap-14 w-full bg-dark-secondary">
                        <div className="flex flex-col items-start gap-6 md:gap-8 w-full">
                            {/* Benefit 1 */}
                            <div className="flex flex-row items-start gap-[15px]">
                                <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full flex-shrink-0">
                                    <CheckIcon size={20} color="#0F0F0F" />
                                </div>
                                <p className="text-white text-lg md:text-2xl leading-[1.375rem] md:leading-[1.8125rem]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}>
                                    List and sell products to thousands of verified buyers
                                </p>
                            </div>

                            {/* Benefit 2 */}
                            <div className="flex flex-row items-start gap-[15px]">
                                <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full flex-shrink-0">
                                    <CheckIcon size={20} color="#0F0F0F" />
                                </div>
                                <p className="text-white text-lg md:text-2xl leading-[22px] md:leading-[29px]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}>
                                    See live demand dashboards for your category
                                </p>
                            </div>

                            {/* Benefit 3 */}
                            <div className="flex flex-row items-start gap-[15px]">
                                <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full flex-shrink-0">
                                    <CheckIcon size={20} color="#0F0F0F" />
                                </div>
                                <p className="text-white text-lg md:text-2xl leading-[22px] md:leading-[29px]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}>
                                    Connect with suppliers and partners at scale
                                </p>
                            </div>
                        </div>
                    </div>

                    <p className="text-white text-xl md:text-[1.75rem] leading-6 md:leading-[2.125rem] w-full" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}>
                        You&apos;re not just joining a group. You&apos;re getting ground-floor access.
                    </p>
                </section>
            </div>

            {/* ========== WHO SECTION ========== */}
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
                        <p className="text-white text-lg md:text-2xl leading-[1.375rem] md:leading-[1.8125rem] w-full md:w-[402px]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}>
                            No annual lock-in. No contracts. Stay as long as it&apos;s valuable.
                        </p>

                        {/* Join Button */}
                        <Button variant="primary" className="px-7 md:px-7 py-4 md:py-4 text-sm md:text-base">
                            Join Now
                        </Button>
                    </div>

                    {/* Benefits List - With dark background box */}
                    <div className="flex flex-col items-start p-5 md:p-10 gap-4 md:gap-4 w-full md:w-auto bg-dark-secondary">
                        {/* Item 1 */}
                        <div className="flex flex-row items-start gap-[15px]">
                            <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full flex-shrink-0">
                                <CheckCircleIcon size={20} color="#0F0F0F" />
                            </div>
                            <p className="text-white text-lg md:text-2xl leading-[1.375rem] md:leading-[1.8125rem]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}>
                                20 qualified leads monthly
                            </p>
                        </div>

                        {/* Item 2 */}
                        <div className="flex flex-row items-start gap-[15px]">
                            <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full flex-shrink-0"><CheckCircleIcon size={20} color="#0F0F0F" /></div>
                            <p className="text-white text-lg md:text-2xl leading-[22px] md:leading-[29px]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}>
                                Manufacturing-only WhatsApp group
                            </p>
                        </div>

                        {/* Item 3 */}
                        <div className="flex flex-row items-start gap-[15px]">
                            <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full flex-shrink-0"><CheckCircleIcon size={20} color="#0F0F0F" /></div>
                            <p className="text-white text-lg md:text-2xl leading-[22px] md:leading-[29px]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}>
                                Competitor & market data
                            </p>
                        </div>

                        {/* Item 4 */}
                        <div className="flex flex-row items-start gap-[15px]">
                            <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full flex-shrink-0"><CheckCircleIcon size={20} color="#0F0F0F" /></div>
                            <p className="text-white text-lg md:text-2xl leading-[22px] md:leading-[29px]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}>
                                Daily opportunity alerts
                            </p>
                        </div>

                        {/* Item 5 */}
                        <div className="flex flex-row items-start gap-[15px]">
                            <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full flex-shrink-0"><CheckCircleIcon size={20} color="#0F0F0F" /></div>
                            <p className="text-white text-lg md:text-2xl leading-[22px] md:leading-[29px]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}>
                                Webinars for your team
                            </p>
                        </div>

                        {/* Item 6 */}
                        <div className="flex flex-row items-start gap-[15px]">
                            <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full flex-shrink-0"><CheckCircleIcon size={20} color="#0F0F0F" /></div>
                            <p className="text-white text-lg md:text-2xl leading-[22px] md:leading-[29px]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}>
                                Priority platform access
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Still Thinking Section */}
            <section className="w-full flex flex-col items-start p-5 md:p-20 gap-16 md:gap-16 max-w-[400px] md:max-w-[1440px] mx-auto bg-dark">
                <div className="flex flex-col md:flex-row justify-between items-start gap-7 md:gap-7 w-full">
                    {/* Left Content */}
                    <div className="flex flex-col items-start gap-7 md:gap-7 w-full md:w-auto">
                        <h2 className="text-white uppercase w-full text-[52px] md:text-[88px] leading-[88%]" style={{ fontFamily: 'var(--font-bebas-neue)', fontWeight: 400 }}>
                            Still thinking?
                        </h2>
                        <p className="text-white text-xl md:text-[1.75rem] leading-6 md:leading-[2.125rem] w-full" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}>
                            Book a 10-Minute Call
                        </p>
                    </div>

                    {/* Right Content - Button */}
                    <Button variant="primary" className="px-7 py-4 w-full md:w-auto text-sm md:text-base">
                        Book Now
                    </Button>
                </div>
            </section>

            {/* ========== WHY SECTION (FAQ) ========== */}
            <section id="why"
                className="w-full flex flex-col items-start p-5 md:p-20 gap-16 md:gap-16 max-w-[400px] md:max-w-[1440px] mx-auto bg-dark"
            >
                <div className="flex flex-col items-start gap-7 md:gap-7 w-full">
                    <h2
                        className="text-white uppercase text-left w-full text-[52px] md:text-[88px] leading-[88%]"
                        style={{
                            fontFamily: 'var(--font-bebas-neue)',
                            fontWeight: 400,
                        }}
                    >
                        Quick Questions
                    </h2>
                </div>

                <div className="flex flex-col items-start gap-6 md:gap-6 w-full">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-start w-full bg-dark-secondary transition-all duration-300 p-5 md:p-9 gap-7 md:gap-7"
                            style={{
                                boxShadow: openIndex === index ? '0 0 30px rgba(255, 255, 255, 0.15)' : 'none',
                                border: openIndex === index ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid transparent',
                            }}
                        >
                            <div
                                className="flex flex-row justify-between items-center w-full cursor-pointer"
                                onClick={() => handleToggle(index)}
                                style={{ gap: '20px' }}
                            >
                                <div className="flex flex-row items-center" style={{ gap: '12px' }}>
                                    {/* Question Mark Icon */}
                                    <div style={{ width: '32px', height: '32px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <QuestionIcon size={24} color="white" />
                                    </div>
                                    <h3 className="text-xl md:text-[1.75rem] leading-6 md:leading-[2.125rem]"
                                        style={{
                                            fontFamily: 'var(--font-inter)',
                                            fontWeight: 500,
                                            color: openIndex === index ? '#FFFFFF' : '#C3C3C3',
                                            transition: 'color 0.3s ease',
                                        }}
                                    >
                                        {faq.question}
                                    </h3>
                                </div>

                                {/* Plus/Close Icon */}
                                <div
                                    style={{
                                        width: '32px',
                                        height: '32px',
                                        flexShrink: 0,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)',
                                        transition: 'transform 0.3s ease'
                                    }}
                                >
                                    <PlusIcon size={32} color="black" bgColor="white" />
                                </div>
                            </div>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}`}
                                style={{ width: '100%' }}
                            >
                                <div className="flex flex-row items-start pl-0 md:pl-11">
                                    <p className="text-lg md:text-2xl leading-[1.375rem] md:leading-[1.8125rem]"
                                        style={{
                                            fontFamily: 'var(--font-inter)',
                                            fontWeight: 400,
                                            color: '#C3C3C3',
                                        }}
                                    >
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ========== FOOTER ========== */}
            <Footer />
        </main>
    );
}
