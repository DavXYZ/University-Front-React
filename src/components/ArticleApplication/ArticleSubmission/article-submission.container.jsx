"use client"
import { useEffect } from "react"
import SubmissionSuccess from "../SubmissionSuccess/submission-success"
import { setCurrentStep, loadFormDraft, saveFormDraft } from "../../../redux/reducers/article-submission-reducer"
import ArticleSubmission from "./article-submission"
import { connect } from "react-redux"

const ArticleSubmissionContainer = ({setCurrentStep, loadFormDraft, saveFormDraft,currentStep,isSubmitted}) => {

  useEffect(() => {
    if (!isSubmitted) {
        loadFormDraft()
    }

    const handleBeforeUnload = (e) => {
      if (!isSubmitted) {
        saveFormDraft()
        const message = "You have unsaved changes. Are you sure you want to leave?"
        e.returnValue = message
        return message
      }
    }

    window.addEventListener("beforeunload", handleBeforeUnload)

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload)
    }
  }, [isSubmitted])

  const handleNext = () => {
    console.log(`Moving from step ${currentStep} to step ${currentStep + 1}`)
    setCurrentStep(currentStep + 1)
  }

  const handlePrev = () => {
    if (currentStep > 0) {
      console.log(`Moving from step ${currentStep} to step ${currentStep - 1}`)
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = () => {
    console.log("Form submitted successfully")
  }

  if (isSubmitted) {
    return <SubmissionSuccess />
  }

  return (
    <ArticleSubmission 
    handleNext={handleNext}
    handlePrev={handlePrev}
    handleSubmit={handleSubmit}
    currentStep={currentStep}
    />
  )
}

let mapStateToProps = (state) => ({
    currentStep:state.articleSubmission.currentStep,
    isSubmitted:state.articleSubmission.isSubmitted
})



export default connect(mapStateToProps,{setCurrentStep, loadFormDraft, saveFormDraft})( ArticleSubmissionContainer);
