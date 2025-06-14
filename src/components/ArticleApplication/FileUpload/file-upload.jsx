"use client"
import { Upload, X, AlertCircle } from 'lucide-react'
import styles from "./file-upload.module.css"
import { saveFormDraft } from '../../../redux/reducers/article-submission-reducer'
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
        <p className={styles.description}>
          Խնդրում ենք ընտրել ձեր հոդվածի նկարողագրաակն PDF կամ Word ֆայլը: Ֆայլերը կպահվեն լոկալ մինչև վերջնական հաստատումը:
        </p>
      </div>

      <div className={styles.uploadSection}>
        <p className={styles.uploadInstruction}>
          Սահմանել համապատասխան ֆայլի անվանումը՝ ՀեղինակիԱնուն_ՀոդվածՎերնագիր_Տարեթիվ:
        </p>

        <div
          className={`${styles.dropZone} ${dragActive ? styles.dragActive : ""}`}
          onDragEnter={handleDrag}
          onDragOver={handleDrag}
          onDragLeave={handleDrag}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
        >
          <input
            ref={fileInputRef}
            type="file"
            onChange={handleFileSelect}
            accept=".pdf,.doc,.docx"
            multiple
            style={{ display: "none" }}
          />
          <div className={styles.uploadIcon}>
            <Upload size={60} color="#2563EB" />
          </div>
          <div className={styles.uploadText}>
            <span>Ընտրել ֆայլերը այստեղ` </span>
            <span className={styles.uploadLink}>ընտրել</span>
          </div>
          <p className={styles.uploadLimit}>Ընտրել PDF կամ Word ֆայլեր առավելագույնը 100 ՄԲ</p>
        </div>

        {Object.keys(errors).length > 0 && (
          <div className={styles.errorContainer}>
            {Object.values(errors).map((error, index) => (
              <div key={index} className={styles.errorMessage}>
                <AlertCircle size={16} />
                <span>{error}</span>
              </div>
            ))}
          </div>
        )}

        {currentFiles.length > 0 && (
          <div className={styles.uploadedFiles}>
            <h3 className={styles.uploadedTitle}>Ընտրված ֆայլեր ({currentFiles.length})</h3>

            {currentFiles.map((file) => (
              <div key={file.id} className={styles.fileItem}>
                <div className={styles.filePreview}>
                  <div className={styles.fileThumbnail}>{getFileIcon(file.type)}</div>
                  <div className={styles.fileName}>
                    <div className={styles.fileNameText}>{file.name}</div>
                    <div className={styles.fileSize}>{formatFileSize(file.size)}</div>
                    <div className={styles.fileStatus}>
                      {hasFile(file.id) ? "✅ Պահված լոկալ" : "⚠️ Ֆայլը բացակայում է"}
                    </div>
                  </div>
                </div>
                <div className={styles.fileActions}>
                  <button
                    className={styles.fileActionButton}
                    onClick={() => handleRemoveFile(file.id)}
                    aria-label="Remove file"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className={styles.uploadButtons}>
          <button className={styles.cancelButton} onClick={handleClearAll} disabled={currentFiles.length === 0}>
            Չեղարկել բոլորը
          </button>
          <button className={styles.attachButton} onClick={() => fileInputRef.current?.click()}>
            Ավելացնել ֆայլ
          </button>
        </div>

        {currentFiles.length > 0 && (
          <div className={styles.infoMessage}>
            <AlertCircle size={16} />
            <span>Ֆայլերը պահված են լոկալ և կուղարկվեն սերվեր միայն վերջնական հաստատումից հետո:</span>
          </div>
        )}
      </div>

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
    </div>
  )
}

export default FileUpload
