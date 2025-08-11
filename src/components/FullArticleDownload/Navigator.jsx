import React from 'react';
import styles from './navigator.module.css';

const Navigator = ({ currentStep = 1, onStepChange }) => {
    const steps = [
        { text: 'Վերբեռնեք հոդվածը', step: 1 },
        { text: 'Հաստատեք ներկայացման հիմնական մանրամասները', step: 2 },
        { text: 'Հեղինակի տվյալներ', step: 3 },
        { text: 'Դասակարգեք ձեր ներկայացումը', step: 4 },
        { text: 'Հետազոտության ամբողջականություն', step: 5 },
        { text: 'Վերանայեք և ներկայացրեք', step: 6 },
    ];

    const handleStepClick = (step) => {
        if (onStepChange && step <= currentStep) {
            onStepChange(step);
        }
    };

    return (
        <div className={styles.container}>
            {steps.map((stepItem) => {
                const isCurrentStep = currentStep === stepItem.step;

                return (
                    <div
                        key={stepItem.step}
                        className={`${styles.item} ${
                            isCurrentStep ? styles.active : ''
                        } ${
                            stepItem.step <= currentStep ? styles.clickable : ''
                        }`}
                        onClick={() => handleStepClick(stepItem.step)}
                    >
                        <span className={isCurrentStep ? styles.activeText : ''}>
                            {stepItem.text}
                        </span>
                    </div>
                );
            })}

            <div className={styles.stepsContainer}>
                <div className={styles.dashedLine}></div>
                {steps.map((stepItem) => {
                    const isCompletedStep = stepItem.step < currentStep;
                    const isCurrentStep = stepItem.step === currentStep;

                    let circleClass = styles.nextStep;
                    if (isCompletedStep) circleClass = styles.completedStep;
                    else if (isCurrentStep) circleClass = styles.activeStep;

                    let textClass = styles.nextStepText;
                    if (isCompletedStep) textClass = styles.completedStepText;
                    else if (isCurrentStep) textClass = styles.activeStepText;

                    return (
                        <div key={stepItem.step} className={`${styles.step} ${circleClass}`}>
                            <span className={textClass}>{stepItem.step}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Navigator;
