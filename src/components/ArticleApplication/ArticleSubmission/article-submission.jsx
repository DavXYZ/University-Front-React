"use client"

import styles from "./article-submission.module.css"
import Sidebar from "../Sidebar/sidebar"
import ReviewSubmit from "../ReviewSubmit/review-submit"
import { FileProvider } from "../../../contexts/file-context"
import AuthorInfoContainer from "../AuthorInfo/author-info.container"
import BasicInfoContainer from "../BasicInfo/basic-info.container"
import FileUploadContainer from "../FileUpload/file-upload.container"

const ArticleSubmission = ({handleNext,handlePrev,handleSubmit,currentStep}) => {
  

  return (
    <FileProvider>
      <div className={styles.container}>
        <div className={styles.content}>
          <Sidebar currentStep={currentStep} />

          <div className={styles.mainContent}>
            {currentStep === 0 && <BasicInfoContainer onNext={handleNext} />}
            {currentStep === 1 && <AuthorInfoContainer onNext={handleNext} onPrev={handlePrev} />}
            {currentStep === 2 && <FileUploadContainer onNext={handleNext} onPrev={handlePrev} />}
            {currentStep === 3 && <ReviewSubmit onPrev={handlePrev} onSubmit={handleSubmit} />}
          </div>
        </div>
      </div>
    </FileProvider>
  )
}

export default ArticleSubmission
