"use client"
import { Upload, X, AlertCircle } from 'lucide-react'
import styles from "./file-upload.module.css"
import { saveFormDraft } from '../../../redux/reducers/article-submission-reducer'
import FileUploadForm from "@/components/ArticleApplication/Forms/FileUploadForm.jsx";
const FileUpload = ({
  onPrev,
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
        <h1 className={styles.title}>Քայլ 3: Հոդվածի նկարողագրաակն ֆայլի ընտրություն</h1>
      </div>
      <>
      <FileUploadForm
          onPrev={onPrev}
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
          handleClearAll={handleClearAll}
      />
      <div className={styles.actionButtons}>
        <button className={styles.saveButton} onClick={() => saveFormDraft()}>
          Պահպանել
        </button>
        <button className={styles.prevButton} onClick={onPrev}>
          Նախորդ քայլը
        </button>
        <button className={styles.nextButton} onClick={handleNext} disabled={currentFiles.length === 0}>
          Հաջորդ քայլը
        </button>
      </div>
      </>
    </div>

  )
}

export default FileUpload;
