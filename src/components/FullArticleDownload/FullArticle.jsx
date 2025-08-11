import React, { useState } from 'react';

import StepOne from './Step1/StepOne.jsx';
import StepTwo from './Step2/StepTwo.jsx';
import StepThree from './Step3/StepThree.jsx';
import StepFour from './Step4/StepFour.jsx';
import StepFive from './Step5/StepFive.jsx';
import StepSix from './Step6/StepSix.jsx';
import SuccessfullySent from "@/components/FullArticleDownload/SuccessfullySent.jsx";


function FullArticle() {
    const [currentStep, setCurrentStep] = useState(1);

    const goNext = () => {
        if (currentStep < 6) {
            setCurrentStep(prev => prev + 1);
        }
    };

    const goPrev = () => {
        if (currentStep > 1) {
            setCurrentStep(prev => prev - 1);
        }
    };

    const goSend = () => {
        setCurrentStep(currentStep + 1);
    }

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return <StepOne onNext={goNext} />;
            case 2:
                return <StepTwo onNext={goNext} onPrev={goPrev} />;
            case 3:
                return <StepThree onNext={goNext} onPrev={goPrev} />;
            case 4:
                return <StepFour onNext={goNext} onPrev={goPrev} />;
            case 5:
                return <StepFive onNext={goNext} onPrev={goPrev} />;
            case 6:
                return <StepSix onPrev={goPrev} onSend={goSend} />;
            case 7:
                return <SuccessfullySent/>
            default:
                return null;
        }
    };

    return (
        <div>
            {renderStep()}
        </div>
    );
}

export default FullArticle;


