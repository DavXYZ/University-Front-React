import styles from './home.module.css'; // Import your CSS module
import globus from "../assets/globus.png";
import lamp from "../assets/lamp.png";
import hand from "../assets/hand.png";
import person from "../assets/person.png";

function ResearchByNumbers() {
    return (
        <div className={styles.researchNumbers}>
            <h2>Հետազոտություն թվերով</h2>
            <div className={styles.numbersGrid}>
                <img src={globus} className={styles.researchImage} alt="Globes" />
                <img src={lamp} className={styles.researchImage} alt="Lamp" />
                <img src={hand} className={styles.researchImage} alt="Hand" />
                <img src={person} className={styles.researchImage} alt="Person" />
                <div className={styles.numberItem}>
                    <h3>53 000</h3>
                    <p>Ուսանողներ</p>
                </div>
                <div className={styles.numberItem}>
                    <h3>3 900</h3>
                    <p>դոկտորական թեկնածուներ</p>
                </div>
                <div className={styles.numberItem}>
                    <h3>3 300</h3>
                    <p>Ուսումնական և գիտահետազոտական անձնակազմ</p>
                </div>
                <div className={styles.numberItem}>
                    <h3>3 100</h3>
                    <p>Վարչական և տեխնիկական անձնակազմ</p>
                </div>
                <div className={styles.numberItem}>
                    <h3>135</h3>
                    <p>Հետազոտական միավորներ</p>
                </div>
                <div className={styles.numberItem}>
                    <h3>23</h3>
                    <p>Դոկտորական դպրոցներ</p>
                </div>
                <div className={styles.numberItem}>
                    <h3>20</h3>
                    <p>Բազմամասնագիտական թեմատիկ ինստիտուտներ</p>
                </div>
                <div className={styles.numberItem}>
                    <h3>12 500</h3>
                    <p>Շրջանավարտներն ակտիվորեն ներգրավված են մեր ցանցում</p>
                </div>
            </div>
        </div>
    );
}

export default ResearchByNumbers;
