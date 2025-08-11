import React from 'react';
import Navigator from '../Navigator.jsx';
import FileUpload from './FileUpload.jsx';
import styles from './stepTwo.module.css';
import DownloadPresentation from "@/components/FullArticleDownload/Step2/DownloadPresentation.jsx";
import Details from "@/components/FullArticleDownload/Step2/Details.jsx";


function StepTwo({ onNext, onPrev }) {
    return (
        <div>

            <div className={styles.pageContainer}>
                <Navigator currentStep={2} />
                <div className={styles.contentContainer}>
                    <DownloadPresentation/>
                    <FileUpload />
                    <Details onPrev={onPrev} onNext={onNext} />
                </div>
            </div>
        </div>
    );
}

export default StepTwo;
