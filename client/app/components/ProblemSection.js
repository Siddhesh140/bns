import styles from './ProblemSection.module.css';
import Image from 'next/image';

export default function ProblemSection() {
    const problems = [
        {
            title: "EXHIBITIONS?",
            description: "₹2 lakhs spent. 500 handshakes. 3 serious buyers. Maybe.",
            image: "/exhibitions.png",
            alt: "Crowded exhibition hall"
        },
        {
            title: "YOUR WEBSITE?",
            description: "Last inquiry: 6 weeks ago. Subject: \"Can you make plastic toys?\" (You manufacture industrial pumps.)",
            image: "/website.png",
            alt: "Business website on monitor"
        },
        {
            title: "COLD CALLING?",
            description: "100 calls. 80 don't answer. 15 ghost you. 5 waste your time.",
            image: "/cold-calling.png",
            alt: "Frustrated person making calls"
        },
        {
            title: "ONLINE LEADS?",
            description: "Half spam. Half \"students doing project work.\"",
            image: "/online-leads.png",
            alt: "Video conference call"
        }
    ];

    return (
        <section className={styles.problemSection}>
            {/* Header */}
            <div className={styles.header}>
                <h2 className={styles.mainHeading}>
                    Your Factory Runs Like Clockwork.<br />Your Lead Pipeline? Not So Much.
                </h2>
                <p className={styles.subHeading}>Let's be honest:</p>
            </div>

            {/* Problem Grid */}
            <div className={styles.gridContainer}>
                {/* Row 1 */}
                <div className={styles.row}>
                    <div className={styles.card}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src={problems[0].image}
                                alt={problems[0].alt}
                                fill
                                className={styles.cardImage}
                                unoptimized
                                quality={100}
                            />
                        </div>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>{problems[0].title}</h3>
                            <p className={styles.cardDescription}>{problems[0].description}</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src={problems[1].image}
                                alt={problems[1].alt}
                                fill
                                className={styles.cardImage}
                            />
                        </div>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>{problems[1].title}</h3>
                            <p className={styles.cardDescription}>{problems[1].description}</p>
                        </div>
                    </div>
                </div>

                {/* Row 2 */}
                <div className={styles.row}>
                    <div className={styles.card}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src={problems[2].image}
                                alt={problems[2].alt}
                                fill
                                className={styles.cardImage}
                            />
                        </div>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>{problems[2].title}</h3>
                            <p className={styles.cardDescription}>{problems[2].description}</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src={problems[3].image}
                                alt={problems[3].alt}
                                fill
                                className={styles.cardImage}
                            />
                        </div>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>{problems[3].title}</h3>
                            <p className={styles.cardDescription}>{problems[3].description}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className={styles.footer}>
                <p className={styles.footerText}>
                    You don't have a production problem. You have a consistent lead-flow problem.
                </p>
                <p className={styles.footerSubText}>
                    We built something simple: A WhatsApp community where qualified leads land in your phone every month— no exhibitions, no cold calls, no wasted time.
                </p>
            </div>

            {/* Fade Overlay */}
            <div className={styles.fadeOverlay}></div>
        </section>
    );
}
