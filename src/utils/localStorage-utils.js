// Utility functions for managing localStorage related to article submission

const STORAGE_KEYS = {
  DRAFT: "articleSubmissionDraft",
  STEP: "articleSubmissionStep",
  FILES: "articleSubmissionFiles",
  AUTHORS: "articleSubmissionAuthors",
  FORM_DATA: "articleSubmissionFormData",
}

export const clearAllSubmissionData = () => {
  Object.values(STORAGE_KEYS).forEach((key) => {
    localStorage.removeItem(key)
  })
  console.log("All article submission data cleared from localStorage")
}

export const saveSubmissionDraft = (data) => {
  try {
    localStorage.setItem(STORAGE_KEYS.DRAFT, JSON.stringify(data))
    console.log("Draft saved to localStorage")
  } catch (error) {
    console.error("Error saving draft:", error)
  }
}

export const loadSubmissionDraft = () => {
  try {
    const draft = localStorage.getItem(STORAGE_KEYS.DRAFT)
    return draft ? JSON.parse(draft) : null
  } catch (error) {
    console.error("Error loading draft:", error)
    return null
  }
}

export const hasSubmissionDraft = () => {
  return localStorage.getItem(STORAGE_KEYS.DRAFT) !== null
}

export const clearSubmissionDraft = () => {
  localStorage.removeItem(STORAGE_KEYS.DRAFT)
  console.log("Submission draft cleared from localStorage")
}
