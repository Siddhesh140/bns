import styles from './FeaturesSection.module.css';
import Image from 'next/image';

export default function FeaturesSection() {
    const features = [
        "20 qualified leads land in your WhatsApp every month",
        "See what your competitors are doing (legally, of course)",
        "Know which products are hot before your rivals do",
        "Daily news that matters—no fluff, just fact"
    ];

    return (
        <section id="what" className={styles.featuresSection}>
            <div className={styles.contentContainer}>
                {/* Left Side - Text Content */}
                <div className={styles.leftContent}>
                    <p className={styles.description}>
                        India's first WhatsApp community built exclusively for manufacturers. Get 20 qualified leads delivered monthly—plus live market intel, competitor insights, and daily industry updates.
                    </p>

                    {/* Features List */}
                    <div className={styles.featuresList}>
                        {features.map((feature, index) => (
                            <div key={index} className={styles.featureItem}>
                                <div className={styles.checkIcon}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
                                        <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <p className={styles.featureText}>{feature}</p>
                            </div>
                        ))}
                    </div>

                    {/* Join Now Button */}
                    <button className={styles.joinButton}>Join Now</button>
                </div>

                {/* Right Side - Image */}
                <div className={styles.imageContainer}>
                    <Image
                        src="/business-person.png"
                        alt="Business professional"
                        width={600}
                        height={644}
                        className={styles.image}
                        priority
                        unoptimized
                        quality={100}
                    />
                </div>
            </div>
        </section>
    );
}
