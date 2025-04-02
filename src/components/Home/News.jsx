import styles from './home.module.css';
import news1 from "../assets/womanAndChildrens.png";
import news2 from "../assets/person2.png";
import news3 from "../assets/cameraMan.png";
import news4 from "../assets/person3.png";
import news5 from "../assets/woman.png";
import news6 from "../assets/person4.png";

const News = () => {
    return (
        <div className={styles.newsContainer}>
            <div className={styles.newsTitleContainer}>
                <h1 className={styles.newsTitle}>Նորություններ</h1>
                <h2 className={styles.newsSubtitle}>Պատմություններ համալսարանում մարդկանց, հետազոտությունների և նորարարությունների մասին</h2>
            </div>

            {/* News Images Section */}
            <div className={styles.newsImages}>
                {/* Top Row */}
                <div className={styles.newsImagesTop}>
                    <div className={styles.newsLargeImageContainer}>
                        <img src={news1} alt="News 1" className={styles.newsLargeImage} />
                        <div className={styles.newsLargeContent}>
                            <p className={styles.newsLargeTitle}>Առողջություն և բժշկություն</p>
                            <p className={styles.newsLargeDescription}>
                                Գործարկում է կենտրոն, որը կենտրոնացած է մարդկանց և մոլորակների առողջության վրա
                            </p>
                        </div>
                    </div>
                    <div className={styles.newsSmallImageContainer}>
                        <img src={news2} alt="News 2" className={styles.newsImageSmall} />
                        <div className={styles.newsSmallContent}>
                            <p className={styles.newsSmallTitle}>Օրենք</p>
                            <p className={styles.newsSmallDescription}>
                                Նեյթ Պերսիլիի ընտրական պատմության մինի
                            </p>
                        </div>
                    </div>
                    <div className={styles.newsSmallImageContainer}>
                        <img src={news3} alt="News 3" className={styles.newsImageSmall} />
                        <div className={styles.newsSmallContent}>
                            <p className={styles.newsSmallTitle}>Օրենք</p>
                            <p className={styles.newsSmallDescription}>
                                Նեյթ Պերսիլիի ընտրական պատմության մինի
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Row */}
                <div className={styles.newsImagesBottom}>
                    <div className={styles.newsSmallImageContainer}>
                        <img src={news4} alt="News 4" className={styles.newsImageSmall} />
                        <div className={styles.newsSmallContent}>
                            <p className={styles.newsSmallTitle}>Օրենք</p>
                            <p className={styles.newsSmallDescription}>
                                Նեյթ Պերսիլիի ընտրական պատմության մինի
                            </p>
                        </div>
                    </div>
                    <div className={styles.newsSmallImageContainer}>
                        <img src={news5} alt="News 5" className={styles.newsImageSmall} />
                        <div className={styles.newsSmallContent}>
                            <p className={styles.newsSmallTitle}>Օրենք</p>
                            <p className={styles.newsSmallDescription}>
                                Նեյթ Պերսիլիի ընտրական պատմության մինի
                            </p>
                        </div>
                    </div>
                    <div className={styles.newsLargeImageContainer}>
                        <img src={news6} alt="News 6" className={styles.newsImageLarge} />
                        <div className={styles.newsLargeContent}>
                            <p className={styles.newsLargeTitle}>Առողջություն և բժշկություն</p>
                            <p className={styles.newsLargeDescription}>
                                Գործարկում է կենտրոն, որը կենտրոնացած է մարդկանց և մոլորակների առողջության վրա
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Button Section */}
            <button className={styles.newsButton}>Լրացուցիչ նորություններ</button>
        </div>
    );
};

export default News;
