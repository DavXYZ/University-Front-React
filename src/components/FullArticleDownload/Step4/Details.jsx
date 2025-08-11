import React, { useState } from 'react';
import styles from './details.module.css';
import cancel from '../../assets/cancel.png';

const Details = ({onPrev, onNext}) => {
    const [activeIndexes, setActiveIndexes] = useState([]);
    const [search, setSearch] = useState('');
    const categories = [
        { title: 'Կիրառական գիտություններ' },
        { title: 'Առողջապահական գիտություններ' },
        { title: 'Հումանիտար գիտություններ' },
        { title: 'Կենսաբանական գիտություններ' },
        { title: 'Բնագիտական գիտություններ' },
        { title: 'Հասարակագիտական գիտություններ' },
    ];

    function toggleActive(i) {
        setActiveIndexes(prev =>
            prev.includes(i) ? prev.filter(index => index !== i) : [...prev, i]
        );
    }

    return (
        <div className={styles.container}>
            <div className={styles.leftSide}>
                <div className={styles.leftContent}>
                    <div className={styles.stepTitle}>Քայլ 4: Ձեր նյութի դասակարգում</div>
                    <div className={styles.subtitle}>Դասակարգումներ</div>
                    <div className={styles.description}>
                        Խնդրում ենք ընտրել առնվազն մեկ թեմատիկ դասակարգում ձեր նյութի համար՝ առավելագույնը յոթ դասակարգում: Ընտրված դասակարգումներն օգտագործվում են ձեր նյութի հետազոտական ցանցերում տեղակայման և էլ․ փոստով ծանուցումների միջոցով տարածման համար: Ձեր ընտրած դասակարգումները կստուգվեն մեր թիմի կողմից, և դրանք հնարավոր է փոփոխվեն վերջնական հաստատման ժամանակ:
                    </div>
                </div>
            </div>

            <div className={styles.rightSide}>
                <div className={styles.selectedCategoriesSection}>
                    <div className={styles.sectionTitle}>Ընտրված դասակարգումներ</div>
                    <div className={styles.sectionDescription}>Մկնիկը պահեք նկարագրությունները դիտելու համար:</div>

                    <div className={styles.selectedCategoryWrapper} data-property-1="Frame 1321317048">
                        <div className={styles.selectedCategory}>
                            <div className={styles.selectedCategoryTextWrapper}>
                                <div className={styles.selectedCategoryText}>Տեղեկատվական հա...</div>
                            </div>
                            <img src={cancel} alt="Cancel"/>
                        </div>
                    </div>
                </div>

                <div className={styles.searchSection}>
                    <div className={styles.sectionTitle}>Որոնել SSRN-ի դասակարգումներ</div>
                    <div className={styles.sectionDescription}>Որոնել</div>

                    <div className={styles.searchInputWrapper}>
                        <input
                            type="text"
                            className={styles.searchInput}
                            placeholder="Մուտքագրեք որոնման բառեր"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                        />
                    </div>


                    <div className={styles.sectionTitle}>Դիտել SSRN-ի դասակարգումներ</div>
                </div>

                <div className={styles.addButtonWrapper}>
                    <div className={styles.addButton}>
                        <div>Ավելացնել</div>
                    </div>
                </div>

                <div className={styles.categoriesList}>
                    {categories.map(({ title }, i) => {
                        const isActive = activeIndexes.includes(i);
                        return (
                            <div
                                key={i}
                                className={`${styles.categoryItem} ${isActive ? styles.active : styles.passive}`}
                                onClick={() => toggleActive(i)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={e => e.key === 'Enter' && toggleActive(i)}
                            >
                                <div className={styles.categoryIconCircle} />
                                <div className={styles.categoryTextWrapper}>
                                    <div className={styles.categoryArrow} />
                                    <div className={styles.categoryTitle}>{title}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className={styles.divider} />

                <div className={styles.buttonsRow}>
                    <div className={styles.navigationButtons}>
                        <div className={styles.saveButtonText}>Պահպանել</div>
                        <div className={styles.prevButton} onClick={onPrev}>
                            <div>Նախորդ քայլը</div>
                        </div>
                        <div className={styles.nextButton} onClick={onNext}>
                            <div>Հաջորդ քայլը</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
