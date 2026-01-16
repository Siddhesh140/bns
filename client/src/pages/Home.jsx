import { useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Navbar, Footer } from '../components/layout';
import {
    Button,
    ProblemCard,
    SolutionCard,
    ContactForm,
    PricingCard,
    // Animation utilities
    fadeInUp,
    fadeInUpSmall,
    fadeInUpTiny,
    fadeInUpViewport,
    slideInLeft,
    slideInRightDelayed,
    slideInRightImage,
    heroBackgroundZoom,
    staggerContainer,
    staggerContainerFast,
    staggerChild,
    staggerChildFadeUp,
    faqItemVariant,
    createIconPop,
    createXIconPop,
    createTextSlide,
    createCheckIconPop,
    createStepNumberPop,
    createStepTextSlide,
    delaySequences,
} from '../components/ui';
import { faqs } from '../data/faqData';
// Heroicons imports
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { CheckCircleIcon, QuestionMarkCircleIcon, PlusCircleIcon } from '@heroicons/react/24/solid';

export default function Home() {
    // State for FAQ accordion
    const [openIndex, setOpenIndex] = useState(null);

    // State for pricing card modal
    const [isPricingOpen, setIsPricingOpen] = useState(false);

    // State for contact form modal
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [formType, setFormType] = useState('join'); // 'join' or 'call'

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const handleJoinClick = () => {
        setIsPricingOpen(true);
    };

    const handlePricingJoinClick = () => {
        // Just close the pricing modal (no contact form)
        setIsPricingOpen(false);
    };

    const handleBookCallClick = () => {
        setFormType('call');
        setIsFormOpen(true);
    };

    return (
        <main className="min-h-screen bg-dark flex flex-col gap-0">
            {/* ========== HERO SECTION ========== */}
            <section
                id="hero"
                className="relative w-full h-[600px] md:h-[800px] overflow-hidden flex items-center justify-center"
                aria-label="Hero section"
            >
                {/* Navbar */}
                <Navbar onJoinClick={handleJoinClick} />

                {/* Background Image - Slow zoom out animation */}
                <motion.div
                    className="absolute inset-0 w-full h-full"
                    style={{
                        backgroundImage: 'url(/images/hero-bg.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                    {...heroBackgroundZoom}
                    aria-hidden="true"
                />

                {/* Subtle dark overlay for text readability */}
                <div className="absolute inset-0 w-full h-full bg-black/20" aria-hidden="true" />

                {/* Bottom Gradient for Seamless Transition */}
                <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-b from-transparent to-[#0F0F0F] z-10" aria-hidden="true" />

                {/* Content Container */}
                <div className="relative z-10 flex flex-col items-center gap-5 md:gap-8 px-4">
                    {/* Main Heading - Simple fade in */}
                    <motion.h1
                        className="hero-heading max-w-[372px] md:max-w-[1046.34px]"
                        {...fadeInUpSmall}
                    >
                        Stop Chasing Leads. Let Them Come to You.
                    </motion.h1>

                    {/* Subheading - Fade in */}
                    <motion.p
                        className="hero-subheading max-w-[294px] md:max-w-[708.44px]"
                        {...fadeInUpTiny}
                    >
                        Join India&apos;s first WhatsApp community built exclusively for manufacturers who are tired of cold calls that go nowhere.
                    </motion.p>
                </div>
            </section>

            {/* ========== WHAT SECTION ========== */}
            <div id="what">
                {/* Features Section */}
                <section
                    className="w-full flex flex-col md:flex-row md:justify-between md:items-center px-5 py-10 md:px-20 md:py-20 gap-5 md:gap-5 max-w-[400px] md:max-w-[1440px] mx-auto min-h-[962px] md:min-h-[720px]"
                    aria-label="Features section"
                >
                    {/* Mobile: Image First, Desktop: Content First */}
                    <motion.div
                        className="md:hidden relative w-full max-w-[360px] h-[300px] border border-white/20"
                        {...fadeInUp}
                    >
                        <img
                            src="/images/features-image.jpg"
                            alt="Manufacturing professional"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        className="flex flex-col items-start gap-[30px] w-full max-w-[360px] md:max-w-[687px]"
                        {...fadeInUp}
                    >
                        {/* Description */}
                        <p className="body-text text-white w-full text-base md:text-2xl leading-[1.1875rem] md:leading-[1.8125rem]">
                            India&apos;s first WhatsApp community built exclusively for manufacturers. Get 20 qualified leads delivered monthly—plus live market intel, competitor insights, and daily industry updates.
                        </p>

                        {/* Benefits List - Staggered */}
                        <motion.div
                            className="flex flex-col items-start w-full"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerContainer}
                        >
                            <motion.div
                                className="flex flex-row items-start py-8 gap-4 md:gap-4 w-full border-b border-white/20"
                                variants={staggerChild}
                            >
                                <motion.div {...createCheckIconPop(delaySequences.benefits.icon[0])}>
                                    <CheckCircleIcon className="w-6 h-6 text-white flex-shrink-0" />
                                </motion.div>
                                <motion.span
                                    className="body-text text-white text-base md:text-2xl leading-[1.1875rem] md:leading-[1.8125rem] flex-1"
                                    {...createTextSlide(delaySequences.benefits.text[0])}
                                >
                                    20 qualified leads land in your WhatsApp every month
                                </motion.span>
                            </motion.div>

                            <motion.div
                                className="flex flex-row items-start py-8 gap-2 md:gap-2 w-full border-b border-white/20"
                                variants={staggerChild}
                            >
                                <motion.div {...createCheckIconPop(delaySequences.benefits.icon[1])}>
                                    <CheckCircleIcon className="w-6 h-6 text-white flex-shrink-0" />
                                </motion.div>
                                <motion.span
                                    className="body-text text-white text-base md:text-2xl leading-[19px] md:leading-[29px] flex-1"
                                    {...createTextSlide(delaySequences.benefits.text[1])}
                                >
                                    See what your competitors are doing (legally, of course)
                                </motion.span>
                            </motion.div>

                            <motion.div
                                className="flex flex-row items-start py-8 gap-2 md:gap-2 w-full border-b border-white/20"
                                variants={staggerChild}
                            >
                                <motion.div {...createCheckIconPop(delaySequences.benefits.icon[2])}>
                                    <CheckCircleIcon className="w-6 h-6 text-white flex-shrink-0" />
                                </motion.div>
                                <motion.span
                                    className="body-text text-white text-base md:text-2xl leading-[19px] md:leading-[29px] flex-1"
                                    {...createTextSlide(delaySequences.benefits.text[2])}
                                >
                                    Know which products are hot before your rivals do
                                </motion.span>
                            </motion.div>

                            <motion.div
                                className="flex flex-row items-start py-8 gap-2 md:gap-2 w-full border-b border-white/20"
                                variants={staggerChild}
                            >
                                <motion.div {...createCheckIconPop(delaySequences.benefits.icon[3])}>
                                    <CheckCircleIcon className="w-6 h-6 text-white flex-shrink-0" />
                                </motion.div>
                                <motion.span
                                    className="body-text text-white text-base md:text-2xl leading-[19px] md:leading-[29px] flex-1"
                                    {...createTextSlide(delaySequences.benefits.text[3])}
                                >
                                    Daily news that matters—no fluff, just fact
                                </motion.span>
                            </motion.div>
                        </motion.div>

                        {/* Join Now Button */}
                        <Button
                            variant="primary"
                            className="px-7 py-4 h-11"
                            aria-label="Join the WhatsApp community now"
                            onClick={handleJoinClick}
                        >
                            Join Now
                        </Button>
                    </motion.div>

                    {/* Desktop: Image on Right */}
                    <motion.div
                        className="hidden md:block relative w-full max-w-[522px] h-[560px] border border-white/20"
                        {...slideInRightImage}
                    >
                        <img
                            src="/images/features-image.jpg"
                            alt="Manufacturing professional"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </motion.div>
                </section>

                {/* Problems Section */}
                <section
                    className="w-full flex flex-col items-start p-5 md:p-20 gap-20 md:gap-20 max-w-[400px] md:max-w-[1440px] mx-auto"
                    aria-label="Common problems section"
                >
                    <div className="flex flex-col items-start gap-14 md:gap-14 w-full max-w-[360px] md:max-w-[1280px]">
                        {/* Section Header */}
                        <motion.div
                            className="flex flex-col items-start gap-16 md:gap-16 w-full"
                            {...fadeInUp}
                        >
                            <div className="flex flex-col items-start gap-5 md:gap-5 w-full">
                                <h2 className="section-heading text-white uppercase w-full text-[52px] md:text-[88px] leading-[88%]">
                                    Your Factory Runs Like Clockwork. Your Lead Pipeline? Not So Much.
                                </h2>
                            </div>

                            <p className="body-text text-white w-full text-xl md:text-2xl leading-6 md:leading-[29px]">
                                Let&apos;s be honest:
                            </p>
                        </motion.div>

                        {/* Problem Cards - Mobile: Stacked, Desktop: 2x2 Grid */}
                        <div className="flex flex-col items-start gap-7 w-full">
                            {/* Mobile Only: All 4 cards stacked - Staggered */}
                            <motion.div
                                className="md:hidden flex flex-col items-start gap-7 w-full"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={staggerContainer}
                            >
                                <motion.div variants={staggerChildFadeUp}>
                                    <ProblemCard
                                        image="/images/problem-04.jpg"
                                        title="Exhibitions?"
                                        description="₹2 lakhs spent. 500 handshakes. 3 serious buyers. Maybe."
                                    />
                                </motion.div>
                                <motion.div variants={staggerChildFadeUp}>
                                    <ProblemCard
                                        image="/images/problem-01.jpg"
                                        title="Your website?"
                                        description='Last inquiry: 6 weeks ago. Subject: "Can you make plastic toys?" (You manufacture industrial pumps.)'
                                    />
                                </motion.div>
                                <motion.div variants={staggerChildFadeUp}>
                                    <ProblemCard
                                        image="/images/problem-03.jpg"
                                        title="Cold calling?"
                                        description="100 calls. 80 don't answer. 15 ghost you. 5 waste your time."
                                    />
                                </motion.div>
                                <motion.div variants={staggerChildFadeUp}>
                                    <ProblemCard
                                        image="/images/problem-02.jpg"
                                        title="Online leads?"
                                        description='Half spam. Half "students doing project work."'
                                        className="[&_img]:object-right"
                                    />
                                </motion.div>
                            </motion.div>

                            {/* Desktop: Row 1 with 2 cards side by side */}
                            <motion.div
                                className="hidden md:flex flex-row items-center gap-7 w-full"
                                {...fadeInUp}
                            >
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
                            </motion.div>

                            {/* Desktop: Row 2 with 2 cards side by side */}
                            <motion.div
                                className="hidden md:flex flex-row items-center gap-7 w-full"
                                {...slideInRightDelayed}
                            >
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
                            </motion.div>
                        </div>

                        {/* Closing Text */}
                        <motion.div
                            className="flex flex-col items-start gap-10 w-full"
                            {...fadeInUp}
                        >
                            <p className="body-text text-white text-xl md:text-2xl leading-6 md:leading-[1.8125rem] w-full">
                                You don&apos;t have a production problem. You have a consistent lead-flow problem.
                            </p>
                            <p className="body-text text-white text-xl md:text-2xl leading-6 md:leading-[29px] w-full">
                                We built something simple: A WhatsApp community where qualified leads land in your phone every month— no exhibitions, no cold calls, no wasted time.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Solutions Section */}
                <section
                    className="w-full flex flex-col items-start p-5 md:p-20 gap-12 md:gap-20 max-w-[400px] md:max-w-[1440px] mx-auto"
                    aria-label="Solutions section"
                >
                    {/* Section Header */}
                    <motion.div
                        className="flex flex-col items-start w-full"
                        {...fadeInUp}
                    >
                        <h2 className="section-heading text-white uppercase w-full text-[52px] md:text-[88px] leading-[88%]">
                            What You Actually Get
                        </h2>
                    </motion.div>

                    {/* Feature Block 01 - Image Left */}
                    <motion.div {...fadeInUp}>
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
                    </motion.div>

                    {/* Feature Block 02 - Image Right */}
                    <motion.div {...fadeInUp}>
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
                    </motion.div>

                    {/* Feature Block 03 - Image Left */}
                    <motion.div {...fadeInUp}>
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
                    </motion.div>

                    {/* Feature Block 04 - Image Right */}
                    <motion.div {...fadeInUp}>
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
                    </motion.div>
                </section>
            </div>

            {/* ========== HOW SECTION ========== */}
            <div id="how">
                {/* HowItWorks Section */}
                <section
                    className="w-full flex flex-col items-center p-5 md:p-20 gap-12 md:gap-12 max-w-[400px] md:max-w-[1440px] mx-auto bg-dark"
                    aria-label="How it works section"
                >
                    <motion.h2
                        className="section-heading text-white uppercase w-full text-[52px] md:text-[88px] leading-[88%]"
                        {...fadeInUp}
                    >
                        How this works
                    </motion.h2>

                    <motion.div
                        className="flex flex-col items-start p-5 md:p-10 gap-8 md:gap-14 w-full bg-dark-secondary"
                        {...fadeInUp}
                    >
                        <motion.div
                            className="flex flex-col items-start gap-6 md:gap-8 w-full"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerContainerFast}
                        >
                            <motion.div
                                className="flex flex-row items-start gap-[15px] w-full"
                                variants={staggerChild}
                            >
                                <motion.div
                                    className="step-number flex justify-center items-center bg-white rounded-full flex-shrink-0"
                                    {...createStepNumberPop(delaySequences.steps.number[0])}
                                >
                                    <span className="text-dark">1</span>
                                </motion.div>
                                <motion.p
                                    className="step-text text-white text-lg md:text-2xl leading-[1.375rem] md:leading-[1.8125rem]"
                                    {...createStepTextSlide(delaySequences.steps.text[0])}
                                >
                                    Join – Costs less than a team dinner or a client lunch.
                                </motion.p>
                            </motion.div>

                            <motion.div
                                className="flex flex-row items-start gap-[15px] w-full"
                                variants={staggerChild}
                            >
                                <motion.div
                                    className="step-number flex justify-center items-center bg-white rounded-full flex-shrink-0"
                                    {...createStepNumberPop(delaySequences.steps.number[1])}
                                >
                                    <span className="text-[#0F0F0F]">2</span>
                                </motion.div>
                                <motion.p
                                    className="step-text text-white text-lg md:text-2xl leading-[22px] md:leading-[29px]"
                                    {...createStepTextSlide(delaySequences.steps.text[1])}
                                >
                                    Get Added – Within 24 hours after verification.
                                </motion.p>
                            </motion.div>

                            <motion.div
                                className="flex flex-row items-start gap-[15px] w-full"
                                variants={staggerChild}
                            >
                                <motion.div
                                    className="step-number flex justify-center items-center bg-white rounded-full flex-shrink-0"
                                    {...createStepNumberPop(delaySequences.steps.number[2])}
                                >
                                    <span className="text-[#0F0F0F]">3</span>
                                </motion.div>
                                <motion.p
                                    className="step-text text-white text-lg md:text-2xl leading-[22px] md:leading-[29px]"
                                    {...createStepTextSlide(delaySequences.steps.text[2])}
                                >
                                    Leads Start Flowing – First leads arrive within a week.
                                </motion.p>
                            </motion.div>

                            <motion.div
                                className="flex flex-row items-start gap-[15px] w-full"
                                variants={staggerChild}
                            >
                                <motion.div
                                    className="step-number flex justify-center items-center bg-white rounded-full flex-shrink-0"
                                    {...createStepNumberPop(delaySequences.steps.number[3])}
                                >
                                    <span className="text-[#0F0F0F]">4</span>
                                </motion.div>
                                <motion.p
                                    className="step-text text-white text-lg md:text-2xl leading-[22px] md:leading-[29px]"
                                    {...createStepTextSlide(delaySequences.steps.text[3])}
                                >
                                    Track What&apos;s Hot – Monthly data shows industry trends.
                                </motion.p>
                            </motion.div>

                            <motion.div
                                className="flex flex-row items-start gap-[15px] w-full"
                                variants={staggerChild}
                            >
                                <motion.div
                                    className="step-number flex justify-center items-center bg-white rounded-full flex-shrink-0"
                                    {...createStepNumberPop(delaySequences.steps.number[4])}
                                >
                                    <span className="text-[#0F0F0F]">5</span>
                                </motion.div>
                                <motion.p
                                    className="step-text text-white text-lg md:text-2xl leading-[22px] md:leading-[29px]"
                                    {...createStepTextSlide(delaySequences.steps.text[4])}
                                >
                                    Grow Smarter – Network, learn, spot opportunities early.
                                </motion.p>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </section>

                {/* IsThisForYou Section */}
                <section
                    className="w-full flex flex-col items-start p-5 md:p-20 gap-16 md:gap-16 max-w-[400px] md:max-w-[1440px] mx-auto bg-dark"
                    aria-label="Is this for you section"
                >
                    <motion.h2
                        className="section-heading text-white uppercase w-full text-[52px] md:text-[88px] leading-[88%]"
                        {...fadeInUp}
                    >
                        Is This For You?
                    </motion.h2>

                    <div className="flex flex-col md:flex-row items-stretch gap-10 md:gap-16 w-full">
                        {/* Perfect If You - Light Card */}
                        <motion.div
                            className="flex flex-col items-start p-5 md:p-10 gap-10 md:gap-14 w-full md:w-1/2 bg-[#F5F5F5]"
                            {...slideInLeft}
                        >
                            <h3 className="step-text text-2xl md:text-[40px] leading-[100%] text-[#151515]">
                                Perfect If You
                            </h3>

                            <div className="flex flex-col items-start gap-6 md:gap-8 w-full">
                                <div className="flex flex-row items-start gap-[15px]">
                                    <motion.div
                                        className="w-8 h-8 flex items-center justify-center bg-dark rounded-full flex-shrink-0"
                                        {...createIconPop(delaySequences.isThisForYou.light.icon[0])}
                                    >
                                        <CheckIcon className="w-5 h-5 text-white" />
                                    </motion.div>
                                    <motion.p
                                        className="body-text text-lg md:text-2xl leading-[1.375rem] md:leading-[1.8125rem] text-[#0F0F0F]"
                                        {...createTextSlide(delaySequences.isThisForYou.light.text[0])}
                                    >
                                        Manufacture industrial products (machines, components, OEM parts, tools)
                                    </motion.p>
                                </div>

                                <div className="flex flex-row items-start gap-[15px]">
                                    <motion.div
                                        className="w-8 h-8 flex items-center justify-center bg-dark rounded-full flex-shrink-0"
                                        {...createIconPop(delaySequences.isThisForYou.light.icon[1])}
                                    >
                                        <CheckIcon className="w-5 h-5 text-white" />
                                    </motion.div>
                                    <motion.p
                                        className="body-text text-lg md:text-2xl leading-[22px] md:leading-[29px] text-[#0F0F0F]"
                                        {...createTextSlide(delaySequences.isThisForYou.light.text[1])}
                                    >
                                        Want leads you can actually call, not just website traffic
                                    </motion.p>
                                </div>

                                <div className="flex flex-row items-start gap-[15px]">
                                    <motion.div
                                        className="check-icon-container"
                                        {...createIconPop(delaySequences.isThisForYou.light.icon[2])}
                                    >
                                        <CheckIcon className="w-5 h-5 text-white" />
                                    </motion.div>
                                    <motion.p
                                        className="body-text text-lg md:text-2xl leading-[22px] md:leading-[29px] text-[#0F0F0F]"
                                        {...createTextSlide(delaySequences.isThisForYou.light.text[2])}
                                    >
                                        Will follow up and close deals yourself
                                    </motion.p>
                                </div>

                                <div className="flex flex-row items-start gap-[15px]">
                                    <motion.div
                                        className="check-icon-container"
                                        {...createIconPop(delaySequences.isThisForYou.light.icon[3])}
                                    >
                                        <CheckIcon className="w-5 h-5 text-white" />
                                    </motion.div>
                                    <motion.p
                                        className="body-text text-lg md:text-2xl leading-[22px] md:leading-[29px] text-[#0F0F0F]"
                                        {...createTextSlide(delaySequences.isThisForYou.light.text[3])}
                                    >
                                        Want market insights before everyone else
                                    </motion.p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Not For You If You - Dark Card */}
                        <motion.div
                            className="flex flex-col items-start p-5 md:p-10 gap-10 md:gap-14 w-full md:w-1/2 bg-dark-secondary"
                            {...slideInRightDelayed}
                        >
                            <h3 className="step-text text-2xl md:text-[40px] leading-[100%] text-white">
                                Not For You If You
                            </h3>

                            <div className="flex flex-col items-start gap-6 md:gap-8 w-full">
                                <div className="flex flex-row items-start gap-[15px]">
                                    <motion.div
                                        className="w-8 h-8 flex items-center justify-center bg-white rounded-full flex-shrink-0"
                                        {...createXIconPop(delaySequences.isThisForYou.dark.icon[0])}
                                    >
                                        <XMarkIcon className="w-5 h-5 text-[#0F0F0F]" />
                                    </motion.div>
                                    <motion.p
                                        className="body-text text-lg md:text-2xl leading-[1.375rem] md:leading-[1.8125rem] text-white"
                                        {...createTextSlide(delaySequences.isThisForYou.dark.text[0])}
                                    >
                                        Expect automated sales while you sleep
                                    </motion.p>
                                </div>

                                <div className="flex flex-row items-start gap-[15px]">
                                    <motion.div
                                        className="w-8 h-8 flex items-center justify-center bg-white rounded-full flex-shrink-0"
                                        {...createXIconPop(delaySequences.isThisForYou.dark.icon[1])}
                                    >
                                        <XMarkIcon className="w-5 h-5 text-[#0F0F0F]" />
                                    </motion.div>
                                    <motion.p
                                        className="body-text text-lg md:text-2xl leading-[22px] md:leading-[29px] text-white"
                                        {...createTextSlide(delaySequences.isThisForYou.dark.text[1])}
                                    >
                                        Won&apos;t talk to buyers because you&apos;re &quot;too busy&quot;
                                    </motion.p>
                                </div>

                                <div className="flex flex-row items-start gap-[15px]">
                                    <motion.div
                                        className="w-8 h-8 flex items-center justify-center bg-white rounded-full flex-shrink-0"
                                        {...createXIconPop(delaySequences.isThisForYou.dark.icon[2])}
                                    >
                                        <XMarkIcon className="w-5 h-5 text-[#0F0F0F]" />
                                    </motion.div>
                                    <motion.p
                                        className="body-text text-lg md:text-2xl leading-[22px] md:leading-[29px] text-white"
                                        {...createTextSlide(delaySequences.isThisForYou.dark.text[2])}
                                    >
                                        Think our subscription is &quot;too expensive&quot; for 20 qualified leads
                                    </motion.p>
                                </div>

                                <div className="flex flex-row items-start gap-[15px]">
                                    <motion.div
                                        className="w-8 h-8 flex items-center justify-center bg-white rounded-full flex-shrink-0"
                                        {...createXIconPop(delaySequences.isThisForYou.dark.icon[3])}
                                    >
                                        <XMarkIcon className="w-5 h-5 text-[#0F0F0F]" />
                                    </motion.div>
                                    <motion.p
                                        className="body-text text-lg md:text-2xl leading-[22px] md:leading-[29px] text-white"
                                        {...createTextSlide(delaySequences.isThisForYou.dark.text[3])}
                                    >
                                        Plan to spam the group (we&apos;ll kick you out)
                                    </motion.p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* WhyBigVision Section */}
                <section
                    className="w-full flex flex-col items-start p-5 md:p-20 gap-10 md:gap-16 max-w-[400px] md:max-w-[1440px] mx-auto bg-dark"
                    aria-label="Future platform access section"
                >
                    <motion.div
                        className="flex flex-col items-start gap-7 md:gap-7 w-full"
                        {...fadeInUp}
                    >
                        <h2 className="section-heading text-white uppercase w-full text-[52px] md:text-[88px] leading-[88%]">
                            Plus: Early Access to Something Bigger
                        </h2>
                        <p className="body-text text-white text-xl md:text-[1.75rem] leading-6 md:leading-[2.125rem] w-full">
                            WhatsApp community members get first access to our upcoming platform where you can:
                        </p>
                    </motion.div>

                    <motion.div
                        className="flex flex-col items-start p-5 md:p-10 gap-8 md:gap-14 w-full bg-dark-secondary"
                        {...fadeInUp}
                    >
                        <div className="flex flex-col items-start gap-6 md:gap-8 w-full">
                            <div className="flex flex-row items-start gap-[15px]">
                                <motion.div
                                    className="w-8 h-8 flex items-center justify-center bg-white rounded-full flex-shrink-0"
                                    {...createIconPop(delaySequences.platformAccess.icon[0])}
                                >
                                    <CheckIcon className="w-5 h-5 text-[#0F0F0F]" />
                                </motion.div>
                                <motion.p
                                    className="body-text text-white text-lg md:text-2xl leading-[1.375rem] md:leading-[1.8125rem]"
                                    {...createTextSlide(delaySequences.platformAccess.text[0])}
                                >
                                    List and sell products to thousands of verified buyers
                                </motion.p>
                            </div>

                            <div className="flex flex-row items-start gap-[15px]">
                                <motion.div
                                    className="w-8 h-8 flex items-center justify-center bg-white rounded-full flex-shrink-0"
                                    {...createIconPop(delaySequences.platformAccess.icon[1])}
                                >
                                    <CheckIcon className="w-5 h-5 text-[#0F0F0F]" />
                                </motion.div>
                                <motion.p
                                    className="body-text text-white text-lg md:text-2xl leading-[22px] md:leading-[29px]"
                                    {...createTextSlide(delaySequences.platformAccess.text[1])}
                                >
                                    See live demand dashboards for your category
                                </motion.p>
                            </div>

                            <div className="flex flex-row items-start gap-[15px]">
                                <motion.div
                                    className="w-8 h-8 flex items-center justify-center bg-white rounded-full flex-shrink-0"
                                    {...createIconPop(delaySequences.platformAccess.icon[2])}
                                >
                                    <CheckIcon className="w-5 h-5 text-[#0F0F0F]" />
                                </motion.div>
                                <motion.p
                                    className="body-text text-white text-lg md:text-2xl leading-[22px] md:leading-[29px]"
                                    {...createTextSlide(delaySequences.platformAccess.text[2])}
                                >
                                    Connect with suppliers and partners at scale
                                </motion.p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.p
                        className="body-text text-white text-xl md:text-[1.75rem] leading-6 md:leading-[2.125rem] w-full"
                        {...fadeInUpViewport}
                    >
                        You&apos;re not just joining a group. You&apos;re getting ground-floor access.
                    </motion.p>
                </section>
            </div>

            {/* ========== WHO SECTION ========== */}
            <section
                id="who"
                className="relative flex flex-col justify-end items-start overflow-hidden w-full min-h-[800px] md:min-h-[954px] p-5 md:p-20 max-w-[400px] md:max-w-[1440px] mx-auto"
                style={{ isolation: 'isolate' }}
                aria-label="Join now section"
            >
                {/* Background Image */}
                <div
                    className="absolute inset-0 w-full h-full z-0"
                    style={{
                        backgroundImage: 'url(/images/join-bg.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                    aria-hidden="true"
                />

                {/* Saturation Overlay */}
                <div
                    className="absolute inset-0 w-full h-full z-[1]"
                    style={{
                        background: '#D9D9D9',
                        mixBlendMode: 'saturation',
                    }}
                    aria-hidden="true"
                />

                {/* Dark Gradient / Blur Ellipses - Keep desktop positioning */}
                <div className="hidden md:block absolute z-0 who-section-blur-1" aria-hidden="true" />
                <div className="hidden md:block absolute z-0 who-section-blur-2" aria-hidden="true" />
                <div className="hidden md:block absolute z-0 who-section-blur-3" aria-hidden="true" />
                <div className="hidden md:block absolute z-0 who-section-blur-4" aria-hidden="true" />
                <div className="hidden md:block absolute z-0 who-section-blur-5" aria-hidden="true" />

                {/* Mobile Blur Overlays */}
                <div className="md:hidden absolute inset-0 w-full h-full z-0 bg-gradient-to-b from-[rgba(15,15,15,0.3)] to-[rgba(15,15,15,0.8)]" aria-hidden="true" />

                {/* Content Container */}
                <div className="relative z-[2] flex flex-col md:flex-row justify-between items-start gap-10 md:gap-16 w-full">
                    {/* Top Content */}
                    <motion.div
                        className="flex flex-col items-start gap-7 md:gap-7 w-full md:w-auto"
                        {...fadeInUp}
                    >
                        <h2 className="section-heading text-white uppercase w-full text-[52px] md:text-[88px] leading-[88%]">
                            Join Now. Start Growing.
                        </h2>
                        <p className="body-text text-white text-lg md:text-2xl leading-[1.375rem] md:leading-[1.8125rem] w-full md:w-[402px]">
                            No annual lock-in. No contracts. Stay as long as it&apos;s valuable.
                        </p>

                        {/* Join Button */}
                        <Button
                            variant="primary"
                            className="px-7 md:px-7 py-4 md:py-4 text-sm md:text-base"
                            aria-label="Join the community now"
                            onClick={handleJoinClick}
                        >
                            Join Now
                        </Button>
                    </motion.div>

                    {/* Benefits List - With dark background box */}
                    <motion.div
                        className="flex flex-col items-start p-5 md:p-10 gap-4 md:gap-4 w-full md:w-auto bg-dark-secondary"
                        {...slideInRightDelayed}
                    >
                        <div className="flex flex-row items-start gap-[15px]">
                            <motion.div
                                className="w-8 h-8 flex items-center justify-center bg-white rounded-full flex-shrink-0"
                                {...createIconPop(delaySequences.joinNow.icon[0])}
                            >
                                <CheckCircleIcon className="w-5 h-5 text-[#0F0F0F]" />
                            </motion.div>
                            <motion.p
                                className="body-text text-white text-lg md:text-2xl leading-[1.375rem] md:leading-[1.8125rem]"
                                {...createTextSlide(delaySequences.joinNow.text[0])}
                            >
                                20 qualified leads monthly
                            </motion.p>
                        </div>

                        <div className="flex flex-row items-start gap-[15px]">
                            <motion.div
                                className="w-8 h-8 flex items-center justify-center bg-white rounded-full flex-shrink-0"
                                {...createIconPop(delaySequences.joinNow.icon[1])}
                            >
                                <CheckCircleIcon className="w-5 h-5 text-[#0F0F0F]" />
                            </motion.div>
                            <motion.p
                                className="body-text text-white text-lg md:text-2xl leading-[22px] md:leading-[29px]"
                                {...createTextSlide(delaySequences.joinNow.text[1])}
                            >
                                Manufacturing-only WhatsApp group
                            </motion.p>
                        </div>

                        <div className="flex flex-row items-start gap-[15px]">
                            <motion.div
                                className="w-8 h-8 flex items-center justify-center bg-white rounded-full flex-shrink-0"
                                {...createIconPop(delaySequences.joinNow.icon[2])}
                            >
                                <CheckCircleIcon className="w-5 h-5 text-[#0F0F0F]" />
                            </motion.div>
                            <motion.p
                                className="body-text text-white text-lg md:text-2xl leading-[22px] md:leading-[29px]"
                                {...createTextSlide(delaySequences.joinNow.text[2])}
                            >
                                Competitor & market data
                            </motion.p>
                        </div>

                        <div className="flex flex-row items-start gap-[15px]">
                            <motion.div
                                className="w-8 h-8 flex items-center justify-center bg-white rounded-full flex-shrink-0"
                                {...createIconPop(delaySequences.joinNow.icon[3])}
                            >
                                <CheckCircleIcon className="w-5 h-5 text-[#0F0F0F]" />
                            </motion.div>
                            <motion.p
                                className="body-text text-white text-lg md:text-2xl leading-[22px] md:leading-[29px]"
                                {...createTextSlide(delaySequences.joinNow.text[3])}
                            >
                                Daily opportunity alerts
                            </motion.p>
                        </div>

                        <div className="flex flex-row items-start gap-[15px]">
                            <motion.div
                                className="w-8 h-8 flex items-center justify-center bg-white rounded-full flex-shrink-0"
                                {...createIconPop(delaySequences.joinNow.icon[4])}
                            >
                                <CheckCircleIcon className="w-5 h-5 text-[#0F0F0F]" />
                            </motion.div>
                            <motion.p
                                className="body-text text-white text-lg md:text-2xl leading-[22px] md:leading-[29px]"
                                {...createTextSlide(delaySequences.joinNow.text[4])}
                            >
                                Webinars for your team
                            </motion.p>
                        </div>

                        <div className="flex flex-row items-start gap-[15px]">
                            <motion.div
                                className="w-8 h-8 flex items-center justify-center bg-white rounded-full flex-shrink-0"
                                {...createIconPop(delaySequences.joinNow.icon[5])}
                            >
                                <CheckCircleIcon className="w-5 h-5 text-[#0F0F0F]" />
                            </motion.div>
                            <motion.p
                                className="body-text text-white text-lg md:text-2xl leading-[22px] md:leading-[29px]"
                                {...createTextSlide(delaySequences.joinNow.text[5])}
                            >
                                Priority platform access
                            </motion.p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Still Thinking Section */}
            <section
                className="w-full flex flex-col items-start p-5 md:p-20 gap-16 md:gap-16 max-w-[400px] md:max-w-[1440px] mx-auto bg-dark"
                aria-label="Book a call section"
            >
                <motion.div
                    className="flex flex-col md:flex-row justify-between items-start gap-7 md:gap-7 w-full"
                    {...fadeInUp}
                >
                    {/* Left Content */}
                    <div className="flex flex-col items-start gap-7 md:gap-7 w-full md:w-auto">
                        <h2 className="section-heading text-white uppercase w-full text-[52px] md:text-[88px] leading-[88%]">
                            Still thinking?
                        </h2>
                        <p className="body-text text-white text-xl md:text-[1.75rem] leading-6 md:leading-[2.125rem] w-full">
                            Book a 10-Minute Call
                        </p>
                    </div>

                    {/* Right Content - Button */}
                    <Button
                        variant="primary"
                        className="px-7 py-4 w-full md:w-auto text-sm md:text-base"
                        aria-label="Book a 10-minute call"
                        onClick={handleBookCallClick}
                    >
                        Book Now
                    </Button>
                </motion.div>
            </section>

            {/* ========== WHY SECTION (FAQ) ========== */}
            <section
                id="why"
                className="w-full flex flex-col items-start p-5 md:p-20 gap-16 md:gap-16 max-w-[400px] md:max-w-[1440px] mx-auto bg-dark"
                aria-label="Frequently asked questions"
            >
                <motion.div
                    className="flex flex-col items-start gap-7 md:gap-7 w-full"
                    {...fadeInUp}
                >
                    <h2 className="section-heading text-white uppercase text-left w-full text-[52px] md:text-[88px] leading-[88%]">
                        Quick Questions
                    </h2>
                </motion.div>

                <motion.div
                    className="flex flex-col items-start gap-6 md:gap-6 w-full"
                    role="list"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainerFast}
                >
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-start w-full bg-dark-secondary transition-all duration-300 p-5 md:p-9 gap-7 md:gap-7"
                            style={{
                                boxShadow: openIndex === index ? '0 0 30px rgba(255, 255, 255, 0.15)' : 'none',
                                border: openIndex === index ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid transparent',
                            }}
                            role="listitem"
                            variants={faqItemVariant}
                        >
                            <button
                                className="flex flex-row justify-between items-center w-full cursor-pointer"
                                onClick={() => handleToggle(index)}
                                style={{ gap: '20px' }}
                                aria-expanded={openIndex === index}
                                aria-controls={`faq-answer-${index}`}
                                type="button"
                            >
                                <div className="flex flex-row items-center" style={{ gap: '12px' }}>
                                    {/* Question Mark Icon */}
                                    <div className="faq-icon-container">
                                        <QuestionMarkCircleIcon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3
                                        className={`faq-question text-xl md:text-[1.75rem] leading-6 md:leading-[2.125rem] ${openIndex === index ? 'text-white' : 'text-[#C3C3C3]'}`}
                                    >
                                        {faq.question}
                                    </h3>
                                </div>

                                {/* Plus/Close Icon */}
                                <div className={`faq-icon-container faq-plus-icon ${openIndex === index ? 'faq-plus-icon-rotated' : ''}`}>
                                    <PlusCircleIcon className="w-8 h-8 text-white" />
                                </div>
                            </button>

                            <div
                                id={`faq-answer-${index}`}
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}`}
                                style={{ width: '100%' }}
                                role="region"
                                aria-hidden={openIndex !== index}
                            >
                                <div className="flex flex-row items-start pl-0 md:pl-11">
                                    <p className="faq-answer text-lg md:text-2xl leading-[1.375rem] md:leading-[1.8125rem]">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* ========== FOOTER ========== */}
            <Footer />

            {/* Pricing Card Modal */}
            <PricingCard
                isOpen={isPricingOpen}
                onClose={() => setIsPricingOpen(false)}
                onJoinClick={handlePricingJoinClick}
            />

            {/* Contact Form Modal */}
            <ContactForm
                isOpen={isFormOpen}
                onClose={() => setIsFormOpen(false)}
                formType={formType}
            />
        </main>
    );
}

Home.propTypes = {};
