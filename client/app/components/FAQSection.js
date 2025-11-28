"use client";
import { useState } from 'react';
import styles from './FAQSection.module.css';

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(0); // First item open by default based on design

    const faqs = [
        {
            question: "What kind of leads will I get?",
            answer: "Real buyers, distributors, OEM partners, project inquiries—filtered for quality."
        },
        {
            question: "Will I compete with other members?",
            answer: "We limit members per category to ensure everyone gets a fair share of leads and opportunities."
        },
        {
            question: "Can you guarantee sales?",
            answer: "We guarantee high-quality leads and connections. Closing the deal is up to your product and sales process."
        },
        {
            question: "What if I don't like it?",
            answer: "No contracts. You can cancel anytime if you feel you're not getting value."
        },
        {
            question: "What if someone spams?",
            answer: "We have a zero-tolerance policy for spam. Any member spamming the group will be removed immediately."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <h2 className={styles.heading}>Quick Questions</h2>
                <p className={styles.subHeading}>Book a 10-Minute Call</p>
            </div>

            <div className={styles.faqContainer}>
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`${styles.faqItem} ${openIndex === index ? styles.open : ''}`}
                        onClick={() => toggleFAQ(index)}
                    >
                        <div className={styles.questionRow}>
                            <div className={styles.questionContent}>
                                <div className={styles.iconWrapper}>
                                    {/* Question Mark Icon */}
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="16" cy="16" r="12" fill="#FFFFFF" />
                                        <path d="M16 22V22.01M16 10C18.2091 10 20 11.7909 20 14C20 16.2091 18.2091 18 16 18V18" stroke="#0F0F0F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <h3 className={`${styles.questionText} ${openIndex === index ? styles.activeText : ''}`}>{faq.question}</h3>
                            </div>

                            <div className={`${styles.plusIcon} ${openIndex === index ? styles.rotated : ''}`}>
                                {/* Plus Icon */}
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="16" cy="16" r="12" fill="#FFFFFF" />
                                    <path d="M16 8V24M8 16H24" stroke="#0F0F0F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>

                        <div className={`${styles.answerContainer} ${openIndex === index ? styles.showAnswer : ''}`}>
                            <p className={styles.answerText}>{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
