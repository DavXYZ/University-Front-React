import React from 'react';
import Navigator from '../Navigator.jsx';
import styles from './stepThree.module.css';
import Details from "./Details.jsx";


function StepThree({ onNext, onPrev }) {
    return (
        <div>

            <div className={styles.pageContainer}>
                <Navigator currentStep={3} />
                <div className={styles.contentContainer}>
                    <Details onPrev={onPrev} onNext={onNext} />
                </div>
            </div>
        </div>
    );
}

export default StepThree;

