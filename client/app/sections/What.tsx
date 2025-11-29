'use client';

import Image from 'next/image';

export default function What() {
    return (
        <div id="what">
            {/* Features Section */}
            <section
                className="flex flex-row justify-between items-center"
                style={{
                    padding: '80px',
                    width: '1440px',
                    height: '720px',
                    gap: '20px',
                }}
            >
                {/* Left Content */}
                <div
                    className="flex flex-col items-start"
                    style={{
                        gap: '30px',
                        width: '687px',
                        height: '560px',
                    }}
                >
                    {/* Description */}
                    <p
                        className="text-white"
                        style={{
                            fontFamily: 'var(--font-inter)',
                            fontWeight: 400,
                            fontSize: '24px',
                            lineHeight: '29px',
                            width: '687px',
                        }}
                    >
                        India&apos;s first WhatsApp community built exclusively for manufacturers. Get 20 qualified leads delivered monthly—plus live market intel, competitor insights, and daily industry updates.
                    </p>

                    {/* Benefits List */}
                    <div
                        className="flex flex-col items-start"
                        style={{
                            width: '687px',
                            height: '352px',
                        }}
                    >
                        {/* Benefit 1 */}
                        <div
                            className="flex flex-row items-center"
                            style={{
                                padding: '32px 0px',
                                gap: '16px',
                                width: '687px',
                                height: '88px',
                                borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                            }}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
                                <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span
                                className="text-white"
                                style={{
                                    fontFamily: 'var(--font-inter)',
                                    fontWeight: 400,
                                    fontSize: '24px',
                                    lineHeight: '29px',
                                }}
                            >
                                20 qualified leads land in your WhatsApp every month
                            </span>
                        </div>

                        {/* Benefit 2 */}
                        <div
                            className="flex flex-row items-center"
                            style={{
                                padding: '32px 0px',
                                gap: '8px',
                                width: '687px',
                                height: '88px',
                                borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                            }}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
                                <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span
                                className="text-white"
                                style={{
                                    fontFamily: 'var(--font-inter)',
                                    fontWeight: 400,
                                    fontSize: '24px',
                                    lineHeight: '29px',
                                }}
                            >
                                See what your competitors are doing (legally, of course)
                            </span>
                        </div>

                        {/* Benefit 3 */}
                        <div
                            className="flex flex-row items-center"
                            style={{
                                padding: '32px 0px',
                                gap: '8px',
                                width: '687px',
                                height: '88px',
                                borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                            }}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
                                <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span
                                className="text-white"
                                style={{
                                    fontFamily: 'var(--font-inter)',
                                    fontWeight: 400,
                                    fontSize: '24px',
                                    lineHeight: '29px',
                                }}
                            >
                                Know which products are hot before your rivals do
                            </span>
                        </div>

                        {/* Benefit 4 */}
                        <div
                            className="flex flex-row items-center"
                            style={{
                                padding: '32px 0px',
                                gap: '8px',
                                width: '687px',
                                height: '88px',
                                borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                            }}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
                                <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span
                                className="text-white"
                                style={{
                                    fontFamily: 'var(--font-inter)',
                                    fontWeight: 400,
                                    fontSize: '24px',
                                    lineHeight: '29px',
                                }}
                            >
                                Daily news that matters—no fluff, just fact
                            </span>
                        </div>
                    </div>

                    {/* Join Now Button */}
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

                {/* Right Image */}
                <div
                    className="relative"
                    style={{
                        width: '522px',
                        height: '560px',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                    }}
                >
                    <Image
                        src="/images/features-image.jpg"
                        alt="Manufacturing professional"
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </div>
            </section>

            {/* Problems Section */}
            <section
                className="flex flex-col items-start"
                style={{
                    padding: '80px',
                    width: '1440px',
                    height: '1941px',
                    gap: '80px',
                }}
            >
                <div
                    className="flex flex-col items-start"
                    style={{
                        gap: '56px',
                        width: '1280px',
                    }}
                >
                    {/* Section Header */}
                    <div
                        className="flex flex-col items-start"
                        style={{
                            gap: '64px',
                            width: '1280px',
                        }}
                    >
                        <div
                            className="flex flex-col items-start"
                            style={{
                                gap: '20px',
                                width: '1178px',
                            }}
                        >
                            <h2
                                className="text-white uppercase"
                                style={{
                                    fontFamily: 'var(--font-bebas-neue)',
                                    fontWeight: 400,
                                    fontSize: '88px',
                                    lineHeight: '88%',
                                    width: '1178px',
                                }}
                            >
                                Your Factory Runs Like Clockwork. Your Lead Pipeline? Not So Much.
                            </h2>
                        </div>

                        <p
                            className="text-white"
                            style={{
                                fontFamily: 'var(--font-inter)',
                                fontWeight: 400,
                                fontSize: '24px',
                                lineHeight: '29px',
                                width: '1280px',
                            }}
                        >
                            Let&apos;s be honest:
                        </p>
                    </div>

                    {/* Problem Cards Grid */}
                    <div
                        className="flex flex-col items-start"
                        style={{
                            gap: '28px',
                            width: '1280px',
                        }}
                    >
                        {/* Row 1 */}
                        <div
                            className="flex flex-row items-center"
                            style={{
                                gap: '28px',
                                width: '1280px',
                                height: '630px',
                            }}
                        >
                            {/* Card 1 - Exhibitions */}
                            <div
                                className="relative flex flex-col justify-end items-start flex-1"
                                style={{
                                    height: '630px',
                                }}
                            >
                                <Image
                                    src="/images/problem-01.jpg"
                                    alt="Exhibition"
                                    fill
                                    style={{ objectFit: 'cover', filter: 'grayscale(100%)' }}
                                />
                                <div
                                    className="relative z-10 flex flex-col items-start"
                                    style={{
                                        padding: '36px 32px',
                                        gap: '24px',
                                        width: '100%',
                                        background: '#1A1A1A',
                                    }}
                                >
                                    <h3
                                        className="text-white uppercase"
                                        style={{
                                            fontFamily: 'var(--font-inter)',
                                            fontWeight: 600,
                                            fontSize: '24px',
                                            lineHeight: '29px',
                                            letterSpacing: '0.08em',
                                        }}
                                    >
                                        Exhibitions?
                                    </h3>
                                    <p
                                        className="text-white"
                                        style={{
                                            fontFamily: 'var(--font-inter)',
                                            fontWeight: 400,
                                            fontSize: '24px',
                                            lineHeight: '29px',
                                        }}
                                    >
                                        ₹2 lakhs spent. 500 handshakes. 3 serious buyers. Maybe.
                                    </p>
                                </div>
                            </div>

                            {/* Card 2 - Website */}
                            <div
                                className="relative flex flex-col justify-end items-start flex-1"
                                style={{
                                    height: '630px',
                                }}
                            >
                                <Image
                                    src="/images/problem-04.jpg"
                                    alt="Website"
                                    fill
                                    style={{ objectFit: 'cover', filter: 'grayscale(100%)' }}
                                />
                                <div
                                    className="relative z-10 flex flex-col items-start"
                                    style={{
                                        padding: '36px 32px',
                                        gap: '24px',
                                        width: '100%',
                                        background: '#1A1A1A',
                                    }}
                                >
                                    <h3
                                        className="text-white uppercase"
                                        style={{
                                            fontFamily: 'var(--font-inter)',
                                            fontWeight: 600,
                                            fontSize: '24px',
                                            lineHeight: '29px',
                                            letterSpacing: '0.08em',
                                        }}
                                    >
                                        Your website?
                                    </h3>
                                    <p
                                        className="text-white"
                                        style={{
                                            fontFamily: 'var(--font-inter)',
                                            fontWeight: 400,
                                            fontSize: '24px',
                                            lineHeight: '29px',
                                        }}
                                    >
                                        Last inquiry: 6 weeks ago. Subject: &quot;Can you make plastic toys?&quot; (You manufacture industrial pumps.)
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Row 2 */}
                        <div
                            className="flex flex-row items-center"
                            style={{
                                gap: '28px',
                                width: '1280px',
                                height: '630px',
                            }}
                        >
                            {/* Card 3 - Cold Calling */}
                            <div
                                className="relative flex flex-col justify-end items-start flex-1"
                                style={{
                                    height: '630px',
                                }}
                            >
                                <Image
                                    src="/images/problem-03.jpg"
                                    alt="Cold Calling"
                                    fill
                                    style={{ objectFit: 'cover', filter: 'grayscale(100%)' }}
                                />
                                <div
                                    className="relative z-10 flex flex-col items-start"
                                    style={{
                                        padding: '36px 32px',
                                        gap: '24px',
                                        width: '100%',
                                        background: '#1A1A1A',
                                    }}
                                >
                                    <h3
                                        className="text-white uppercase"
                                        style={{
                                            fontFamily: 'var(--font-inter)',
                                            fontWeight: 600,
                                            fontSize: '24px',
                                            lineHeight: '29px',
                                            letterSpacing: '0.08em',
                                        }}
                                    >
                                        Cold calling?
                                    </h3>
                                    <p
                                        className="text-white"
                                        style={{
                                            fontFamily: 'var(--font-inter)',
                                            fontWeight: 400,
                                            fontSize: '24px',
                                            lineHeight: '29px',
                                        }}
                                    >
                                        100 calls. 80 don&apos;t answer. 15 ghost you. 5 waste your time.
                                    </p>
                                </div>
                            </div>

                            {/* Card 4 - Online Leads */}
                            <div
                                className="relative flex flex-col justify-end items-start flex-1"
                                style={{
                                    height: '630px',
                                }}
                            >
                                <Image
                                    src="/images/problem-02.jpg"
                                    alt="Online Leads"
                                    fill
                                    style={{ objectFit: 'cover', filter: 'grayscale(100%)' }}
                                />
                                <div
                                    className="relative z-10 flex flex-col items-start"
                                    style={{
                                        padding: '36px 32px',
                                        gap: '24px',
                                        width: '100%',
                                        background: '#1A1A1A',
                                    }}
                                >
                                    <h3
                                        className="text-white uppercase"
                                        style={{
                                            fontFamily: 'var(--font-inter)',
                                            fontWeight: 600,
                                            fontSize: '24px',
                                            lineHeight: '29px',
                                            letterSpacing: '0.08em',
                                        }}
                                    >
                                        Online leads?
                                    </h3>
                                    <p
                                        className="text-white"
                                        style={{
                                            fontFamily: 'var(--font-inter)',
                                            fontWeight: 400,
                                            fontSize: '24px',
                                            lineHeight: '29px',
                                        }}
                                    >
                                        Half spam. Half &quot;students doing project work.&quot;
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Closing Text */}
                    <div
                        className="flex flex-col items-start"
                        style={{
                            gap: '40px',
                            width: '1280px',
                        }}
                    >
                        <p
                            className="text-white"
                            style={{
                                fontFamily: 'var(--font-inter)',
                                fontWeight: 400,
                                fontSize: '24px',
                                lineHeight: '29px',
                            }}
                        >
                            You don&apos;t have a production problem. You have a consistent lead-flow problem.
                        </p>
                        <p
                            className="text-white"
                            style={{
                                fontFamily: 'var(--font-inter)',
                                fontWeight: 400,
                                fontSize: '24px',
                                lineHeight: '29px',
                            }}
                        >
                            We built something simple: A WhatsApp community where qualified leads land in your phone every month— no exhibitions, no cold calls, no wasted time.
                        </p>
                    </div>
                </div>
            </section>

            {/* Solutions Section */}
            <section
                className="flex flex-col items-start"
                style={{
                    padding: '80px',
                    width: '1440px',
                    gap: '80px',
                }}
            >
                {/* Section Header */}
                <div
                    className="flex flex-col items-start"
                    style={{
                        gap: '56px',
                        width: '1280px',
                    }}
                >
                    <div
                        className="flex flex-col items-start"
                        style={{
                            gap: '64px',
                            width: '1280px',
                        }}
                    >
                        <div
                            className="flex flex-col items-start"
                            style={{
                                gap: '20px',
                                width: '1178px',
                            }}
                        >
                            <h2
                                className="text-white uppercase"
                                style={{
                                    fontFamily: 'var(--font-bebas-neue)',
                                    fontWeight: 400,
                                    fontSize: '88px',
                                    lineHeight: '88%',
                                    width: '1178px',
                                }}
                            >
                                What You Actually Get
                            </h2>
                        </div>
                    </div>
                </div>

                {/* Feature Block 01 - Image Left, Text Right */}
                <div
                    className="flex flex-row items-center"
                    style={{
                        padding: '24px',
                        gap: '60px',
                        width: '1280px',
                        height: '588px',
                        background: '#1A1A1A',
                    }}
                >
                    {/* Image Container */}
                    <div
                        className="relative flex justify-center items-center"
                        style={{
                            width: '540px',
                            height: '540px',
                            background: '#242424',
                        }}
                    >
                        <div className="relative w-[80%] h-[80%]">
                            <Image
                                src="/images/solution-01.png"
                                alt="20 Qualified Leads"
                                fill
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                    </div>

                    {/* Text Content */}
                    <div
                        className="flex flex-col justify-center items-start flex-1"
                        style={{
                            padding: '40px 0px',
                            gap: '40px',
                            height: '441px',
                        }}
                    >
                        <div
                            className="flex flex-col items-start"
                            style={{
                                gap: '32px',
                                width: '100%',
                            }}
                        >
                            <h3
                                className="text-white"
                                style={{
                                    fontFamily: 'var(--font-inter)',
                                    fontWeight: 500,
                                    fontSize: '36px',
                                    lineHeight: '44px',
                                }}
                            >
                                20 Qualified Leads Every Month - Guaranteed
                            </h3>
                            <p
                                className="text-white"
                                style={{
                                    fontFamily: 'var(--font-inter)',
                                    fontWeight: 400,
                                    fontSize: '24px',
                                    lineHeight: '29px',
                                }}
                            >
                                Real decision-makers who need what you make:
                            </p>
                            <p
                                className="text-white"
                                style={{
                                    fontFamily: 'var(--font-inter)',
                                    fontWeight: 400,
                                    fontSize: '20px',
                                    lineHeight: '24px',
                                }}
                            >
                                Buyers actively searching for suppliers<br />
                                Companies seeking OEM partners<br />
                                Distributors scouting products<br />
                                Projects with actual budgets
                            </p>
                        </div>
                        <p
                            className="text-white"
                            style={{
                                fontFamily: 'var(--font-inter)',
                                fontWeight: 400,
                                fontSize: '20px',
                                lineHeight: '24px',
                            }}
                        >
                            Convert just ONE lead, you&apos;ve made all of your money back which you invested. Everything after? Pure profit.
                        </p>
                    </div>
                </div>

                {/* Feature Block 02 - Text Left, Image Right */}
                <div
                    className="flex flex-row items-center"
                    style={{
                        padding: '24px',
                        gap: '60px',
                        width: '1280px',
                        height: '588px',
                        background: '#1A1A1A',
                    }}
                >
                    {/* Text Content */}
                    <div
                        className="flex flex-col justify-center items-start flex-1"
                        style={{
                            padding: '40px 0px 40px 40px',
                            gap: '48px',
                            height: '540px',
                        }}
                    >
                        <div
                            className="flex flex-col items-start"
                            style={{
                                gap: '32px',
                                width: '100%',
                            }}
                        >
                            <h3
                                className="text-white"
                                style={{
                                    fontFamily: 'var(--font-inter)',
                                    fontWeight: 500,
                                    fontSize: '36px',
                                    lineHeight: '44px',
                                }}
                            >
                                Know What Your Competitors Are Doing
                            </h3>
                            <p
                                className="text-white"
                                style={{
                                    fontFamily: 'var(--font-inter)',
                                    fontWeight: 400,
                                    fontSize: '24px',
                                    lineHeight: '29px',
                                }}
                            >
                                We track performance across manufacturing categories:
                            </p>
                            <p
                                className="text-white"
                                style={{
                                    fontFamily: 'var(--font-inter)',
                                    fontWeight: 400,
                                    fontSize: '20px',
                                    lineHeight: '24px',
                                }}
                            >
                                Which products are getting bombarded with inquiries<br />
                                Which regions are buying like crazy<br />
                                What&apos;s trending up vs. dying down<br />
                                Where demand is exploding
                            </p>
                        </div>
                        <p
                            className="text-white"
                            style={{
                                fontFamily: 'var(--font-inter)',
                                fontWeight: 400,
                                fontSize: '20px',
                                lineHeight: '24px',
                            }}
                        >
                            Example: &quot;This month, automotive component suppliers got 40% more inquiries, mostly from Pune and Coimbatore.&quot;
                        </p>
                    </div>

                    {/* Image Container */}
                    <div
                        className="relative flex justify-center items-center"
                        style={{
                            width: '540px',
                            height: '540px',
                            background: '#242424',
                        }}
                    >
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

                {/* Feature Block 03 - Image Left, Text Right */}
                <div
                    className="flex flex-row items-center"
                    style={{
                        padding: '24px',
                        gap: '60px',
                        width: '1280px',
                        height: '588px',
                        background: '#1A1A1A',
                    }}
                >
                    {/* Image Container */}
                    <div
                        className="relative flex justify-center items-center"
                        style={{
                            width: '540px',
                            height: '540px',
                            background: '#242424',
                        }}
                    >
                        <div className="relative w-[80%] h-[80%]">
                            <Image
                                src="/images/solution-03.png"
                                alt="Daily Updates"
                                fill
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                    </div>

                    {/* Text Content */}
                    <div
                        className="flex flex-col justify-center items-start flex-1"
                        style={{
                            padding: '40px 0px',
                            gap: '64px',
                            height: '540px',
                        }}
                    >
                        <div
                            className="flex flex-col items-start"
                            style={{
                                gap: '32px',
                                width: '100%',
                            }}
                        >
                            <h3
                                className="text-white"
                                style={{
                                    fontFamily: 'var(--font-inter)',
                                    fontWeight: 500,
                                    fontSize: '36px',
                                    lineHeight: '44px',
                                }}
                            >
                                Daily Updates That Actually Matter
                            </h3>
                            <p
                                className="text-white"
                                style={{
                                    fontFamily: 'var(--font-inter)',
                                    fontWeight: 400,
                                    fontSize: '20px',
                                    lineHeight: '24px',
                                }}
                            >
                                Manufacturing news that affects your bottom line<br />
                                Government schemes and subsidies<br />
                                Upcoming expos worth attending<br />
                                New projects and tenders
                            </p>
                        </div>
                        <p
                            className="text-white"
                            style={{
                                fontFamily: 'var(--font-inter)',
                                fontWeight: 400,
                                fontSize: '20px',
                                lineHeight: '24px',
                            }}
                        >
                            No algorithms. No ads. No &quot;5 leadership lessons from Steve Jobs.&quot;
                        </p>
                    </div>
                </div>

                {/* Feature Block 04 - Text Left, Image Right */}
                <div
                    className="flex flex-row items-center"
                    style={{
                        padding: '24px',
                        gap: '60px',
                        width: '1280px',
                        height: '588px',
                        background: '#1A1A1A',
                    }}
                >
                    {/* Text Content */}
                    <div
                        className="flex flex-col justify-center items-start flex-1"
                        style={{
                            padding: '40px 0px 40px 40px',
                            gap: '64px',
                            height: '540px',
                        }}
                    >
                        <div
                            className="flex flex-col items-start"
                            style={{
                                gap: '32px',
                                width: '100%',
                            }}
                        >
                            <h3
                                className="text-white"
                                style={{
                                    fontFamily: 'var(--font-inter)',
                                    fontWeight: 500,
                                    fontSize: '36px',
                                    lineHeight: '44px',
                                }}
                            >
                                A Network That Actually Works
                            </h3>
                            <p
                                className="text-white"
                                style={{
                                    fontFamily: 'var(--font-inter)',
                                    fontWeight: 400,
                                    fontSize: '24px',
                                    lineHeight: '29px',
                                }}
                            >
                                Verified community of:
                            </p>
                            <p
                                className="text-white"
                                style={{
                                    fontFamily: 'var(--font-inter)',
                                    fontWeight: 400,
                                    fontSize: '20px',
                                    lineHeight: '24px',
                                }}
                            >
                                Manufacturing company owners<br />
                                Production managers<br />
                                Serious buyers and distributors<br />
                                Industry veterans
                            </p>
                        </div>
                        <p
                            className="text-white"
                            style={{
                                fontFamily: 'var(--font-inter)',
                                fontWeight: 400,
                                fontSize: '20px',
                                lineHeight: '24px',
                            }}
                        >
                            No spam. No &quot;Good morning&quot; GIFs. Just real business connections.
                        </p>
                    </div>

                    {/* Image Container */}
                    <div
                        className="relative flex justify-center items-center"
                        style={{
                            width: '540px',
                            height: '540px',
                            background: '#242424',
                        }}
                    >
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
