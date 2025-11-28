import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            {/* Left Column - Branding */}
            <div className={styles.leftColumn}>
                <div className={styles.logoSection}>
                    {/* Logo */}
                    <div className={styles.logoContainer}>
                        <a href="/">
                            <Image
                                src="/logo-new.png"
                                alt="BNS Logo"
                                width={46}
                                height={24}
                                priority
                                unoptimized
                                quality={100}
                            />
                        </a>
                    </div>

                    <div className={styles.brandTextContainer}>
                        <h3 className={styles.brandName}>Manufacturing Community</h3>
                        <p className={styles.brandDescription}>India's first WhatsApp community built exclusively for manufacturers.</p>
                    </div>
                </div>
            </div>

            {/* Right Column - Links & Contact */}
            <div className={styles.rightColumn}>
                {/* Social Media */}
                <div className={styles.socialColumn}>
                    <h4 className={styles.columnHeader}>SOCIAL MEDIA</h4>
                    <div className={styles.linksList}>
                        <a href="https://www.instagram.com/bigvision2025/" target="_blank" rel="noopener noreferrer" className={styles.linkItem}>
                            <div className={styles.iconWrapper}>
                                {/* Instagram Icon */}
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" />
                                    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
                                    <circle cx="18" cy="6" r="1" fill="currentColor" />
                                </svg>
                            </div>
                            <span className={styles.linkText}>@bigvision</span>
                        </a>

                        <a href="https://www.linkedin.com/company/bigvision-consulting-marketing/" target="_blank" rel="noopener noreferrer" className={styles.linkItem}>
                            <div className={styles.iconWrapper}>
                                {/* LinkedIn Icon */}
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <span className={styles.linkText}>@bigvision</span>
                        </a>

                        <a href="#" className={styles.linkItem}>
                            <div className={styles.iconWrapper}>
                                {/* X (Twitter) Icon */}
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 4L9.17333 12L4 20H8.5L11.5 15.5L15.5 20H20L14.8267 12L20 4H15.5L12.5 8.5L8.5 4H4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <span className={styles.linkText}>@bigvision</span>
                        </a>

                        <a href="#" className={styles.linkItem}>
                            <div className={styles.iconWrapper}>
                                {/* Facebook Icon */}
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <span className={styles.linkText}>@bigvision</span>
                        </a>
                    </div>
                </div>

                {/* Contact */}
                <div className={styles.contactColumn}>
                    <h4 className={styles.columnHeader}>CONTACT</h4>
                    <div className={styles.linksList}>
                        <div className={styles.linkItem}>
                            <div className={styles.iconWrapper}>
                                {/* Mail Icon */}
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <span className={styles.linkText}>contact@bigvision.com</span>
                        </div>

                        <div className={styles.linkItem}>
                            <div className={styles.iconWrapper}>
                                {/* Phone Icon */}
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 16.92V19.92C22.0011 20.1986 21.9441 20.4742 21.8325 20.7294C21.7209 20.9846 21.5573 21.2137 21.3521 21.4019C21.1468 21.5901 20.9046 21.733 20.6411 21.8212C20.3776 21.9093 20.0987 21.9409 19.823 21.913C16.7667 21.5806 13.8299 20.5361 11.23 18.86C8.81373 17.2885 6.78196 15.2568 5.21001 12.84C3.53392 10.2401 2.48937 7.30332 2.15701 4.247C2.12915 3.97133 2.16073 3.69237 2.24891 3.42887C2.33709 3.16537 2.47995 2.92317 2.66815 2.71791C2.85635 2.51265 3.08546 2.34905 3.34065 2.23746C3.59584 2.12587 3.87144 2.0689 4.15001 2.07H7.15001C7.63666 2.06713 8.10659 2.24354 8.47271 2.56667C8.83883 2.8898 9.07817 3.33912 9.14601 3.83C9.27214 4.78657 9.5065 5.72506 9.84001 6.63C9.94631 6.91689 9.96919 7.22687 9.90615 7.52627C9.84311 7.82567 9.69655 8.10298 9.48201 8.328L7.74001 10.07C9.69383 13.5118 12.5582 16.3762 16 18.33L17.74 16.588C17.965 16.3735 18.2423 16.2269 18.5417 16.1639C18.8411 16.1008 19.1511 16.1237 19.438 16.23C20.3429 16.5635 21.2814 16.7979 22.238 16.924C22.7302 16.9921 23.1805 17.2325 23.5039 17.5997C23.8273 17.9669 24.0032 18.4381 24 18.926V21.926" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <span className={styles.linkText}>+91 95796 62005</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
