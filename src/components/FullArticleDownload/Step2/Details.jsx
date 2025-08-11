import React from 'react';
import styles from './details.module.css';
import calendar from "@/components/assets/calendar_today.png";
import styleText from '../../assets/styleText.png';

const Details = ({onPrev,onNext}) => {
    return (
        <div className={styles.container}>
            <div className={styles.section}>
                <div className={styles.subSection}>
                    <h2 className={styles.title}>Հոդվածի վերնագիր</h2>
                    <div className={styles.languageBlock}>
                        <div className={styles.languageTop}>
                            <img src={styleText} alt="Style Text"/>
                        </div>
                        <div
                            className={styles.languageInput}
                            contentEditable={true}
                            suppressContentEditableWarning={true}
                            spellCheck={false}
                        />
                    </div>
                </div>

                <div className={styles.rowFlex}>
                    <div className={styles.columnFlex} style={{ width: 148 }}>
                        <div className={styles.smallText}>Լեզու՝ PDF-ի լեզուն: Օրինակ՝ English</div>
                        <div className={styles.dropdown}>
                            <div className={styles.dropdownContent}>
                                <div className={styles.dropdownText}>Անգլերեն
                                    <div>⌄</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.columnFlex} style={{ width: 229 }}>
                        <div className={styles.smallText}>Ամսաթիվ՝ հոդվածի գրության օրը (օր.՝ mm/dd/yyyy):</div>
                        <div className={styles.dropdown}>
                            <div className={styles.dropdownContent}>
                                <div className={styles.dropdownText}>mm / dd / yyyy
                                    <img src= {calendar} alt="Calendar"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.subSection}>
                    <h2 className={styles.title}>Հիմնաբառեր</h2>
                    <div className={styles.keywordsInstruction}>
                        Հիմնաբառ ավելացնելու համար մուտքագրեք բառը և սեղմեք՝{' '}
                        <span className={styles.keywordsUnderline}>Ավելացնել</span>։
                    </div>
                    <input className={styles.inputContainer}
                            placeholder="Մուտքագրեք հիմնաբառերը"
                    />
                </div>

                <div className={styles.section}>
                    <div className={styles.subSection}>
                        <h2 className={styles.title}>Հրապարակման մանրամասներ՝ ձեռագրի նույնականացման համար</h2>
                        <div className={styles.description}>
                            Եթե ձեր հոդվածն արդեն ունի DOI (թվային նույնականացման համար), մուտքագրեք այն:
                        </div>
                        <input className={styles.inputContainer}
                               placeholder="Ավելացնել նոր մանրամասներ"
                        />
                    </div>

                    <div
                        className={styles.button}
                        style={{
                            width: 150,
                            height: 40,
                            padding: 8,
                            borderRadius: 8,
                            outline: '1px #004DE5 solid',
                            outlineOffset: '-1px',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: 8,
                            display: 'inline-flex',
                            color: '#004DE5',
                            fontWeight: 500,
                        }}
                    >
                        Ավելացնել
                    </div>
                </div>
            </div>

            <div className={styles.buttonsRow}>
                <div className={`${styles.button} ${styles.buttonSecondary}`}>
                    Պահպանել
                </div>
                <div className={`${styles.button} ${styles.buttonSecondary}`} onClick={onPrev}>
                    Նախորդ
                </div>
                <div className={`${styles.button} ${styles.buttonPrimary}`} onClick={onNext}>
                    Հաջորդ
                </div>
            </div>
        </div>
    );
};

export default Details;
