export default function How() {
    return (
        <div id="how">
            {/* HowItWorks Section */}
            <section
                className="flex flex-col items-center"
                style={{
                    padding: '80px',
                    gap: '48px',
                    width: '1440px',
                    height: '658px',
                    background: '#0F0F0F',
                }}
            >
                <h2
                    className="text-white uppercase"
                    style={{
                        fontFamily: 'var(--font-bebas-neue)',
                        fontWeight: 400,
                        fontSize: '88px',
                        lineHeight: '88%',
                        width: '1280px',
                    }}
                >
                    How this works
                </h2>

                <div
                    className="flex flex-row items-start"
                    style={{
                        gap: '64px',
                        width: '1280px',
                        height: '388px',
                    }}
                >
                    <div
                        className="flex flex-col items-start"
                        style={{
                            padding: '40px',
                            gap: '56px',
                            width: '1280px',
                            height: '388px',
                            background: '#191919',
                        }}
                    >
                        <div
                            className="flex flex-col items-start"
                            style={{
                                gap: '32px',
                                width: '1200px',
                                height: '308px',
                            }}
                        >
                            {/* Step 1 */}
                            <div className="flex flex-row items-end" style={{ gap: '15px', width: '1200px', height: '36px' }}>
                                <div className="flex justify-center items-center bg-white rounded-full" style={{ width: '36px', height: '36px' }}>
                                    <span className="text-[#0F0F0F]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '14.4px' }}>1</span>
                                </div>
                                <p className="text-white" style={{ fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '24px', lineHeight: '29px' }}>
                                    Join – Costs less than a team dinner or a client lunch.
                                </p>
                            </div>

                            {/* Step 2 */}
                            <div className="flex flex-row items-end" style={{ gap: '15px', width: '1200px', height: '36px' }}>
                                <div className="flex justify-center items-center bg-white rounded-full" style={{ width: '36px', height: '36px' }}>
                                    <span className="text-[#0F0F0F]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '14.4px' }}>2</span>
                                </div>
                                <p className="text-white" style={{ fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '24px', lineHeight: '29px' }}>
                                    Get Added – Within 24 hours after verification.
                                </p>
                            </div>

                            {/* Step 3 */}
                            <div className="flex flex-row items-end" style={{ gap: '15px', width: '1200px', height: '36px' }}>
                                <div className="flex justify-center items-center bg-white rounded-full" style={{ width: '36px', height: '36px' }}>
                                    <span className="text-[#0F0F0F]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '14.4px' }}>3</span>
                                </div>
                                <p className="text-white" style={{ fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '24px', lineHeight: '29px' }}>
                                    Leads Start Flowing – First leads arrive within a week.
                                </p>
                            </div>

                            {/* Step 4 */}
                            <div className="flex flex-row items-end" style={{ gap: '15px', width: '1200px', height: '36px' }}>
                                <div className="flex justify-center items-center bg-white rounded-full" style={{ width: '36px', height: '36px' }}>
                                    <span className="text-[#0F0F0F]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '14.4px' }}>4</span>
                                </div>
                                <p className="text-white" style={{ fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '24px', lineHeight: '29px' }}>
                                    Track What&apos;s Hot – Monthly data shows industry trends.
                                </p>
                            </div>

                            {/* Step 5 */}
                            <div className="flex flex-row items-end" style={{ gap: '15px', width: '1200px', height: '36px' }}>
                                <div className="flex justify-center items-center bg-white rounded-full" style={{ width: '36px', height: '36px' }}>
                                    <span className="text-[#0F0F0F]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '14.4px' }}>5</span>
                                </div>
                                <p className="text-white" style={{ fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '24px', lineHeight: '29px' }}>
                                    Grow Smarter – Network, learn, spot opportunities early.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* IsThisForYou Section */}
            <section
                className="flex flex-col items-start"
                style={{
                    padding: '80px',
                    gap: '64px',
                    width: '1440px',
                    height: '758px',
                    background: '#0F0F0F',
                }}
            >
                <h2
                    className="text-white uppercase"
                    style={{
                        fontFamily: 'var(--font-bebas-neue)',
                        fontWeight: 400,
                        fontSize: '88px',
                        lineHeight: '88%',
                        width: '1280px',
                    }}
                >
                    Is This For You?
                </h2>

                <div
                    className="flex flex-row items-start"
                    style={{
                        gap: '64px',
                        width: '1280px',
                        height: '472px',
                    }}
                >
                    {/* Perfect If You - Light Card */}
                    <div
                        className="flex flex-col items-start"
                        style={{
                            padding: '40px',
                            gap: '56px',
                            width: '608px',
                            height: '472px',
                            background: '#F5F5F5',
                        }}
                    >
                        <h3
                            style={{
                                fontFamily: 'var(--font-inter)',
                                fontWeight: 600,
                                fontSize: '40px',
                                lineHeight: '100%',
                                color: '#151515',
                            }}
                        >
                            Perfect If You
                        </h3>

                        <div
                            className="flex flex-col items-start"
                            style={{
                                gap: '32px',
                                width: '528px',
                            }}
                        >
                            {/* Item 1 */}
                            <div className="flex flex-row items-start" style={{ gap: '15px' }}>
                                <div style={{ width: '32px', height: '32px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0F0F0F', borderRadius: '50%' }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 6L9 17L4 12" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, fontSize: '24px', lineHeight: '29px', color: '#0F0F0F' }}>
                                    Manufacture industrial products (machines, components, OEM parts, tools)
                                </p>
                            </div>

                            {/* Item 2 */}
                            <div className="flex flex-row items-start" style={{ gap: '15px' }}>
                                <div style={{ width: '32px', height: '32px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0F0F0F', borderRadius: '50%' }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 6L9 17L4 12" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, fontSize: '24px', lineHeight: '29px', color: '#0F0F0F' }}>
                                    Want leads you can actually call, not just website traffic
                                </p>
                            </div>

                            {/* Item 3 */}
                            <div className="flex flex-row items-center" style={{ gap: '15px' }}>
                                <div style={{ width: '32px', height: '32px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0F0F0F', borderRadius: '50%' }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 6L9 17L4 12" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, fontSize: '24px', lineHeight: '29px', color: '#0F0F0F' }}>
                                    Will follow up and close deals yourself
                                </p>
                            </div>

                            {/* Item 4 */}
                            <div className="flex flex-row items-start" style={{ gap: '15px' }}>
                                <div style={{ width: '32px', height: '32px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0F0F0F', borderRadius: '50%' }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 6L9 17L4 12" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, fontSize: '24px', lineHeight: '29px', color: '#0F0F0F' }}>
                                    Want market insights before everyone else
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Not For You If You - Dark Card */}
                    <div
                        className="flex flex-col items-start"
                        style={{
                            padding: '40px',
                            gap: '56px',
                            width: '608px',
                            height: '472px',
                            background: '#191919',
                        }}
                    >
                        <h3
                            style={{
                                fontFamily: 'var(--font-inter)',
                                fontWeight: 600,
                                fontSize: '40px',
                                lineHeight: '100%',
                                color: '#FFFFFF',
                            }}
                        >
                            Not For You If You
                        </h3>

                        <div
                            className="flex flex-col items-start"
                            style={{
                                gap: '32px',
                                width: '528px',
                            }}
                        >
                            {/* Item 1 */}
                            <div className="flex flex-row items-start" style={{ gap: '15px' }}>
                                <div style={{ width: '32px', height: '32px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FFFFFF', borderRadius: '50%' }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotate(45deg)' }}>
                                        <path d="M12 5V19M5 12H19" stroke="#0F0F0F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, fontSize: '24px', lineHeight: '29px', color: '#FFFFFF' }}>
                                    Expect automated sales while you sleep
                                </p>
                            </div>

                            {/* Item 2 */}
                            <div className="flex flex-row items-center" style={{ gap: '15px' }}>
                                <div style={{ width: '32px', height: '32px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FFFFFF', borderRadius: '50%' }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotate(45deg)' }}>
                                        <path d="M12 5V19M5 12H19" stroke="#0F0F0F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, fontSize: '24px', lineHeight: '29px', color: '#FFFFFF' }}>
                                    Won&apos;t talk to buyers because you&apos;re &quot;too busy&quot;
                                </p>
                            </div>

                            {/* Item 3 */}
                            <div className="flex flex-row items-start" style={{ gap: '15px' }}>
                                <div style={{ width: '32px', height: '32px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FFFFFF', borderRadius: '50%' }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotate(45deg)' }}>
                                        <path d="M12 5V19M5 12H19" stroke="#0F0F0F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, fontSize: '24px', lineHeight: '29px', color: '#FFFFFF' }}>
                                    Think our subscription is &quot;too expensive&quot; for 20 qualified leads
                                </p>
                            </div>

                            {/* Item 4 */}
                            <div className="flex flex-row items-center" style={{ gap: '15px' }}>
                                <div style={{ width: '32px', height: '32px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FFFFFF', borderRadius: '50%' }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotate(45deg)' }}>
                                        <path d="M12 5V19M5 12H19" stroke="#0F0F0F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, fontSize: '24px', lineHeight: '29px', color: '#FFFFFF' }}>
                                    Plan to spam the group (we&apos;ll kick you out)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* WhyBigVision Section */}
            <section
                className="flex flex-col items-start"
                style={{
                    padding: '80px',
                    gap: '64px',
                    width: '1440px',
                    height: '692px',
                    background: '#0F0F0F',
                }}
            >
                <div
                    className="flex flex-col items-start"
                    style={{
                        gap: '28px',
                        width: '1141px',
                    }}
                >
                    <h2
                        className="text-white uppercase text-center"
                        style={{
                            fontFamily: 'var(--font-bebas-neue)',
                            fontWeight: 400,
                            fontSize: '88px',
                            lineHeight: '88%',
                            width: '1141px',
                        }}
                    >
                        Plus: Early Access to Something Bigger
                    </h2>
                    <p
                        className="text-white"
                        style={{
                            fontFamily: 'var(--font-inter)',
                            fontWeight: 400,
                            fontSize: '28px',
                            lineHeight: '34px',
                            width: '674px',
                        }}
                    >
                        WhatsApp community members get first access to our upcoming platform where you can:
                    </p>
                </div>

                <div
                    className="flex flex-row items-start"
                    style={{
                        gap: '64px',
                        width: '1280px',
                        height: '240px',
                    }}
                >
                    <div
                        className="flex flex-col items-start"
                        style={{
                            padding: '40px',
                            gap: '56px',
                            width: '1280px',
                            height: '240px',
                            background: '#191919',
                        }}
                    >
                        <div
                            className="flex flex-col items-start"
                            style={{
                                gap: '32px',
                                width: '1200px',
                            }}
                        >
                            {/* Benefit 1 */}
                            <div className="flex flex-row items-center" style={{ gap: '15px' }}>
                                <div style={{ width: '32px', height: '32px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FFFFFF', borderRadius: '50%' }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 6L9 17L4 12" stroke="#0F0F0F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, fontSize: '24px', lineHeight: '29px', color: '#FFFFFF' }}>
                                    List and sell products to thousands of verified buyers
                                </p>
                            </div>

                            {/* Benefit 2 */}
                            <div className="flex flex-row items-center" style={{ gap: '15px' }}>
                                <div style={{ width: '32px', height: '32px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FFFFFF', borderRadius: '50%' }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 6L9 17L4 12" stroke="#0F0F0F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, fontSize: '24px', lineHeight: '29px', color: '#FFFFFF' }}>
                                    See live demand dashboards for your category
                                </p>
                            </div>

                            {/* Benefit 3 */}
                            <div className="flex flex-row items-center" style={{ gap: '15px' }}>
                                <div style={{ width: '32px', height: '32px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FFFFFF', borderRadius: '50%' }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 6L9 17L4 12" stroke="#0F0F0F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, fontSize: '24px', lineHeight: '29px', color: '#FFFFFF' }}>
                                    Connect with suppliers and partners at scale
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <p
                    className="text-white"
                    style={{
                        fontFamily: 'var(--font-inter)',
                        fontWeight: 400,
                        fontSize: '28px',
                        lineHeight: '34px',
                        width: '924px',
                    }}
                >
                    You&apos;re not just joining a group. You&apos;re getting ground-floor access.
                </p>
            </section>
        </div>
    );
}
