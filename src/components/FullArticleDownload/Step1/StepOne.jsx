import React from 'react';
import Navigator from '../Navigator.jsx';
import DownloadPresentation from './DownloadPresentation.jsx';
import FileUpload from './FileUpload.jsx';
import ArticleType from './ArticleType.jsx';

import styles from './stepOne.module.css';

function StepOne({ onNext }) {
    return (
        <div className={styles.pageContainer}>
            <Navigator currentStep={1} />
            <div className={styles.contentContainer}>
                <DownloadPresentation />
                <FileUpload />
                <ArticleType onNext={onNext}/>
            </div>
        </div>
    );
}

export default StepOne;
