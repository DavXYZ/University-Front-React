"use client"
import { useState, useEffect } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { Check, UploadIcon, AlertCircle } from "lucide-react"
import styles from "./review-submit.module.css"
import { useSelector, useDispatch } from "react-redux"
import { setFormData, setSubmissionStatus } from "../../../redux/reducers/article-submission-reducer"
import { useFileContext } from "../../../contexts/file-context"
import { articleApplicationApi } from "../../../api/api"

const validationSchema = Yup.object({
  termsAccepted: Yup.boolean().required("Պայմանները պետք է ընդունվեն").oneOf([true], "Պայմանները պետք է ընդունվեն"),
  publicationDetails: Yup.string(),
})

const ReviewSubmit = ({ onPrev, onSubmit }) => {
  const dispatch = useDispatch()
  const { basicInfo, authorInfo, fileUpload, reviewSubmit, isSubmitting } = useSelector(
    (state) => state.articleSubmission,
  )
  const { getFilesForUpload, getFileMetadata, hasFile } = useFileContext()

  const [uploadProgress, setUploadProgress] = useState({})
  const [uploadErrors, setUploadErrors] = useState({})

  // Get current files from context
  const contextFiles = getFileMetadata()

  useEffect(() => {
    console.log("ReviewSubmit mounted, checking files:", {
      reduxFiles: fileUpload?.files?.length || 0,
      contextFiles: contextFiles.length,
      filesForUpload: getFilesForUpload().length,
    })
  }, [fileUpload, contextFiles, getFilesForUpload])

  // Function to upload files to server
  const uploadFilesToServer = async () => {
    const filesForUpload = getFilesForUpload()
    const uploadedFiles = []
    setUploadErrors({})

    console.log("Starting file upload process...")
    console.log("Files ready for upload:", filesForUpload.length)

    for (const { metadata, file } of filesForUpload) {
      try {
        console.log(`Processing file: ${metadata.name}`, {
          metadata,
          fileSize: file.size,
          fileType: file.type,
        })

        // Initialize progress
        setUploadProgress((prev) => ({ ...prev, [metadata.id]: 0 }))

        // Simulate progress updates for UI feedback
        let progress = 0
        const interval = setInterval(() => {
          progress += 10
          setUploadProgress((prev) => ({
            ...prev,
            [metadata.id]: Math.min(progress, 90), // Cap at 90% until actual submission
          }))

          if (progress >= 90) {
            clearInterval(interval)
          }
        }, 300)

        // Add file to the list with the actual File object
        uploadedFiles.push({
          ...metadata,
          file: file, // Include the actual file object
          id: metadata.id,
          name: metadata.name,
          type: file.type,
          size: file.size,
          isUploaded: false, // Will be uploaded in the final submission
        })

        // Mark as ready for upload
        setUploadProgress((prev) => ({ ...prev, [metadata.id]: 90 }))
      } catch (error) {
        console.error(`Error processing ${metadata.name}:`, error)
        setUploadErrors((prev) => ({
          ...prev,
          [metadata.id]: `Ֆայլի մշակման սխալ: ${metadata.name}`,
        }))
        throw error
      }
    }

    return uploadedFiles
  }

  // Function to submit the complete form data
  const submitCompleteForm = async (formData, uploadedFiles) => {
    console.log("Submitting with files:", uploadedFiles)

    // Update progress to 100% for all files when submission starts
    uploadedFiles.forEach((file) => {
      setUploadProgress((prev) => ({ ...prev, [file.id]: 100 }))
    })

    return await articleApplicationApi.sendArticleApplication(formData, uploadedFiles)
  }

  const handleSubmit = async (values, { setSubmitting }) => {
    dispatch(setFormData("reviewSubmit", values))
    dispatch(setSubmissionStatus(true, false))

    const formData = {
      basicInfo,
      authorInfo,
      fileUpload,
      reviewSubmit: {
        ...reviewSubmit,
        ...values,
      },
    }

    try {
      const filesForUpload = getFilesForUpload()

      // Validate that we have files to upload
      if (filesForUpload.length === 0) {
        throw new Error("Ֆայլեր չեն գտնվել վերբեռնման համար")
      }

      console.log("All validations passed, starting upload...")

      // Step 1: Upload files to server
      console.log("Starting file upload...")
      const uploadedFiles = await uploadFilesToServer()
      console.log("Files uploaded successfully:", uploadedFiles)

      // Step 2: Submit complete form data
      console.log("Submitting form data...")
      const result = await submitCompleteForm(formData, uploadedFiles)
      console.log("Form submitted successfully:", result)

      // Step 3: Clear localStorage and mark as submitted
      localStorage.removeItem("articleSubmissionDraft")
      dispatch(setSubmissionStatus(false, true))

      onSubmit()
    } catch (error) {
      console.error("Submission failed:", error)
      dispatch(setSubmissionStatus(false, false, error.message || "Submission failed"))
    }

    setSubmitting(false)
  }

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  // Check if we have all necessary files
  const filesReady = contextFiles.length > 0 && contextFiles.every((file) => hasFile(file.id))

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Քայլ 4: Վերանայում և Ներկայացում</h1>
        <p className={styles.subtitle}>Վերջնական ստուգում և ներկայացում</p>
        <p className={styles.description}>
          Խնդրում ենք ստուգել ձեր տվյալները և սեղմել "Ներկայացնել" կոճակը: Ֆայլերը կուղարկվեն սերվեր միայն հաստատումից
          հետո:
        </p>
      </div>

      <Formik
        initialValues={{
          termsAccepted: reviewSubmit.termsAccepted || false,
          publicationDetails: reviewSubmit.publicationDetails || "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, isSubmitting: formikSubmitting, setFieldValue }) => (
          <Form className={styles.form}>
            {/* File Upload Status Section */}
            <div className={styles.uploadSection}>
              <h3 className={styles.uploadedTitle}>Ընտրված ֆայլեր ({contextFiles.length})</h3>

              {contextFiles.length === 0 && (
                <div className={styles.warningMessage}>
                  <AlertCircle size={16} />
                  <span>Ֆայլեր չեն գտնվել: Խնդրում ենք վերադառնալ քայլ 3 և ընտրել ֆայլեր:</span>
                </div>
              )}

              {contextFiles.map((file) => {
                const hasFileObject = hasFile(file.id)
                return (
                  <div key={file.id} className={styles.fileItem}>
                    <div className={styles.filePreview}>
                      <div className={styles.fileThumbnail}>📄</div>
                      <div className={styles.fileName}>
                        <div className={styles.fileNameText}>{file.name}</div>
                        <div className={styles.fileSize}>{formatFileSize(file.size)}</div>

                        {/* Show upload progress during submission */}
                        {uploadProgress[file.id] !== undefined && (
                          <div className={styles.uploadProgress}>
                            <div className={styles.progressBar}>
                              <div className={styles.progressFill} style={{ width: `${uploadProgress[file.id]}%` }} />
                            </div>
                            <span>{uploadProgress[file.id]}%</span>
                          </div>
                        )}

                        {/* Show upload errors */}
                        {uploadErrors[file.id] && <div className={styles.uploadError}>❌ {uploadErrors[file.id]}</div>}

                        {/* Show status */}
                        {!uploadProgress[file.id] && !uploadErrors[file.id] && (
                          <div className={styles.fileStatus}>
                            {!hasFileObject
                              ? "⚠️ Ֆայլը բացակայում է"
                              : isSubmitting
                                ? "⏳ Սպասում վերբեռնմանը..."
                                : "✅ Պատրաստ վերբեռնման"}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}

              {!filesReady && contextFiles.length > 0 && (
                <div className={styles.warningMessage}>
                  <AlertCircle size={16} />
                  <span>Որոշ ֆայլեր բացակայում են: Խնդրում ենք վերադառնալ քայլ 3 և նորից ընտրել ֆայլերը:</span>
                </div>
              )}
            </div>

            {/* Rest of the form sections remain the same */}
            <div className={styles.formSection}>
              <h2 className={styles.sectionTitle}>Հոդվածի տեսակը</h2>
              <div className={styles.inputField}>
                <input
                  type="text"
                  className={styles.input}
                  disabled
                  value={
                    basicInfo.articleType === "type1"
                      ? "Գիտական հոդված"
                      : basicInfo.articleType === "type2"
                        ? "Ակնարկային հոդված"
                        : basicInfo.articleType === "type3"
                          ? "Կարճ հաղորդում"
                          : "Ընտրել"
                  }
                />
              </div>
            </div>

            <div className={styles.formSection}>
              <h2 className={styles.sectionTitle}>Հոդվածի վերնագիր</h2>
              <div className={styles.inputField}>
                <input type="text" className={styles.input} disabled value={basicInfo.title} />
              </div>
            </div>

            <div className={styles.inlineFields}>
              <div className={styles.fieldGroup}>
                <label className={styles.fieldLabel}>Լեզու</label>
                <div className={styles.inputField}>
                  <input type="text" className={styles.input} disabled value={basicInfo.language} />
                </div>
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.fieldLabel}>Ամսաթիվ</label>
                <div className={styles.inputField}>
                  <input type="text" className={styles.input} disabled value={basicInfo.date} />
                </div>
              </div>
            </div>

            <div className={styles.formSection}>
              <h2 className={styles.sectionTitle}>Հիմնաբառեր</h2>
              <div className={styles.keywordsContainer}>
                {basicInfo.keywords?.map((keyword, index) => (
                  <div key={index} className={styles.keywordTag}>
                    {keyword}
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.formSection}>
              <h2 className={styles.sectionTitle}>Կատեգորիա</h2>
              <div className={styles.categoryDisplay}>
                <div className={styles.selectedCategory}>✅ {basicInfo.field}</div>
              </div>
            </div>

            <div className={styles.formSection}>
              <h2 className={styles.sectionTitle}>Հրապարակման մանրամասներ</h2>
              <div className={styles.inputField}>
                <Field
                  type="text"
                  name="publicationDetails"
                  placeholder="Ավելացնել նոր մանրամասներ"
                  className={styles.input}
                />
              </div>
            </div>

            <div className={styles.formSection}>
              <h2 className={styles.sectionTitle}>Հեղինակներ</h2>
              {authorInfo.authors?.map((author, index) => (
                <div key={index} className={styles.authorCard}>
                  <div className={styles.authorInfo}>
                    <div className={styles.authorName}>{author.name}</div>
                    <div className={styles.authorDetails}>
                      <div className={styles.detailsLeft}>
                        <p>{author.affiliation}</p>
                        <p>
                          <strong>Էլ փոստ՝</strong> {author.email}
                        </p>
                        <p>
                          <strong>ORCID.</strong> {author.orcid}
                        </p>
                      </div>
                      <div className={styles.detailsRight}>
                        <p>
                          <strong>Փոխկապակցված դեր․</strong> {author.relatedRole}
                        </p>
                        <p>
                          <strong>Դերը՝</strong> {author.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.formSection}>
              <h2 className={styles.sectionTitle}>Պայմաններ և դրույթներ</h2>
              <p className={styles.termsText}>
                ԾԱՆՈԹԱԳՐՈՒԹՅՈՒՆ. Դուք չեք փոխանցում հեղինակային իրավունքը որևէ փաստաթղթի, որը տեղադրում եք SSRN-ում:
                Փոխարենը, դուք տրամադրում եք SSRN-ին ոչ-էքսկլյուզիվ իրավունք տեղադրել և տարածել ձեր աշխատանքը՝ համաձայն
                ՀՏՀ-ի «SSRN-ի ապրանքներ և ծառայություններ» բաժնի: Դուք կարող եք ցանկացած պահի հեռացնել ձեր աշխատանքը
                SSRN-ից:
              </p>
              <div className={styles.termsCheckbox}>
                <div className={styles.checkbox} onClick={() => setFieldValue("termsAccepted", !values.termsAccepted)}>
                  {values.termsAccepted && <Check size={18} className={styles.checkIcon} />}
                </div>
                <p className={styles.checkboxLabel}>
                  Ես վերանայել եմ բոլոր ֆայլերը, որոնք վերբեռնում եմ, և ունեմ դրանք վերբեռնելու իրավունք: Ես կարդացել և
                  համաձայն եմ SSRN-ի Պայմաններին և դրույթներին:
                </p>
              </div>
              <ErrorMessage name="termsAccepted" component="div" className={styles.errorMessage} />
            </div>

            <div className={styles.actionButtons}>
              <button type="button" className={styles.prevButton} onClick={onPrev} disabled={isSubmitting}>
                Նախորդ քայլը
              </button>
              <button
                type="submit"
                className={styles.submitButton}
                disabled={formikSubmitting || isSubmitting || !filesReady}
              >
                {isSubmitting ? (
                  <>
                    <UploadIcon size={16} className={styles.spinIcon} />
                    Վերբեռնվում և ներկայացվում է...
                  </>
                ) : (
                  "Ներկայացնել"
                )}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default ReviewSubmit
