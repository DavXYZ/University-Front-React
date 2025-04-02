import styles from './common.module.css'; 

const LearnMore = () => {
    return (
        <div className={styles.learnMoreContainer}>
            <div className={styles.learnMoreContent}>
                <h1 className={styles.learnMoreTitle}>Իմացեք ավելին</h1>
                <div className={styles.learnMoreLinks}>
                    <div className={styles.learnMoreLink}>
                        <span>Բակալավրիատ հետազոտություն</span>
                    </div>
                    <div className={styles.learnMoreLink}>
                        <span>Հետդիպլոմային հետազոտություններ</span>
                    </div>
                    <div className={styles.learnMoreLink}>
                        <span>Գտեք հետազոտող</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LearnMore;
