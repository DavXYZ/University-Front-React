import './title.css';

const PresentationProgress = () => {
    return (
        <div className="presentation-progress-container">
            <div className="presentation-progress-inner">
                <div className="presentation-progress-icon">
                    <div className="presentation-progress-bounding-box"></div>
                    <div className="presentation-progress-icon-shape"></div>
                </div>
                <span className="presentation-progress-text">
                    Ներկայացման առաջընթաց
                </span>
            </div>
        </div>
    );
};

export default PresentationProgress;