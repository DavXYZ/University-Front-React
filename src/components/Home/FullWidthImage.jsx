import styles from './home.module.css';

function FullWidthImage() {
    return (
        <div className={styles.imageContainer}>
            <div className={styles.textContainer}>
                <div className={styles.text}>
                    <h2>Begin Human Festival 6-27 Նոյեմբեր</h2>
                    <p>Բացիր Մարդկայնության Դռները</p>
                </div>
                <button className={styles.actionButton}>Գրանցվիր Հիմա  →</button>
            </div>
        </div>
    );
}

export default FullWidthImage;
