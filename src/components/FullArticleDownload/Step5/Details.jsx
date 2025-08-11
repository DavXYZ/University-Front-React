import React, {useState} from 'react';
import styles from './details.module.css';

export default function Details({onPrev, onNext}) {
    const [isChecked, setIsChecked] = useState(false);

    const toggleCheck = () => {
        setIsChecked(prev => !prev);
    };

    const maxChars = 40000;
    const [text1, setText1] = useState("");
    const [text2, setText2] = useState("");
    const [text3, setText3] = useState("");

    const handleChange = (value, setter) => {
        if (value.length <= maxChars) {
            setter(value);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.leftColumn}>
                <div className={styles.stepSection}>
                    <div className={styles.stepTitle}>
                        Քայլ 5: Հետազոտական ամբողջականության հստակեցում
                    </div>
                    <div className={styles.stepSubtitle}>
                        Շահերի մասին հայտարարություն
                    </div>
                    <div className={styles.stepDescription}>
                        Բոլոր հեղինակները պետք է հակիրճ ներկայացնեն որևէ անձնական կամ ֆինանսական
                        հարաբերություն այլ անձանց կամ կազմակերպությունների հետ, որոնք կարող են ազդել
                        կամ դիտարկվել որպես ազդող իրենց ուսումնասիրության վրա:
                    </div>
                </div>
            </div>

            <div className={styles.rightColumn}>
                {/* Շահերի հայտարարագիր */}
                <div className={styles.declarationSection}>
                    <div className={styles.declarationTitleWrapper}>
                        <span className={styles.declarationTitle}>Շահերի հայտարարագիր</span>
                        <span className={styles.declarationOptional}>(ըստ ցանկության)</span>
                    </div>
                    <div className={styles.textareaWrapper}>
                        <textarea className={styles.textarea}
                                  value={text1}
                                  onChange={(e) => handleChange(e.target.value, setText1)} />
                        <div className={styles.checkbox} />
                    </div>
                    <div className={styles.charCount}>{text1.length}/{maxChars}</div>
                </div>

                {/* Ֆինանսավորման հայտարարություն */}
                <div className={styles.declarationSection}>
                    <div className={styles.declarationTitle}>Ֆինանսավորման հայտարարություն</div>
                    <div className={styles.declarationContent}>
                        <div className={styles.declarationDescription}>
                            Հակիրճ նշեք, թե ով կամ ինչն է ֆինանսավորել հետազոտությունը:
                        </div>
                        <div className={styles.declarationTitleWrapper}>
                            <span className={styles.declarationTitle}>Ֆինանսավորում </span>
                            <span className={styles.declarationOptional}>(ըստ ցանկության)</span>
                        </div>
                        <div className={styles.textareaWrapper}>
                            <textarea className={styles.textarea}
                                      value={text2}
                                      onChange={(e) => handleChange(e.target.value, setText2)} />
                            <div className={styles.checkbox} />
                        </div>
                    </div>
                    <div className={styles.charCount}>{text2.length}/{maxChars}</div>
                </div>

                {/* Էթիկայի հաստատման հայտարարություն */}
                <div className={styles.declarationSection}>
                    <div className={styles.declarationTitle}>Էթիկայի հաստատման հայտարարություն</div>
                    <div className={styles.declarationContent}>
                        <div className={styles.declarationDescription}>
                            Եթե ուսումնասիրությունները ներառում են հիվանդներ/մասնակիցներ, ապա պետք է տրվի
                            էթիկայի հաստատում: Մասնավոր դեպքերի ուսումնասիրությունների համար բավարար է
                            գրավոր համաձայնությունը: Խնդրում ենք ներկայացնել համապատասխան հայտարարությունը:
                        </div>
                        <div className={styles.declarationTitleWrapper}>
                            <span className={styles.declarationTitle}>Էթիկայի հաստատում </span>
                            <span className={styles.declarationOptional}>(ըստ ցանկության)</span>
                        </div>
                        <div className={styles.textareaWrapper}>
                            <textarea className={styles.textarea}
                                      value={text3}
                                      onChange={(e) => handleChange(e.target.value, setText3)} />
                            <div className={styles.checkbox} />
                        </div>
                    </div>
                    <div className={styles.charCount}>{text3.length}/{maxChars}</div>
                </div>

                {/* Պայմաններ և դրույթներ */}
                <div className={styles.termsSection}>
                    <div className={styles.termsTitle}>Պայմաններ և դրույթներ</div>
                    <div className={styles.termsText}>
                        ԾԱՆՈԹԱԳՐՈՒԹՅՈՒՆ. Դուք չեք փոխանցում հեղինակային իրավունքը որևէ փաստաթղթի,
                        որը տեղադրում եք SSRN-ում: Փոխարենը, դուք տրամադրում եք SSRN-ին ոչ-էքսկլյուզիվ
                        իրավունք տեղադրել և տարածել ձեր աշխատանքը՝ համաձայն ՀՏՀ-ի «SSRN-ի ապրանքներ
                        և ծառայություններ» բաժնի: Դուք կարող եք ցանկացած պահի հեռացնել ձեր
                        աշխատանքը SSRN-ից:
                        <br />
                        Տրամադրելով նյութ SSRN-ին և ընդունելով մեր Օգտագործման պայմանները, դուք
                        հաստատում եք, որ ձեր նյութը չի խախտում այլ կողմերի հեղինակային կամ այլ
                        սեփականության իրավունքներ: Դուք կարող եք հրապարակել ձեր աշխատանքը SSRN-ում,
                        եթե դուք եք հեղինակային իրավունքի սեփականատերը, ունեք սեփականատիրոջ
                        թույլտվությունը կամ հրապարակչի քաղաքականությամբ թույլատրված է այն:
                    </div>
                    <div className={styles.termsCheckboxWrapper}>
                        <div
                            className={`${styles.termsCheckboxIconPrimary} ${isChecked ? styles.checked : ''}`}
                            onClick={toggleCheck}
                            role="checkbox"
                            aria-checked={isChecked}
                            tabIndex={0}
                            onKeyDown={(e) => e.key === 'Enter' && toggleCheck()}
                        />
                        <div className={styles.termsCheckboxTextWrapper}>
                            <div className={styles.termsCheckboxText}>
                                Ես վերանայել եմ բոլոր ֆայլերը, որոնք վերբեռնում եմ, և ունեմ դրանք
                                վերբեռնելու իրավունք: Ես կարդացել և համաձայն եմ SSRN-ի Պայմաններին և
                                դրույթներին:
                            </div>
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className={styles.buttonsRow}>
                    <button className={styles.saveButton}>Պահպանել</button>
                    <button className={styles.prevButton} onClick={onPrev}>Նախորդ</button>
                    <button className={styles.nextButton} onClick={onNext}>Հաջորդ</button>
                </div>
            </div>
        </div>
    );
}
