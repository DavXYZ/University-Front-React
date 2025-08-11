import React, {useState} from 'react';
import styles from './articleType.module.css';

const ArticleType = ({onNext}) => {
    const [selected, setSelected] = useState(1);
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.authorSection}>
                    <div className={styles.question}>
                        Դուք հեղինա՞կն եք, թե՞ ներկայացնում եք մեկ ուրիշի անունից:
                    </div>
                    <div className={styles.radioGroup}>
                        <div className={styles.radioOption} onClick={() => setSelected(1)}>
                            <div className={selected === 1 ? styles.radioSelected : styles.radioUnselected}>
                                {selected === 1 && <span className={styles.checkmark}>✓</span>}
                            </div>
                            <span>Ես հեղինակն եմ</span>
                        </div>
                        <div className={styles.radioOption} onClick={() => setSelected(2)}>
                            <div className={selected === 2 ? styles.radioSelected : styles.radioUnselected}>
                                {selected === 2 && <span className={styles.checkmark}>✓</span>}
                            </div>
                            <span>Ես ներկայացնում եմ մեկ ուրիշի անունից</span>
                        </div>
                    </div>
                </div>

                <div className={styles.articleSection}>
                    <h3 className={styles.sectionTitle}>Հոդվածի տեսակը</h3>
                    <p className={styles.sectionSubtitle}>
                        Խնդրում ենք նշել ստորև՝ ըստ աշխատանքի բնույթի։
                    </p>
                    <div className={styles.dropdown}>
                        <span>Ընտրել</span>
                        <div className={styles.dropdownArrow}>⌄</div>
                    </div>
                </div>

                <div className={styles.contentTypeSection}>
                    <h3 className={styles.sectionTitle}>Բովանդակության տեսակ</h3>
                    <p className={styles.sectionDescription}>
                        Ի՞նչ կարգավիճակում է ձեր ներկայացվող հետազոտությունը՝ նախապես տպագրված է,
                        հրապարակված հոդված է, թե այլ բան: Խնդրում ենք նշել ստորև գտնվող բացվող ցանկում։
                    </p>
                    <div className={styles.dropdown}>
                        <span>Ընտրել</span>
                        <div className={styles.dropdownArrow}>⌄</div>
                    </div>
                </div>
            </div>

            <div className={styles.buttons}>
                <button className={styles.secondaryButton}>Պահպանել</button>
                <button className={styles.primaryButton} onClick={onNext}>Հաջորդ</button>
            </div>
        </div>
    );
};

export default ArticleType;