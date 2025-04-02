import styles from './home.module.css';
import clima from "../assets/clima.png";

function Articles() {
    return (
        <div className={styles.articles}>
            <div className={styles.articlesLeft}>
                <h2 className={styles.articlesTitle}>Հետազոտական հոդվածներ</h2>
                <p className={styles.articlesDescription}>
                    UvA-ն Եվրոպայի առաջատար հետազոտական համալսարաններից մեկն է: Մենք
                    կատարում ենք կարևոր հետազոտություններ՝ կապելով գիտական
                    հետազոտությունները
                    հասարակության մարտահրավերներին:
                </p>
            </div>
            
            <div className={styles.articleImage}>
                <img src={clima} alt="Research" className={styles.researchImage} />
                <div className={styles.imageTitle}>Կլիմայի ինստիտուտ</div>
            </div>

            <div className={styles.articlesRight}>
                <div className={`${styles.articleButton} ${styles.red}`}>
                    <span>Հետազոտություն</span>
                    <span className={styles.arrow}>➔</span>
                </div>
                <div className={`${styles.articleButton} ${styles.red}`}>
                    <span>Հետազոտություն</span>
                    <span className={styles.arrow}>➔</span>
                </div>
                <div className={`${styles.articleButton} ${styles.dark}`}>
                    <span>Հետազոտություն</span>
                    <span className={styles.arrow}>➔</span>
                </div>
            </div>
        </div>
    );
};

export default Articles;
