import styles from './Navbar.module.css';
import Image from 'next/image';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navContainer}>
                {/* Logo */}
                <div className={styles.logoContainer}>
                    <a href="/">
                        <Image
                            src="/logo-new.png"
                            alt="BNS Logo"
                            width={46}
                            height={24}
                            className={styles.logo}
                            priority
                            unoptimized
                            quality={100}
                        />
                    </a>
                </div>

                {/* Right Side: Navigation Links + Join Button */}
                <div className={styles.rightSection}>
                    <div className={styles.navLinks}>
                        <a href="#what" className={styles.navLink}>WHAT</a>
                        <a href="#how" className={styles.navLink}>HOW</a>
                        <a href="#who" className={styles.navLink}>WHO</a>
                        <a href="#why" className={styles.navLink}>WHY</a>
                    </div>
                    <button className={styles.joinButton}>JOIN</button>
                </div>
            </div>
        </nav>
    );
}
