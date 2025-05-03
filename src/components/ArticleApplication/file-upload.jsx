"use client"

import styles from "./file-upload.module.css"
import { Upload, X } from "lucide-react"



const FileUpload = ({ onNext, onPrev }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Քայլ 3: Հոդվածի նկարողագրաակն ֆայլի վերբեռնում</h1>
        <p className={styles.description}>Խնդրում ենք ներբեռնել ձեր հոդվածի նկարողագրաակն PDF կամ Word ֆայլը:</p>
      </div>

      <div className={styles.uploadSection}>
        <p className={styles.uploadInstruction}>
          Սահմանել համապատասխան ֆայլի անվանումը՝ ՀեղինակիԱնուն_ՀոդվածՎերնագիր_Տարեթիվ:
        </p>

        <div className={styles.dropZone}>
          <div className={styles.uploadIcon}>
            <Upload size={60} color="#2563EB" />
          </div>
          <div className={styles.uploadText}>
            <span>Ներբեռնել ֆայլերը այստեղ`</span>
            <span className={styles.uploadLink}>ընտրել</span>
          </div>
          <p className={styles.uploadLimit}>Ներբեռնել PDF կամ word առավելագույնը 100 ՄԲ</p>
        </div>

        <div className={styles.uploadedFiles}>
          <h3 className={styles.uploadedTitle}>Բեռնված ֆայլեր</h3>

          <div className={styles.fileItem}>
            <div className={styles.filePreview}>
              <div className={styles.fileThumbnail}></div>
            </div>
            <div className={styles.fileProgress}>
              <span>50% 2 sec left</span>
            </div>
          </div>

          <div className={styles.fileItem}>
            <div className={styles.filePreview}>
              <div className={styles.fileThumbnail}></div>
            </div>
            <div className={styles.fileActions}>
              <button className={styles.fileActionButton}>
                <X size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className={styles.uploadButtons}>
          <button className={styles.cancelButton}>Չեղարկել</button>
          <button className={styles.attachButton}>Կցել ֆայլ</button>
        </div>
      </div>

      <div className={styles.actionButtons}>
        <button className={styles.saveButton}>Պահպանել</button>
        <button className={styles.prevButton} onClick={onPrev}>
          Նախորդ քայլը
        </button>
        <button className={styles.nextButton} onClick={onNext}>
          Հաջորդ քայլը
        </button>
      </div>
    </div>
  )
}

export default FileUpload
