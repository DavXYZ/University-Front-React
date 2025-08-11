import React from 'react';
import Navigator from '../Navigator.jsx';
import styles from './stepFive.module.css';
import Details from "./Details.jsx";


function StepFive({ onNext, onPrev }) {
    return (
        <div>

            <div className={styles.pageContainer}>
                <Navigator currentStep={5} />
                <div className={styles.contentContainer}>
                    <Details onPrev={onPrev} onNext={onNext} />
                </div>
            </div>
        </div>
    );
}

export default StepFive;

