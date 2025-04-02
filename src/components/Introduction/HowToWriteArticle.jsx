import styles from './introduction.module.css';

const HowToWriteArticle = () => {
    return (
        <div className={styles.howToContainer}>
            <div className={styles.howToWriteContent}>
                <div className={styles.howToTextContent}>
                    <h2 className={styles.howToTitle}>Ինչ է հոդվածը Ովքեր կարող են գրել!</h2>
                    <p className={styles.howToDescription}>
                        Հոդվածը գրավոր ստեղծագործություն է, որը ուղղված է լայն լսարանի, և հաճախ հրապարակվում է թերթերում, ամսագրերում կամ հանդեսներում: Հոդված գրելու հիմնական նպատակն է ուշադրություն հրավիրել հատուկ թեմաների վրա և ազդել ընթերցողների վրա։
                    </p>
                </div>
                <div className={styles.howToImageContainer}>
                    <div className={styles.howToImage}></div>
                </div>
            </div>
        </div>
    );
};

export default HowToWriteArticle;
