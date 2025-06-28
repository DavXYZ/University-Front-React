// author-info-container.js
"use client";

import { connect } from "react-redux";
import { setFormData, addAuthor, removeAuthor, saveFormDraft, validateStep } from "../../../redux/reducers/article-submission-reducer";
import AuthorInfo from "./author-info";
import { articleApplicationApi } from "../../../api/api";

const AuthorInfoContainer = ({
                                 onNext,
                                 onPrev,
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
                                 authorInfo
                             }) => {


    return (
        <AuthorInfo
            isRegisterModalOpen={isRegisterModalOpen}
            showHint={showHint}
            setShowHint={setShowHint}
            handleKeyPress={(e) => handleKeyPress(e, articleApplicationApi)}
            handleInputChange={handleInputChange}
            isSearching={isSearching}
            handleAddAuthor={(author) => handleAddAuthor(author, addAuthor)}
            handleSelectAuthor={(author) => handleSelectAuthor(author, authorInfo, addAuthor)}
            handleRemoveAuthor={handleRemoveAuthor}
            handleSubmitAuthorInfo={(values, { setSubmitting }) =>
                handleSubmitAuthorInfo(values, { setSubmitting }, authorInfo, onNext, saveFormDraft, validateStep)
            }
            handleSearch={() => handleSearch(searchQuery, articleApplicationApi)}
            onPrev={onPrev}
            authorInfo={authorInfo}
            searchQuery={searchQuery}
            searchError={searchError}
            showResults={showResults}
            searchResults={searchResults}
            setIsRegisterModalOpen={setIsRegisterModalOpen}
            handleSave={(values) => handleSave(values, authorInfo, saveFormDraft)}
        />
    );
};

const mapStateToProps = (state) => ({
    authorInfo: state.articleSubmission.authorInfo
});

export default connect(mapStateToProps, {
    setFormData,
    addAuthor,
    removeAuthor,
    saveFormDraft,
    validateStep,
})(AuthorInfoContainer);