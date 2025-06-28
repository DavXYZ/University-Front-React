"use client"

import { createContext, useContext, useState, useRef, useCallback } from "react"

const FileContext = createContext()

export const FileProvider = ({ children }) => {
  // Use useRef to persist File objects across re-renders and navigation
  const fileObjectsRef = useRef(new Map())
  const fileInputRef = useRef(null) // ✅ Add this
  const [fileMetadata, setFileMetadata] = useState([])

  // Add File objects and metadata
  const addFiles = useCallback((filesWithMetadata) => {
    const newMetadata = []
    
    filesWithMetadata.forEach(({ file, metadata }) => {
      // Store File object in ref (persists across re-renders)
      fileObjectsRef.current.set(metadata.id, file)
      newMetadata.push(metadata)
    })

    setFileMetadata(prev => [...prev, ...newMetadata])
    
    console.log("Files added to context:", {
      newFiles: newMetadata.length,
      totalFiles: fileObjectsRef.current.size,
      fileIds: Array.from(fileObjectsRef.current.keys())
    })
  }, [])

  // Remove a file
  const removeFile = useCallback((fileId) => {
    fileObjectsRef.current.delete(fileId)
    setFileMetadata(prev => prev.filter(meta => meta.id !== fileId))
    
    console.log("File removed from context:", {
      removedId: fileId,
      remainingFiles: fileObjectsRef.current.size
    })
  }, [])

  // Get a specific File object
  const getFileObject = useCallback((fileId) => {
    const file = fileObjectsRef.current.get(fileId)
    console.log(`Getting file object for ${fileId}:`, file ? "Found" : "Not found")
    return file
  }, [])

  // Get all File objects
  const getAllFileObjects = useCallback(() => {
    return fileObjectsRef.current
  }, [])

  // Clear all files
  const clearAllFiles = useCallback(() => {
    fileObjectsRef.current.clear()
    setFileMetadata([])
    console.log("All files cleared from context")
  }, [])

  // Get file metadata
  const getFileMetadata = useCallback(() => {
    return fileMetadata
  }, [fileMetadata])

  // Check if file exists
  const hasFile = useCallback((fileId) => {
    return fileObjectsRef.current.has(fileId)
  }, [])

  // Get files ready for upload (with both metadata and File objects)
  const getFilesForUpload = useCallback(() => {
    return fileMetadata.map(metadata => ({
      metadata,
      file: fileObjectsRef.current.get(metadata.id)
    })).filter(item => item.file) // Only include files that have File objects
  }, [fileMetadata])

  const value = {
    fileInputRef, // ✅ expose ref
    addFiles,
    removeFile,
    getFileObject,
    getAllFileObjects,
    clearAllFiles,
    getFileMetadata,
    hasFile,
    getFilesForUpload,
    fileCount: fileMetadata.length
  }

  return (
    <FileContext.Provider value={value}>
      {children}
    </FileContext.Provider>
  )
}

export const useFileContext = () => {
  const context = useContext(FileContext)
  if (!context) {
    throw new Error("useFileContext must be used within a FileProvider")
  }
  return context
}
