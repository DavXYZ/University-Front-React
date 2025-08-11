import React from 'react';
import styles from './details.module.css';
import bookmarkCheck from '../../assets/bookmark_check.png';
import cancel from '../../assets/cancel.png';
import pen from '../../assets/border_color.png';

export default function Details({onPrev, onSend}) {
    return (
        <div className={styles.container}>
            <div className={styles.leftColumn}>
                <div className={styles.leftColumnInner}>
                    <div className={styles.title}>Քայլ 6: Վերանայում և Ներկայացում</div>
                    <div className={styles.subtitle}>Վերբեռնված ներկայացում</div>
                    <div className={styles.description}>
                        Խնդրում ենք ներբեռնել ձեր հոդվածի PDF կամ Word ֆայլը: Մենք կհավաքագրենք
                        վերնագիրը, ամփոփագիրը և հիմնաբառերը՝ վերանայման համար:
                        <img src={pen} alt="Pen"/>
                    </div>
                </div>
            </div>

            <div className={styles.rightPreviewContainer} data-property-1="Frame 1321317327">
                <div className={styles.rightPreviewInner}>
                    <div className={styles.previewBox}>
                        <div className={styles.previewContent}>
                            <img src={bookmarkCheck} alt="Bookmark Check" />
                            <div className={styles.previewTextContainer}>
                                <div className={styles.previewTextTitle}>Հոդվածը ≥ 95% ինքնատիպ է</div>
                                <div className={styles.previewTextDescription}>
                                    Հոդվածը հաջողությամբ ընդունվեց: Այն համապատասխանում է ինքնատիպության
                                    չափանիշներին
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.articleTypeSection}>
                <div className={styles.articleTypeInner}>
                    <div className={styles.articleTypeTitle}>Հոդվածի տեսակը</div>
                    <div className={styles.articleTypeDescription}>
                        Խնդրում ենք նշել ստորև՝ ըստ աշխատանքի բնույթի։
                        <img src={pen} alt="Pen"/>
                    </div>
                    <div
                        className={styles.articleTypeSelectBox}
                        data-property-1="Frame 1321317048"
                    >
                        <div className={styles.selectBoxContent}>
                            <div className={styles.selectLabel}>Ընտրել</div>
                            <div>⌄</div>
                        </div>
                    </div>
                </div>

                <div className={styles.contentTypeSection}>
                    <div className={styles.contentTypeTitle}>
                        <span className={styles.contentTypeText}>Բովանդակության տեսակ</span>
                        <img src={pen} alt="Pen" />
                    </div>
                    <div className={styles.contentTypeSelectBox}>
                        <div className={styles.selectBoxContent}>
                            <div className={styles.selectLabel}>Ընտրել</div>
                            <div>⌄</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.rightFormSection}>
                <div className={styles.rightFormInner}>
                    <div className={styles.title}>
                        <div>Հոդվածի վերնագիր</div>
                        <img src={pen} alt="Pen"/>
                    </div>
                    <div className={styles.inputBox}>
                        <div className={styles.inputContent}>
                            <div className={styles.inputLabel}>Վերնագիր</div>
                        </div>
                    </div>

                    <div className={styles.languageAndDate}>
                        <div className={styles.languageBox}>
                            <div className={styles.inputLabel}>Լեզու</div>
                            <div className={styles.languageSelect}>
                                <div className={styles.languageText}>Անգլերեն</div>
                                <div>⌄</div>
                            </div>
                        </div>

                        <div className={styles.dateBox}>
                            <div className={styles.inputLabel}>Ամսաթիվ</div>
                            <div className={styles.dateInput}>
                                <div className={styles.dateText}>mm / dd / yyyy</div>
                            </div>
                        </div>
                        <img src={pen} alt="Pen"/>
                    </div>

                    <div className={styles.keywordsSection}>
                        <div className={styles.title}>Հիմնաբառեր
                        <img src={pen} alt="Pen"/>
                        </div>
                        <input
                            type="text"
                            className={styles.inputBox}
                            placeholder="Մուտքագրեք հիմնաբառերը"
                        />
                    </div>

                    <div className={styles.publicationDetailsSection}>
                        <div className={styles.title}>Հրապարակման մանրամասներ՝ ձեռագրի նույնականացման համար
                            <img src={pen} alt="Pen"/>
                        </div>
                        <input
                        type="text"
                        className={styles.inputBox}
                        placeholder="Ավելացնել նոր մանրամասներ"/>
                    </div>

                    <div className={styles.authorsTitle}>Հեղինակներ
                        <img src={pen} alt="Pen"/>
                    </div>
                    <div className={styles.authorsContainer}>
                        <div className={styles.authorCard}>
                            <div className={styles.authorInfo}>
                                <div className={styles.authorName}>Անուն Ազգանուն</div>
                                <div className={styles.authorDetails}>
                                    <div>
                    <span className={styles.detailNormal}>
                      SSRN -ին պատկանելություն չի տրամադրում<br />
                    </span>
                                        <span className={styles.detailBold}>Էլ փոստ՝</span>
                                        <span className={styles.detailNormal}> help@gmail.com<br /></span>
                                        <span className={styles.detailBold}>ORCID.</span>
                                        <span className={styles.detailNormal}>
                      ORCID -ը չի տրամադրվել SSRN -ին
                    </span>
                                    </div>
                                    <div>
                                        <span className={styles.detailBold}>Փոխկապակցված դեր․</span>
                                        <span className={styles.detailNormal}>
                      դերը չի<br />տրամադրվել SSRN -ին<br />
                    </span>
                                        <span className={styles.detailBold}>Դերը՝</span>
                                        <span className={styles.detailNormal}> Կապ Հեղինակ</span>
                                    </div>
                                </div>
                            </div>
                            <img src={cancel} alt="Cancel"/>
                        </div>
                    </div>

                    <div className={styles.divider} />

                    <div className={styles.selectedClassificationsSection}>
                        <div className={styles.title}>Ընտրված դասակարգումներ
                            <img src={pen} alt="Pen"/>
                        </div>
                        <div className={styles.classificationsBox}>
                            <div className={styles.classificationItem}>
                                <div className={styles.classificationText}>Տեղեկատվական հա...</div>
                                <img src={cancel} alt="Cancel"/>
                            </div>
                        </div>
                    </div>

                    <div className={styles.divider} />

                    <div className={styles.researchCompletenessSection}>
                        <div className={styles.title}>Հետազոտության ամբողջականություն
                            <img src={pen} alt="Pen"/>
                        </div>
                        <div>Այս բաժնի համար անհրաժեշտ բոլոր դաշտերը լրացված են. </div>
                    </div>
                </div>
            </div>

            <div className={styles.buttonsRow}>
                <div className={styles.buttonSecondary} data-property-1="secondary" onClick={onPrev}>
                    <div>Նախորդ </div>
                </div>
                <div className={styles.buttonPrimary} data-property-1="Primary" onClick={onSend}>
                    <div>Ներկայացնել</div>
                </div>
            </div>
        </div>
    );
}
