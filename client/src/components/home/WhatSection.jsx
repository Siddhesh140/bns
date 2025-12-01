import Button from '../ui/Button';
import { ProblemCard, SolutionCard } from '../ui/Cards';
import { scrollToSection } from '../../utils/scroll';

export default function What() {
    return (
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

                                image="/images/problem-01.jpg"
                                title="Exhibitions?"
                                description="₹2 lakhs spent. 500 handshakes. 3 serious buyers. Maybe."
                            />
                            <ProblemCard

                                image="/images/problem-04.jpg"
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

                                image="/images/problem-01.jpg"
                                title="Exhibitions?"
                                description="₹2 lakhs spent. 500 handshakes. 3 serious buyers. Maybe."
                                className="flex-1"
                            />
                            <ProblemCard

                                image="/images/problem-04.jpg"
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
    );
}
