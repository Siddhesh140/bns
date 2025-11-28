import styles from './WhatYouGetSection.module.css';
import Image from 'next/image';

export default function WhatYouGetSection() {
    const items = [
        {
            id: "01",
            title: "20 Qualified Leads Every Month - Guaranteed",
            subtitle: "Real decision-makers who need what you make:",
            description: "Buyers actively searching for suppliers\nCompanies seeking OEM partners\nDistributors scouting products\nProjects with actual budgets",
            footer: "Convert just ONE lead, you've made all of your money back which you invested. Everything after? Pure profit.",
            image: "/quality-work.png",
            alt: "Quality Work Illustration",
            imagePosition: "left"
        },
        {
            id: "02",
            title: "Know What Your Competitors Are Doing",
            subtitle: "We track performance across manufacturing categories:",
            description: "Which products are getting bombarded with inquiries\nWhich regions are buying like crazy\nWhat's trending up vs. dying down\nWhere demand is exploding",
            footer: "Example: \"This month, automotive component suppliers got 40% more inquiries, mostly from Pune and Coimbatore.\"",
            image: "/ambition.png",
            alt: "Ambition Illustration",
            imagePosition: "right"
        },
        {
            id: "03",
            title: "Daily Updates That Actually Matter",
            subtitle: "Manufacturing news that affects your bottom line\nGovernment schemes and subsidies\nUpcoming expos worth attending\nNew projects and tenders",
            description: "", // Merged into subtitle based on design
            footer: "No algorithms. No ads. No \"5 leadership lessons from Steve Jobs.\"",
            image: "/scrolling.png",
            alt: "Scrolling Illustration",
            imagePosition: "left"
        },
        {
            id: "04",
            title: "A Network That Actually Works",
            subtitle: "Verified community of:",
            description: "Manufacturing company owners\nProduction managers\nSerious buyers and distributors\nIndustry veterans",
            footer: "No spam. No \"Good morning\" GIFs. Just real business connections.",
            image: "/network.png",
            alt: "Network Illustration",
            imagePosition: "right"
        }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <h2 className={styles.mainHeading}>What You Actually Get</h2>
            </div>

            <div className={styles.itemsContainer}>
                {items.map((item, index) => (
                    <div key={index} className={`${styles.itemRow} ${item.imagePosition === 'right' ? styles.rowReverse : ''}`}>
                        {/* Image Side */}
                        <div className={styles.imageContainer}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={item.image}
                                    alt={item.alt}
                                    fill
                                    className={styles.image}
                                    unoptimized
                                    quality={100}
                                />
                            </div>
                        </div>

                        {/* Text Side */}
                        <div className={styles.textContainer}>
                            <div className={styles.textContent}>
                                <h3 className={styles.itemTitle}>{item.title}</h3>
                                {item.subtitle && <p className={styles.itemSubtitle}>{item.subtitle}</p>}
                                {item.description && (
                                    <p className={styles.itemDescription}>
                                        {item.description.split('\n').map((line, i) => (
                                            <span key={i} className={styles.descriptionLine}>{line}<br /></span>
                                        ))}
                                    </p>
                                )}
                                {item.footer && <p className={styles.itemFooter}>{item.footer}</p>}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
