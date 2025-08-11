import React from 'react';
import styles from './details.module.css';
import cancel from '../../assets/cancel.png';

export default function Details({onNext, onPrev}) {
    return (
        <div className={styles.container}>
            {/* Header */}
            <div className={styles.headerWrapper}>
                <div className={styles.headerContent}>
                    <div className={styles.stepTitle}>Քայլ 3: Հեղինակի տվյալներ</div>
                    <div className={styles.sectionSubtitle}>Հեղինակներ</div>
                    <div className={styles.sectionDescription}>
                        Խնդրում ենք ավելացնել բոլոր այն հեղինակներին, ովքեր մասնակցել են ձեր հոդվածի պատրաստմանը,
                        ինչպես նաև նրանց աշխատանքային կազմակերպությունները: Եթե հեղինակները մեր տվյալների
                        բազայում չկան, կարող եք նրանց ավելացնել:
                    </div>
                </div>
            </div>

            {/* Author card */}
            <div className={styles.authorCardWrapper}>
                <div className={styles.authorCard}>
                    <div className={styles.authorCardContent}>
                        <div className={styles.authorName}>Անուն Ազգանուն</div>
                        <div className={styles.authorDetails}>
                            <div>
                                SSRN -ին պատկանելություն չի տրամադրում<br />
                                <strong>Էլ փոստ՝</strong> help@gmail.com<br />
                                <strong>ORCID.</strong> ORCID -ը չի տրամադրվել SSRN -ին
                            </div>
                            <div>
                                <strong>Փոխկապակցված դեր․</strong> դերը չի<br />տրամադրվել SSRN -ին<br />
                                <strong>Դերը՝</strong> Կապ Հեղինակ
                            </div>
                        </div>
                    </div>
                    <img src={cancel} alt="Cancel" />
                </div>
            </div>

            {/* Search Section */}
            <div className={styles.searchSectionWrapper}>
                <div className={styles.searchSection}>
                    <div className={styles.searchHeader}>
                        <div className={styles.addAuthorTitle}>Ավելացնել հեղինակներ</div>
                        <div className={styles.searchLabel}>Հեղինակի որոնում</div>

                        <div className={styles.searchInputs}>
                            <input className={styles.searchBox}
                                placeholder= "Մուտքագրեք էլ․ հասցեն, անունը կամ ORCID"
                            />
                            <div className={styles.previousCoauthors}>
                                Նախորդ համահեղինակներ՝ 0։
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.addAuthorWrapper}>
                <div className={styles.addAuthorBtn}>Ավելացնել նոր հեղինակ</div>
            </div>

            <div className={styles.footerButtons}>
                <div className={styles.btnPrimaryOutline}>Պահպանել</div>
                <div className={styles.btnSecondary} onClick={onPrev}>Նախորդ</div>
                <div className={styles.btnNext} onClick={onNext}>Հաջորդ</div>
            </div>
        </div>
    );
}
