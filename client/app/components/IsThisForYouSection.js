import styles from './IsThisForYouSection.module.css';

export default function IsThisForYouSection() {
    const perfectForYouItems = [
        "Manufacture industrial products (machines, components, OEM parts, tools)",
        "Want leads you can actually call, not just website traffic",
        "Will follow up and close deals yourself",
        "Want market insights before everyone else"
    ];

    const notForYouItems = [
        "Expect automated sales while you sleep",
        "Won't talk to buyers because you're \"too busy\"",
        "Think our subscription is \"too expensive\" for 20 qualified leads",
        "Plan to spam the group (we'll kick you out)"
    ];

    return (
        <section id="who" className={styles.section}>
            <h2 className={styles.heading}>Is This For You?</h2>

            <div className={styles.contentWrapper}>
                {/* Perfect If You Column */}
                <div className={styles.perfectColumn}>
                    <div className={styles.columnHeader}>
                        <h3 className={styles.perfectHeading}>Perfect If You</h3>
                    </div>
                    <div className={styles.listContainer}>
                        {perfectForYouItems.map((item, index) => (
                            <div key={index} className={styles.listItem}>
                                <div className={styles.iconWrapper}>
                                    {/* Check Icon */}
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="16" cy="16" r="12" fill="#0F0F0F" />
                                        <path d="M9 16L14 21L23 11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <p className={styles.listTextDark}>{item}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Not For You If You Column */}
                <div className={styles.notForYouColumn}>
                    <div className={styles.columnHeader}>
                        <h3 className={styles.notForYouHeading}>Not For You If You</h3>
                    </div>
                    <div className={styles.listContainer}>
                        {notForYouItems.map((item, index) => (
                            <div key={index} className={styles.listItem}>
                                <div className={styles.iconWrapper}>
                                    {/* Cross Icon with White Background */}
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="16" cy="16" r="12" fill="#FFFFFF" />
                                        <path d="M10 10L22 22M10 22L22 10" stroke="#0F0F0F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <p className={styles.listTextLight}>{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
