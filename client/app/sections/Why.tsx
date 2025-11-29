'use client';

import { useState } from 'react';

interface FAQItemProps {
    question: string;
    answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="flex flex-col items-start w-full bg-[#191919] transition-all duration-300"
            style={{
                padding: '36px',
                gap: '28px',
                width: '1280px',
            }}
        >
            <div
                className="flex flex-row justify-between items-center w-full cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
                style={{ gap: '20px' }}
            >
                <div className="flex flex-row items-center" style={{ gap: '12px' }}>
                    {/* Question Mark Icon */}
                    <div style={{ width: '32px', height: '32px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="10" stroke={isOpen ? "white" : "#C3C3C3"} strokeWidth="2" />
                            <path d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13" stroke={isOpen ? "white" : "#C3C3C3"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 17H12.01" stroke={isOpen ? "white" : "#C3C3C3"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <h3
                        style={{
                            fontFamily: 'var(--font-inter)',
                            fontWeight: 500,
                            fontSize: '28px',
                            lineHeight: '34px',
                            color: isOpen ? '#FFFFFF' : '#C3C3C3',
                            transition: 'color 0.3s ease',
                        }}
                    >
                        {question}
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
                        transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease'
                    }}
                >
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="16" cy="16" r="16" fill="white" />
                        <path d="M16 10V22" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10 16H22" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>

            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}`}
                style={{ width: '100%' }}
            >
                <div className="flex flex-row items-start" style={{ paddingLeft: '44px' }}>
                    <p
                        style={{
                            fontFamily: 'var(--font-inter)',
                            fontWeight: 400,
                            fontSize: '24px',
                            lineHeight: '29px',
                            color: '#C3C3C3',
                        }}
                    >
                        {answer}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default function Why() {
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
        <section id="why"
            className="flex flex-col items-center"
            style={{
                padding: '80px',
                gap: '64px',
                width: '1440px',
                background: '#0F0F0F',
            }}
        >
            <div
                className="flex flex-col items-center"
                style={{
                    gap: '28px',
                    width: '1280px',
                }}
            >
                <h2
                    className="text-white uppercase text-center"
                    style={{
                        fontFamily: 'var(--font-bebas-neue)',
                        fontWeight: 400,
                        fontSize: '88px',
                        lineHeight: '88%',
                    }}
                >
                    Quick Questions
                </h2>
            </div>

            <div
                className="flex flex-col items-start"
                style={{
                    gap: '24px',
                    width: '1280px',
                }}
            >
                {faqs.map((faq, index) => (
                    <FAQItem key={index} question={faq.question} answer={faq.answer} />
                ))}
            </div>
        </section>
    );
}
