import styles from './JoinNowSection.module.css';

export default function JoinNowSection() {
    const benefits = [
        "20 qualified leads monthly",
        "Manufacturing-only WhatsApp group",
        "Competitor & market data",
        "Daily opportunity alerts",
        "Priority platform access"
    ];

    return (
        <section id="why" className={styles.section}>
            {/* Background Elements */}
            <div className={styles.backgroundImage}></div>
            <div className={styles.darkGradient}></div>
            <div className={styles.ellipse55}></div>
            <div className={styles.ellipse54}></div>
            <div className={styles.ellipse53}></div>
            <div className={styles.ellipse52}></div>
            <div className={styles.ellipse56}></div>
            <div className={styles.rectangleOverlay}></div>

            <div className={styles.contentWrapper}>
                {/* Left Side - CTA */}
                <div className={styles.ctaContainer}>
                    <h2 className={styles.heading}>Join Now. Start Growing.</h2>
                    <p className={styles.subHeading}>No annual lock-in. No contracts. Stay as long as it's valuable.</p>
                    <button className={styles.joinButton}>
                        <span className={styles.joinButtonText}>JOIN NOW</span>
                    </button>
                </div>

                {/* Right Side - Benefits List */}
                <div className={styles.benefitsContainer}>
                    <div className={styles.benefitsList}>
                        {benefits.map((benefit, index) => (
                            <div key={index} className={styles.benefitItem}>
                                <div className={styles.iconWrapper}>
                                    {/* Check Icon */}
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="16" cy="16" r="12" fill="#FFFFFF" />
                                        <path d="M9 16L14 21L23 11" stroke="#0F0F0F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <p className={styles.benefitText}>{benefit}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
