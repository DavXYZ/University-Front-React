import './title.css';
import StepComponent from './Step';
import TitleNavigation from './TitleNavigation';

const PresentationProgress = () => {
    return (
        <div className="mainTitleNavigation">
            <TitleNavigation />
            <StepComponent />
        </div>
    );
};

export default PresentationProgress;