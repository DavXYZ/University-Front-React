"use client"

import { useState } from "react"
import {  useDispatch, connect } from "react-redux"

import { setFormData, saveFormDraft, validateStep } from "../../../redux/reducers/article-submission-reducer"
import BasicInfo from "./basic-info"



const BasicInfoContainer = ({ onNext,basicInfo,saveFormDraft, validateStep  }) => {
  const dispatch = useDispatch()

  const [currentKeyword, setCurrentKeyword] = useState("");
  const [expandedNodes, setExpandedNodes] = useState(
    new Set(["applied-sciences", "computer-science-research"]),
  )

  const handleToggleExpand = (nodeId) => {
    const newExpanded = new Set(expandedNodes)
    if (newExpanded.has(nodeId)) {
      newExpanded.delete(nodeId)
    } else {
      newExpanded.add(nodeId)
    }
    setExpandedNodes(newExpanded)
  }

  const handleSubmit = (values, { setSubmitting }) => {
    dispatch(setFormData("basicInfo", values))
    saveFormDraft()

    // Validate before proceeding
    if (validateStep(0)) {
      onNext()
    }

    setSubmitting(false)
  }

  const handleSetData = (values) => {
        dispatch(setFormData("basicInfo", values))
        saveFormDraft()
  }

  return (
    <BasicInfo 
    basicInfo={basicInfo}
    currentKeyword={currentKeyword}
    setCurrentKeyword={setCurrentKeyword}
    handleToggleExpand={handleToggleExpand}
    handleSubmit={handleSubmit}
    handleSetData={handleSetData}
    expandedNodes={expandedNodes}
    />
  )
}

let mapStateToProps = (state) => ({
    basicInfo:state.articleSubmission.basicInfo
})

export default connect(mapStateToProps,{saveFormDraft, validateStep })(BasicInfoContainer);
