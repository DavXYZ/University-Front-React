"use client"

import { saveFormDraft, validateStep } from "@/redux/reducers/article-submission-reducer.js"
import BasicInfo from "./basic-info"
import {connect} from "react-redux";


const BasicInfoContainer = ({ onNext,
                              basicInfo,
                              saveFormDraft,
                              validateStep,
                              currentKeyword,
                              setCurrentKeyword,
                              expandedNodes,
                              handleToggleExpand,
                              handleSubmitBasicInfo,
                              handleSetData,
                              isClickedButtonSave,
                              setIsClickedButtonSave,
}) => {


  return (
      <BasicInfo
          basicInfo={basicInfo}
          currentKeyword={currentKeyword}
          setCurrentKeyword={setCurrentKeyword}
          handleToggleExpand={handleToggleExpand}
          handleSubmitBasicInfo={(values, { setSubmitting }) =>
              handleSubmitBasicInfo(values, { setSubmitting }, onNext, saveFormDraft, validateStep)
          }
          handleSetData={(values) => handleSetData(values, saveFormDraft)}
          expandedNodes={expandedNodes}
          isClickedButtonSave={isClickedButtonSave}
          setIsClickedButtonSave={setIsClickedButtonSave}
      />
  );
};

const mapStateToProps = (state) => ({
  basicInfo: state.articleSubmission.basicInfo
});

export default connect(mapStateToProps, { saveFormDraft, validateStep })(BasicInfoContainer);