import styles from './HowItWorksSection.module.css';

export default function HowItWorksSection() {
    const steps = [
        {
            id: 1,
            text: "Join – Costs less than a team dinner or a client lunch."
        },
        {
            id: 2,
            text: "Get Added – Within 24 hours after verification."
        },
        {
            id: 3,
            text: "Leads Start Flowing – First leads arrive within a week."
        },
        {
            id: 4,
            text: "Track What's Hot – Monthly data shows industry trends."
        },
        {
            id: 5,
            text: "Grow Smarter – Network, learn, spot opportunities early."
        }
    ];

    return (
        <section id="how" className={styles.section}>
            <h2 className={styles.heading}>How this works</h2>

            <div className={styles.contentWrapper}>
                <div className={styles.stepsContainer}>
                    <div className={styles.stepsList}>
                        {steps.map((step) => (
                            <div key={step.id} className={styles.stepItem}>
                                <div className={styles.numberCircle}>
                                    <span className={styles.number}>{step.id}</span>
                                </div>
                                <p className={styles.stepText}>{step.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
