import styles from './introduction.module.css';

const TryToWrite = () => {
    return (
        <div className={styles.tryToWriteContainer}>
            <div className={styles.tryToWriteBgImage}></div>
            <div className={styles.tryToWriteOverlay}></div>

            <div className={styles.tryToWriteContent}>
                <h2 className={styles.tryToWriteTitle}>
                    Նոր հնարավորություններ: Փորձեք գրել ձեր հոդվածը այսօր!
                </h2>

                <p className={styles.tryToWriteDescription}>
                    Եթե դուք հետաքրքրված եք գիտությամբ, արվեստով կամ կրթությամբ, դա հենց այն տեղն է,
                    որտեղ ձեր ձայնը պետք է լսվի: Վերջապես հստակեցրեք ձեր միտքը, տարածեք նորարարությունը
                    և միացեք մեր համայնքին՝ մասնակցելու հոդվածների հրապարակման համաշխարհային հնարավորություններին!
                </p>

                <button className={styles.tryToWriteButton}>
                    <span className={styles.tryToWriteButtonText}>Գրել հոդված</span>
                </button>
            </div>
        </div>
    );
};

export default TryToWrite;
