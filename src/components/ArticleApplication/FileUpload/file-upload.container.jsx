"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { useDispatch, connect } from "react-redux"
import { setFormData,saveFormDraft, validateStep} from "../../../redux/reducers/article-submission-reducer"
import { useFileContext } from "../../../contexts/file-context"
import FileUpload from "./file-upload"

const FileUploadContainer = ({ onNext, onPrev,saveFormDraft, validateStep,fileUpload,formErrors }) => {
  const dispatch = useDispatch()
  const fileInputRef = useRef(null)
  const { 
    addFiles, 
    removeFile, 
    getFileMetadata, 
    hasFile, 
    clearAllFiles,
    fileCount 
  } = useFileContext()

  const [dragActive, setDragActive] = useState(false)
  const [errors, setErrors] = useState({})

  // Get current file metadata from context
  const currentFiles = getFileMetadata()

  // Create clean metadata object
  const createFileMetadata = useCallback((file) => ({
    id: `${file.name}-${file.lastModified}-${Date.now()}`,
    name: file.name,
    size: file.size,
    type: file.type,
    lastModified: file.lastModified,
    isSelected: true,
    dateAdded: new Date().toISOString(),
  }), [])

  // Initialize from Redux on mount
  useEffect(() => {
    console.log("FileUpload mounted, current state:", {
      reduxFiles: fileUpload?.files?.length || 0,
      contextFiles: fileCount
    })
  }, [fileUpload, fileCount])

  // Handle form errors
  useEffect(() => {
    if (formErrors?.fileUpload) {
      setErrors(formErrors.fileUpload)
    }
  }, [formErrors])

  // Save metadata to Redux
  const saveToRedux = useCallback((metadata) => {
    const cleanMetadata = metadata.map(item => ({
      id: item.id,
      name: item.name,
      size: item.size,
      type: item.type,
      lastModified: item.lastModified,
      isSelected: item.isSelected,
      dateAdded: item.dateAdded,
    }))

    dispatch(setFormData("fileUpload", { files: cleanMetadata }))
  }, [dispatch])

  // Sync context metadata with Redux
  useEffect(() => {
    if (currentFiles.length > 0) {
      saveToRedux(currentFiles)
    }
  }, [currentFiles, saveToRedux])

  const handleDrag = useCallback((e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(e.type === "dragenter" || e.type === "dragover")
  }, [])

  const handleDrop = useCallback((e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files)
    }
  }, [handleFiles])

  const handleFileSelect = useCallback((e) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(e.target.files)
    }
  }, [handleFiles])

  const handleFiles = useCallback((fileList) => {
    const newFiles = Array.from(fileList)
    setErrors({})

    // Validate file types
    const validFiles = newFiles.filter((file) => {
      const fileType = file.type.toLowerCase()
      return (
        fileType === "application/pdf" ||
        fileType === "application/msword" ||
        fileType === "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      )
    })

    if (validFiles.length !== newFiles.length) {
      setErrors(prev => ({ ...prev, fileType: "Միայն PDF և Word ֆայլերն են թույլատրված" }))
    }

    // Validate file size (100MB max)
    const validSizeFiles = validFiles.filter((file) => file.size <= 100 * 1024 * 1024)

    if (validSizeFiles.length !== validFiles.length) {
      setErrors(prev => ({ ...prev, fileSize: "Ֆայլի չափը չպետք է գերազանցի 100 ՄԲ" }))
    }

    // Check for duplicates
    const newValidFiles = validSizeFiles.filter((file) => {
      return !currentFiles.some(existing =>
        existing.name === file.name && 
        existing.size === file.size && 
        existing.lastModified === file.lastModified
      )
    })

    if (newValidFiles.length !== validSizeFiles.length) {
      setErrors(prev => ({ ...prev, duplicate: "Որոշ ֆայլեր արդեն ավելացված են" }))
    }

    if (newValidFiles.length > 0) {
      addFilesToContext(newValidFiles)
    }
  }, [addFilesToContext, currentFiles])

  const addFilesToContext = useCallback((newFiles) => {
    const filesWithMetadata = newFiles.map(file => ({
      file,
      metadata: createFileMetadata(file)
    }))

    addFiles(filesWithMetadata)

    // Clear file input
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }

    console.log("Added files to context:", filesWithMetadata.length)
  }, [addFiles, createFileMetadata])

  const handleRemoveFile = useCallback((fileId) => {
    removeFile(fileId)
  }, [removeFile])

  const handleClearAll = useCallback(() => {
    clearAllFiles()
    setErrors({})
    dispatch(setFormData("fileUpload", { files: [] }))
  }, [clearAllFiles, dispatch])

  const handleNext = useCallback(() => {
    if (currentFiles.length === 0) {
      setErrors({ files: "Խնդրում ենք ընտրել առնվազն մեկ ֆայլ" })
      return
    }

    // Check if all files have File objects
    const missingFiles = currentFiles.filter(meta => !hasFile(meta.id))
    if (missingFiles.length > 0) {
      setErrors({ files: "Որոշ ֆայլեր բացակայում են: Խնդրում ենք նորից ընտրել ֆայլերը:" })
      return
    }

    dispatch(saveFormDraft())

    if (dispatch(validateStep(2))) {
      console.log("Moving to next step with files:", currentFiles.length)
      onNext()
    }
  }, [currentFiles, hasFile, dispatch, onNext])

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  const getFileIcon = (fileType) => {
    if (fileType.includes("pdf")) return "📄"
    if (fileType.includes("word") || fileType.includes("document")) return "📝"
    return "📎"
  }

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
    handleNext={handleNext}
    formatFileSize={formatFileSize}
    handleRemoveFile={handleRemoveFile}
    currentFiles={currentFiles}
    hasFile={hasFile}
    saveFormDraft={saveFormDraft}
    />
  )
}

let mapStateToProps = (state) => ({
    fileUpload:state.articleSubmission.fileUpload,
    formErrors:state.articleSubmission.formErrors
})

export default connect(mapStateToProps,{saveFormDraft, validateStep })(FileUploadContainer)
