import styles from './GeometricLogo.module.css';

export default function GeometricLogo() {
    return (
        <div className={styles.letterform}>
            {/* Letter B */}
            <div className={styles.letterBContainer}>
                <div className={styles.bWhite}></div>
                <div className={styles.bGray}></div>
                <div className={styles.rect7}></div>
                <div className={styles.rect8}></div>
                <div className={styles.rect16}></div>
                <div className={styles.rect14}></div>
                <div className={styles.rect15}></div>
                <div className={styles.rect9}></div>
                <div className={styles.rect23}></div>
                <div className={styles.rect28B}></div>
            </div>

            {/* Letter S */}
            <div className={styles.letterSContainer}>
                <div className={styles.sWhite}></div>
                <div className={styles.sGray}></div>
                <div className={styles.rect12}></div>
                <div className={styles.rect13}></div>
                <div className={styles.rect11}></div>
                <div className={styles.rect28S}></div>
                <div className={styles.rect29}></div>
                <div className={styles.rect25}></div>
                <div className={styles.rect24}></div>
            </div>

            {/* Letter n */}
            <div className={styles.letterNContainer}>
                <div className={styles.nWhite}></div>
                <div className={styles.nGray}></div>
                <div className={styles.rect27}></div>
                <div className={styles.rect26}></div>
            </div>
        </div>
    );
}
