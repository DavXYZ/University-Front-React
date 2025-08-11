import React from 'react';
import Navigator from '../Navigator.jsx';
import styles from './stepSix.module.css';
import Details from "./Details.jsx";


function StepSix({ onPrev, onSend }) {
    return (
        <div>

            <div className={styles.pageContainer}>
                <Navigator currentStep={6} />
                <div className={styles.contentContainer}>
                    <Details onPrev={onPrev} onSend={onSend} />
                </div>
            </div>
        </div>
    );
}

export default StepSix;

