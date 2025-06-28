"use client"

import {connect} from "react-redux"
import FileUpload from "./file-upload"
import {saveFormDraft, validateStep} from "../../../redux/reducers/article-submission-reducer"
import {useFileUploadLogic} from "@/hooks/useFileUploadLogic"

const FileUploadContainer = ({
                                 onPrev,
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
                             }) => {
    return (
        <FileUpload
            handleDrag={handleDrag}
            handleDrop={handleDrop}
            fileInputRef={fileInputRef}
            dragActive={dragActive}
            errors={errors}
            onPrev={onPrev}
            getFileIcon={getFileIcon}
            handleFileSelect={handleFileSelect}
            handleClearAll={handleClearAll}
            handleNext={handleNextFileUpload}
            formatFileSize={formatFileSize}
            handleRemoveFile={handleRemoveFile}
            currentFiles={currentFiles}
            hasFile={hasFile}
            saveFormDraft={saveFormDraft}
        />
    )
}

// We don't need to map state if logic is in the hook
export default connect(null, {saveFormDraft, validateStep})(FileUploadContainer)
