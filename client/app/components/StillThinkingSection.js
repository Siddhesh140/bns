import styles from './StillThinkingSection.module.css';

export default function StillThinkingSection() {
    return (
        <section className={styles.section}>
            <div className={styles.contentWrapper}>
                <div className={styles.textContainer}>
                    <h2 className={styles.heading}>Still thinking?</h2>
                    <p className={styles.subHeading}>Book a 10-Minute Call</p>
                </div>

                <button className={styles.bookButton}>
                    <span className={styles.bookButtonText}>BOOK NOW</span>
                </button>
            </div>
        </section>
    );
}
