import React from 'react';
import styles from './downloadPresentation.module.css';

const DownloadPresentation = () => {
    return (
        <div className={styles.stepContainer}>
            <h2 className={styles.stepTitle}>Քայլ 2: Հաստատել ներկայացման հիմնական մանրամասները</h2>
            <p className={styles.stepDescription}>
                Խնդրում ենք ներբեռնել ձեր հոդվածի PDF կամ Word ֆայլը: Մենք կհավաքագրենք վերնագիրը, ամփոփագիրը և հիմնաբառերը՝ վերանայման համար:
            </p>
        </div>
    );
};

export default DownloadPresentation;