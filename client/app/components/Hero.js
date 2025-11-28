import styles from './Hero.module.css';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className={styles.hero}>
            {/* Background Rectangle */}
            {/* Background Image */}
            <div className={styles.background}>
                <Image
                    src="/hero-background.png"
                    alt="Hero Background"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                    unoptimized
                    quality={100}
                />
            </div>

            {/* Gradient Ellipses */}
            <div className={styles.ellipse29}></div>
            <div className={styles.ellipse31}></div>
            <div className={styles.ellipse28}></div>
            <div className={styles.ellipse30}></div>

            {/* Vector Gradients */}
            <div className={styles.vector109}></div>
            <div className={styles.vector112}></div>
            <div className={styles.vector111}></div>

            {/* Noise Texture */}
            <div className={styles.noiseTexture}></div>

            {/* Content Frame */}
            <div className={styles.contentFrame}>
                <h1 className={styles.mainHeading}>
                    Stop Chasing Leads.<br />Let Them Come to You.
                </h1>
                <p className={styles.subHeading}>
                    Join India's first WhatsApp community built exclusively for manufacturers who are tired of cold calls that go nowhere.
                </p>
            </div>
            {/* Fade Overlay */}
            <div className={styles.fadeOverlay}></div>
        </section>
    );
}
