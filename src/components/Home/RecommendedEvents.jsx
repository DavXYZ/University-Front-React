import styles from './home.module.css'; // Import your CSS module
import star from "../assets/starIcon.svg";
import pinDrop from "../assets/pin_drop.png";
import earlyOn from "../assets/early_on.svg";
import dvr from "../assets/dvr.svg";

function RecommendedEvents() {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.frame}>
                <img src={star} alt="Logo" />
                <div className={styles.text}>Առաջարկվող Իրադարձություններ</div>
            </div>
            <div className={styles.frame}>
                <img src={earlyOn} alt="Logo" />
                <div className={styles.text}>Այսօրվա Իրադարձություններ</div>
            </div>
            <div className={styles.frame}>
                <img src={dvr} alt="Logo" />
                <div className={styles.text}>Իրադարձություններ ըստ բաժինների</div>
            </div>
            <div className={styles.frame}>
                <img src={pinDrop} alt="Logo" />
                <div className={styles.text}>Իրադարձություններ ըստ վայրերի</div>
            </div>
        </div>
    );
}

export default RecommendedEvents;
