import React from 'react';
import Navigator from '../Navigator.jsx';
import styles from './stepFour.module.css';
import Details from "./Details.jsx";


function StepFour({ onNext, onPrev }) {
    return (
        <div>

            <div className={styles.pageContainer}>
                <Navigator currentStep={4} />
                <div className={styles.contentContainer}>
                    <Details onPrev={onPrev} onNext={onNext} />
                </div>
            </div>
        </div>
    );
}

export default StepFour;

