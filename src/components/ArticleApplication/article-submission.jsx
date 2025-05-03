"use client"

import { useState } from "react"
import styles from "./article-submission.module.css"
import Sidebar from "./sidebar"
import BasicInfo from "./basic-info"
import AuthorInfo from "./author-info"
import FileUpload from "./file-upload"
import ReviewSubmit from "./review-submit"

const ArticleSubmission = () => {
  const [currentStep, setCurrentStep] = useState(1)

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = () => {
    console.log("Form submitted")
    // Handle form submission logic here
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Sidebar currentStep={currentStep} />

        <div className={styles.mainContent}>
          {currentStep === 1 && <BasicInfo onNext={handleNext} />}
          {currentStep === 2 && <AuthorInfo onNext={handleNext} onPrev={handlePrev} />}
          {currentStep === 3 && <FileUpload onNext={handleNext} onPrev={handlePrev} />}
          {currentStep === 4 && <ReviewSubmit onPrev={handlePrev} onSubmit={handleSubmit} />}
        </div>
      </div>
    </div>
  )
}

export default ArticleSubmission
