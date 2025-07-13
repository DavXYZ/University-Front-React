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
                          hasFile,

                          handleReviewSubmit,
                          reviewSubmit
                      }) => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Քայլ 4: Վերանայում և Ներկայացում</h1>
                <p className={styles.subtitle}>Վերջնական ստուգում և ներկայացում</p>
            </div>
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
            <Formik initialValues={{
                termsAccepted: reviewSubmit.termsAccepted || false,
                publicationDetails: reviewSubmit.publicationDetails || "",
            }}
                    validationSchema={reviewSubmitSchema}
                    onSubmit={handleReviewSubmit}>
                {({values, errors, touched, isSubmitting, setFieldValue}) =>
                    <Form>
                        <>
                        <div className={styles.formSection}>
                            <h2 className={styles.sectionTitle}>Պայմաններ և դրույթներ</h2>
                            <p className={styles.termsText}>
                                ԾԱՆՈԹԱԳՐՈՒԹՅՈՒՆ. Դուք չեք փոխանցում հեղինակային իրավունքը որևէ փաստաթղթի, որը տեղադրում
                                եք SSRN-ում:
                                Փոխարենը, դուք տրամադրում եք SSRN-ին ոչ-էքսկլյուզիվ իրավունք տեղադրել և տարածել ձեր
                                աշխատանքը՝ համաձայն
                                ՀՏՀ-ի «SSRN-ի ապրանքներ և ծառայություններ» բաժնի: Դուք կարող եք ցանկացած պահի հեռացնել
                                ձեր աշխատանքը
                                SSRN-ից:
                            </p>
                            <div className={styles.termsCheckbox}>
                                <div className={styles.checkbox}
                                     onClick={() => setFieldValue("termsAccepted", !values.termsAccepted)}>
                                    {values.termsAccepted && <Check size={18} className={styles.checkIcon}/>}
                                </div>
                                <p className={styles.checkboxLabel}>
                                    Ես վերանայել եմ բոլոր ֆայլերը, որոնք վերբեռնում եմ, և ունեմ դրանք վերբեռնելու
                                    իրավունք: Ես կարդացել և
                                    համաձայն եմ SSRN-ի Պայմաններին և դրույթներին:
                                </p>
                            </div>
                            <ErrorMessage name="termsAccepted" component="div" className={styles.errorMessage}/>
                        </div>

                        <div className={styles.actionButtons}>
                            <button type="button" className={styles.prevButton} onClick={onPrev}
                                    disabled={isSubmitting}>
                                Նախորդ քայլը
                            </button>
                            <button
                                type="submit"
                                className={styles.submitButton}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <UploadIcon size={16} className={styles.spinIcon}/>
                                        Վերբեռնվում և ներկայացվում է...
                                    </>
                                ) : (
                                    "Ներկայացնել"
                                )}
                            </button>
                        </div>
                        </>
                    </Form>
                }
            </Formik>
        </div>
    )
}

export default ReviewSubmit;