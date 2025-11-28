import styles from './EarlyAccessSection.module.css';

export default function EarlyAccessSection() {
    const benefits = [
        "List and sell products to thousands of verified buyers",
        "See live demand dashboards for your category",
        "Connect with suppliers and partners at scale"
    ];

    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <h2 className={styles.heading}>Plus: Early Access to Something Bigger</h2>
                <p className={styles.subHeading}>WhatsApp community members get first access to our upcoming platform where you can:</p>
            </div>

            <div className={styles.contentWrapper}>
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

            <p className={styles.footerText}>You're not just joining a group. You're getting ground-floor access.</p>
        </section>
    );
}
