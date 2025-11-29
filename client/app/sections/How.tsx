'use client';

export default function How() {
    return (
        <div id="how">
            {/* HowItWorks Section */}
            <section className="w-full flex flex-col items-center p-5 md:p-20 gap-12 md:gap-12 max-w-[400px] md:max-w-[1440px] mx-auto bg-[#0F0F0F]">
                <h2 className="text-white uppercase w-full text-[52px] md:text-[88px] leading-[88%]" style={{ fontFamily: 'var(--font-bebas-neue)', fontWeight: 400 }}>
                    How this works
                </h2>

                <div className="flex flex-col items-start p-5 md:p-10 gap-8 md:gap-14 w-full bg-[#191919]">
                    <div className="flex flex-col items-start gap-6 md:gap-8 w-full">
                        {/* Step 1 */}
                        <div className="flex flex-row items-start gap-[15px] w-full">
                            <div className="flex justify-center items-center bg-white rounded-full flex-shrink-0" style={{ width: '36px', height: '36px' }}>
                                <span className="text-[#0F0F0F]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '14.4px' }}>1</span>
                            </div>
                            <p className="text-white text-lg md:text-2xl leading-[22px] md:leading-[29px]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 600 }}>
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
            <section className="w-full flex flex-col items-start p-5 md:p-20 gap-16 md:gap-16 max-w-[400px] md:max-w-[1440px] mx-auto bg-[#0F0F0F]">
                <h2 className="text-white uppercase w-full text-[52px] md:text-[88px] leading-[88%]" style={{ fontFamily: 'var(--font-bebas-neue)', fontWeight: 400 }}>
                    Is This For You?
                </h2>

                <div className="flex flex-col md:flex-row items-start gap-10 md:gap-16 w-full">
                    {/* Perfect If You - Light Card */}
                    <div className="flex flex-col items-start p-5 md:p-10 gap-10 md:gap-14 w-full md:w-1/2 bg-[#F5F5F5]">
                        <h3 className="text-2xl md:text-[40px] leading-[100%]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 600, color: '#151515' }}>
                            Perfect If You
                        </h3>

                        <div className="flex flex-col items-start gap-6 md:gap-8 w-full">
                            {/* Item 1 */}
                            <div className="flex flex-row items-start gap-[15px]">
                                <div style={{ width: '32px', height: '32px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0F0F0F', borderRadius: '50%' }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 6L9 17L4 12" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <p className="text-lg md:text-2xl leading-[22px] md:leading-[29px]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, color: '#0F0F0F' }}>
                                    Manufacture industrial products (machines, components, OEM parts, tools)
                                </p>
                            </div>

                            {/* Item 2 */}
                            <div className="flex flex-row items-start gap-[15px]">
                                <div style={{ width: '32px', height: '32px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0F0F0F', borderRadius: '50%' }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 6L9 17L4 12" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
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
                    <div className="flex flex-col items-start p-5 md:p-10 gap-10 md:gap-14 w-full md:w-1/2 bg-[#191919]">
                        <h3 className="text-2xl md:text-[40px] leading-[100%]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 600, color: '#FFFFFF' }}>
                            Not For You If You
                        </h3>

                        <div className="flex flex-col items-start gap-6 md:gap-8 w-full">
                            {/* Item 1 */}
                            <div className="flex flex-row items-start gap-[15px]">
                                <div style={{ width: '32px', height: '32px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FFFFFF', borderRadius: '50%' }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 6L6 18M6 6L18 18" stroke="#0F0F0F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <p className="text-lg md:text-2xl leading-[22px] md:leading-[29px]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, color: '#FFFFFF' }}>
                                    Expect automated sales while you sleep
                                </p>
                            </div>

                            {/* Item 2 */}
                            <div className="flex flex-row items-start gap-[15px]">
                                <div style={{ width: '32px', height: '32px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FFFFFF', borderRadius: '50%' }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 6L6 18M6 6L18 18" stroke="#0F0F0F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <p className="text-lg md:text-2xl leading-[22px] md:leading-[29px]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, color: '#FFFFFF' }}>
                                    Won&apos;t talk to buyers because you&apos;re &quot;too busy&quot;
                                </p>
                            </div>

                            {/* Item 3 */}
                            <div className="flex flex-row items-start gap-[15px]">
                                <div style={{ width: '32px', height: '32px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FFFFFF', borderRadius: '50%' }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 6L6 18M6 6L18 18" stroke="#0F0F0F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <p className="text-lg md:text-2xl leading-[22px] md:leading-[29px]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, color: '#FFFFFF' }}>
                                    Think our subscription is &quot;too expensive&quot; for 20 qualified leads
                                </p>
                            </div>

                            {/* Item 4 */}
                            <div className="flex flex-row items-start gap-[15px]">
                                <div style={{ width: '32px', height: '32px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FFFFFF', borderRadius: '50%' }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 6L6 18M6 6L18 18" stroke="#0F0F0F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
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
            <section className="w-full flex flex-col items-start p-5 md:p-20 gap-10 md:gap-16 max-w-[400px] md:max-w-[1440px] mx-auto bg-[#0F0F0F]">
                <div className="flex flex-col items-start gap-7 md:gap-7 w-full">
                    <h2 className="text-white uppercase w-full text-[52px] md:text-[88px] leading-[88%]" style={{ fontFamily: 'var(--font-bebas-neue)', fontWeight: 400 }}>
                        Plus: Early Access to Something Bigger
                    </h2>
                    <p className="text-white text-xl md:text-[28px] leading-6 md:leading-[34px] w-full" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}>
                        WhatsApp community members get first access to our upcoming platform where you can:
                    </p>
                </div>

                <div className="flex flex-col items-start p-5 md:p-10 gap-8 md:gap-14 w-full bg-[#191919]">
                    <div className="flex flex-col items-start gap-6 md:gap-8 w-full">
                        {/* Benefit 1 */}
                        <div className="flex flex-row items-start gap-[15px]">
                            <div style={{ width: '32px', height: '32px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FFFFFF', borderRadius: '50%' }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 6L9 17L4 12" stroke="#0F0F0F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <p className="text-white text-lg md:text-2xl leading-[22px] md:leading-[29px]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}>
                                List and sell products to thousands of verified buyers
                            </p>
                        </div>

                        {/* Benefit 2 */}
                        <div className="flex flex-row items-start gap-[15px]">
                            <div style={{ width: '32px', height: '32px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FFFFFF', borderRadius: '50%' }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 6L9 17L4 12" stroke="#0F0F0F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <p className="text-white text-lg md:text-2xl leading-[22px] md:leading-[29px]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}>
                                See live demand dashboards for your category
                            </p>
                        </div>

                        {/* Benefit 3 */}
                        <div className="flex flex-row items-start gap-[15px]">
                            <div style={{ width: '32px', height: '32px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FFFFFF', borderRadius: '50%' }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 6L9 17L4 12" stroke="#0F0F0F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <p className="text-white text-lg md:text-2xl leading-[22px] md:leading-[29px]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}>
                                Connect with suppliers and partners at scale
                            </p>
                        </div>
                    </div>
                </div>

                <p className="text-white text-xl md:text-[28px] leading-6 md:leading-[34px] w-full" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}>
                    You&apos;re not just joining a group. You&apos;re getting ground-floor access.
                </p>
            </section>
        </div>
    );
}
