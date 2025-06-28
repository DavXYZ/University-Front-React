"use client"

import styles from "./author-info.module.css"
import AuthorInfoForm from "@/components/ArticleApplication/Forms/AuthorInfoForm.jsx";
import {Form, Formik} from "formik";
import authorInfoSchema from "@/validation/schemas/authorInfoSchema.js";

const AuthorInfo = ({
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
                        onPrev,
                        authorInfo,
                        searchQuery,
                        handleSearch,
                        searchError,
                        showResults,
                        searchResults,
                        setIsRegisterModalOpen,
                        handleSave
                    }) => {


    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Քայլ 2: Հեղինակի տվյալներ</h1>
                <p className={styles.subtitle}>Հեղինակներ</p>
                <p className={styles.description}>
                    Խնդրում ենք ավելացնել բոլոր այն հեղինակներին, ովքեր մասնակցել են ձեր հոդվածի պատրաստմանը, ինչպես նաև
                    նրանց
                    աշխատանքային կազմակերպությունները: Եթե հեղինակները մեր տվյալների բազայում չկան, կարող եք նրանց
                    ավելացնել:
                </p>
            </div>
            <Formik
                initialValues={{
                    educationLevel: authorInfo.educationLevel || "",
                    biography: authorInfo.biography || "",
                }}
                validationSchema={authorInfoSchema}
                onSubmit={handleSubmitAuthorInfo}
                enableReinitialize
            >

                {({values, isSubmitting, handleSubmit}) => (
                    <Form onSubmit={handleSubmit}>
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

                        <div className={styles.actionButtons}>
                            <button
                                type="button"
                                className={styles.saveButton}
                                onClick={() => handleSave(values)}>
                                Պահպանել
                            </button>
                            <button type="button" className={styles.prevButton} onClick={onPrev}>
                                Նախորդ քայլը
                            </button>
                            <button type="submit" className={styles.nextButton} disabled={isSubmitting}>
                                Հաջորդ քայլը
                            </button>
                        </div>
                    </Form>
                )}

            </Formik>
        </div>
    )
}

export default AuthorInfo;
