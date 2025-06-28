"use client"

import styles from "./article-submission.module.css"
import Sidebar from "../Sidebar/sidebar"
import {FileProvider, useFileContext} from "../../../contexts/file-context"
import AuthorInfoContainer from "../AuthorInfo/author-info.container"
import BasicInfoContainer from "../BasicInfo/basic-info.container"
import FileUploadContainer from "../FileUpload/file-upload.container"
import ReviewSubmitContainer from "@/components/ArticleApplication/ReviewSubmit/review-submit.container.jsx";
import {useFileUploadLogic} from "@/hooks/useFileUploadLogic.js";
import {useBasicInfoForm} from "@/hooks/useBasicInfoForm.jsx";
import {useAuthorInfoForm} from "@/hooks/useAuthorInfoForm.jsx";

const ArticleSubmission = ({handleNextFN,handlePrevFN,handleSubmit,currentStep}) => {
    const fileContext = useFileContext()
    const {
        fileInputRef,
        dragActive,
        errors,
        handleDrag,
        handleDrop,
        handleFileSelect,
        handleRemoveFile,
        handleClearAll,
        handleNextFileUpload,
        currentFiles,
        hasFile,
        formatFileSize,
        getFileIcon,
        saveFormDraft,
    } = useFileUploadLogic({ handleNextFN, handlePrevFN,fileContext })

    const {
        currentKeyword,
        setCurrentKeyword,
        expandedNodes,
        handleToggleExpand,
        handleSubmitBasicInfo,
        handleSetData,
        isClickedButtonSave,
        setIsClickedButtonSave,
    } = useBasicInfoForm();

    const {
        isRegisterModalOpen,
        showHint,
        searchQuery,
        searchResults,
        isSearching,
        searchError,
        showResults,
        setIsRegisterModalOpen,
        setShowHint,
        handleSubmitAuthorInfo,
        handleSave,
        handleAddAuthor,
        handleRemoveAuthor,
        handleSearch,
        handleSelectAuthor,
        handleInputChange,
        handleKeyPress,
    } = useAuthorInfoForm();

  return (

      <div className={styles.container}>
        <div className={styles.content}>
          <Sidebar currentStep={currentStep} />

          <div className={styles.mainContent}>
            {currentStep === 0 && <BasicInfoContainer
                onNext={handleNextFN}
                currentKeyword={currentKeyword}
                setCurrentKeyword={setCurrentKeyword}
                expandedNodes={expandedNodes}
                handleToggleExpand={handleToggleExpand}
                handleSubmitBasicInfo={handleSubmitBasicInfo}
                handleSetData={handleSetData}
                isClickedButtonSave={isClickedButtonSave}
                setIsClickedButtonSave={setIsClickedButtonSave}
            />}
            {currentStep === 1 && <AuthorInfoContainer
                isRegisterModalOpen={isRegisterModalOpen}
                showHint={showHint}
                searchQuery={searchQuery}
                searchResults={searchResults}
                isSearching={isSearching}
                searchError={searchError}
                showResults={showResults}
                setIsRegisterModalOpen={setIsRegisterModalOpen}
                setShowHint={setShowHint}
                handleSubmitAuthorInfo={handleSubmitAuthorInfo}
                handleSave={handleSave}
                handleAddAuthor={handleAddAuthor}
                handleRemoveAuthor={handleRemoveAuthor}
                handleSearch={handleSearch}
                handleSelectAuthor={handleSelectAuthor}
                handleInputChange={handleInputChange}
                handleKeyPress={handleKeyPress}
                onNext={handleNextFN}
                onPrev={handlePrevFN}
            />}
            {currentStep === 2 && <FileUploadContainer
                onNext={handleNextFileUpload}
                onPrev={handlePrevFN}
                fileInputRef={fileInputRef}
                dragActive={dragActive}
                errors={errors}
                handleDrag={handleDrag}
                handleDrop={handleDrop}
                handleFileSelect={handleFileSelect}
                handleRemoveFile={handleRemoveFile}
                handleClearAll={handleClearAll}
                handleNextFileUpload={handleNextFileUpload}
                currentFiles={currentFiles}
                hasFile={hasFile}
                formatFileSize={formatFileSize}
                getFileIcon={getFileIcon}
                saveFormDraft={saveFormDraft}
            />}
            {currentStep === 3 && <ReviewSubmitContainer
                onPrev={handlePrevFN}
                onNext={handleNextFN}
                onSubmit={handleSubmit}

                currentKeyword={currentKeyword}
                setCurrentKeyword={setCurrentKeyword}
                expandedNodes={expandedNodes}
                handleToggleExpand={handleToggleExpand}
                handleSubmitBasicInfo={handleSubmitBasicInfo}
                handleSetData={handleSetData}
                isClickedButtonSave={isClickedButtonSave}
                setIsClickedButtonSave={setIsClickedButtonSave}

                isRegisterModalOpen={isRegisterModalOpen}
                showHint={showHint}
                searchQuery={searchQuery}
                searchResults={searchResults}
                isSearching={isSearching}
                searchError={searchError}
                showResults={showResults}
                setIsRegisterModalOpen={setIsRegisterModalOpen}
                setShowHint={setShowHint}
                handleSubmitAuthorInfo={handleSubmitAuthorInfo}
                handleSave={handleSave}
                handleAddAuthor={handleAddAuthor}
                handleRemoveAuthor={handleRemoveAuthor}
                handleSearch={handleSearch}
                handleSelectAuthor={handleSelectAuthor}
                handleInputChange={handleInputChange}
                handleKeyPress={handleKeyPress}

                fileInputRef={fileInputRef}
                dragActive={dragActive}
                errors={errors}
                handleDrag={handleDrag}
                handleDrop={handleDrop}
                handleFileSelect={handleFileSelect}
                handleRemoveFile={handleRemoveFile}
                handleClearAll={handleClearAll}
                handleNextFileUpload={handleNextFileUpload}
                currentFiles={currentFiles}
                hasFile={hasFile}
                formatFileSize={formatFileSize}
                getFileIcon={getFileIcon}
                saveFormDraft={saveFormDraft}
            />}
          </div>
        </div>
      </div>
  )
}

export default ArticleSubmission;
