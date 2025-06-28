"use client"
import {Formik, Form, Field, ErrorMessage} from "formik"
import * as Yup from "yup"
import {Check, UploadIcon, AlertCircle} from "lucide-react"
import styles from "./review-submit.module.css"
import reviewSubmitSchema from "../../../validation/schemas/reviewSubmitSchema"
import FileUploadForm from "@/components/ArticleApplication/Forms/FileUploadForm.jsx";
import BasicInfoForm from "@/components/ArticleApplication/Forms/BasicInfoForm.jsx";
import AuthorInfoForm from "@/components/ArticleApplication/Forms/AuthorInfoForm.jsx";
import basicInfoSchema from "@/validation/schemas/basicInfoSchema.js";
import authorInfoSchema from "@/validation/schemas/authorInfoSchema.js";

const ReviewSubmit = ({
                          onPrev,
                          basicInfo,
                          handleSubmitBasicInfo,
                          handleToggleExpand,
                          setCurrentKeyword,
                          currentKeyword,
                          handleSetData,
                          expandedNodes,
                          isClickedButtonSave,
                          setIsClickedButtonSave,

                          isRegisterModalOpen,
                          showHint,
                          setShowHint,
                          handleKeyPress,
                          handleInputChange,
                          isSearching,
                          handleAddAuthor,
                          handleSelectAuthor,
                          handleRemoveAuthor,
                          handleSubmitAuthorInfo,
                          authorInfo,
                          searchQuery,
                          handleSearch,
                          searchError,
                          showResults,
                          searchResults,
                          setIsRegisterModalOpen,
                          handleSave,

                          onPrevFile,
                          handleDrag,
                          handleDrop,
                          fileInputRef,
                          dragActive,
                          errors,
                          getFileIcon,
                          handleFileSelect,
                          currentFiles,
                          formatFileSize,
                          handleRemoveFile,
                          handleClearAll,
                          handleNext,
                          hasFile

                      }) => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Քայլ 4: Վերանայում և Ներկայացում</h1>
                <p className={styles.subtitle}>Վերջնական ստուգում և ներկայացում</p>
            </div>
            <FileUploadForm
                onPrev={onPrev}

            />
            <Formik
                initialValues={
                    basicInfo || {
                        isAuthor: true,
                        journal: "",
                        journalSeries: "",
                        articleType: "",
                        title: "",
                        language: "Անգլերեն",
                        date: new Date().toISOString().split('T')[0], // Today's date as default,
                        field: "Կիրառական գիտություններ",
                        keywords: ["Տեղեկատվական համակարգեր"],
                    }
                }
                validationSchema={basicInfoSchema}
                onSubmit={handleSubmitBasicInfo}
                enableReinitialize
            >
                {({values, setFieldValue, handleSubmit, isSubmitting}) => (
                    <BasicInfoForm
                        basicInfo={basicInfo}
                        handleSubmit={handleSubmit}
                        handleToggleExpand={handleToggleExpand}
                        setCurrentKeyword={setCurrentKeyword}
                        currentKeyword={currentKeyword}
                        handleSetData={handleSetData}
                        expandedNodes={expandedNodes}
                        isClickedButtonSave={isClickedButtonSave}
                        values={values}
                        setFieldValue={setFieldValue}
                    />
                )}
            </Formik>
            <Formik
                initialValues={{
                    educationLevel: authorInfo.educationLevel || "",
                    biography: authorInfo.biography || "",
                }}
                validationSchema={authorInfoSchema}
                onSubmit={handleSubmitAuthorInfo}
                enableReinitialize
            >
                {({values, isSubmitting}) => (
                    <AuthorInfoForm isRegisterModalOpen={isRegisterModalOpen}
                                    setIsRegisterModalOpen={setIsRegisterModalOpen}
                                    handleAddAuthor={handleAddAuthor}
                                    handleSelectAuthor={handleSelectAuthor}
                                    handleRemoveAuthor={handleRemoveAuthor}
                                    handleSubmit={handleSubmitAuthorInfo}
                                    onPrev={onPrev}
                                    authorInfo={authorInfo}
                                    searchQuery={searchQuery}
                                    handleSearch={handleSearch}
                                    searchError={searchError}
                                    showResults={showResults}
                                    searchResults={searchResults}
                                    handleSave={handleSave}
                                    showHint={showHint}
                                    setShowHint={setShowHint}
                                    handleKeyPress={handleKeyPress}
                                    handleInputChange={handleInputChange}
                                    isSearching={isSearching}
                                    values={values}
                                    isSubmitting={isSubmitting}
                    />
                )}
            </Formik>
            <FileUploadForm
                onPrev={onPrevFile}
                handleNext={handleNext}
                hasFile={hasFile}
                handleDrag={handleDrag}
                handleDrop={handleDrop}
                fileInputRef={fileInputRef}
                dragActive={dragActive}
                errors={errors}
                getFileIcon={getFileIcon}
                handleFileSelect={handleFileSelect}
                currentFiles={currentFiles}
                formatFileSize={formatFileSize}
                handleRemoveFile={handleRemoveFile}
                handleClearAll={handleClearAll}/>
        </div>
    )
}

export default ReviewSubmit