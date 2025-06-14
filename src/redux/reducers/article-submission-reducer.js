// Action Types
const SET_FORM_DATA = "article-submission/SET_FORM_DATA"
const SET_CURRENT_STEP = "article-submission/SET_CURRENT_STEP"
const SAVE_DRAFT = "article-submission/SAVE_DRAFT"
const LOAD_DRAFT = "article-submission/LOAD_DRAFT"
const CLEAR_FORM = "article-submission/CLEAR_FORM"
const SET_SUBMISSION_STATUS = "article-submission/SET_SUBMISSION_STATUS"
const SET_FORM_ERRORS = "article-submission/SET_FORM_ERRORS"
const ADD_AUTHOR = "article-submission/ADD_AUTHOR"
const REMOVE_AUTHOR = "article-submission/REMOVE_AUTHOR"
const RESET_SUBMISSION = "article-submission/RESET_SUBMISSION"
const SET_UPLOAD_PROGRESS = "article-submission/SET_UPLOAD_PROGRESS"

// Initial State
const initialState = {
  currentStep: 0,
  isSubmitted: false,
  isSubmitting: false,
  submissionError: null,
  formErrors: {},
  isDraft: false,
  lastSaved: null,
  uploadProgress: {},

  // Basic Info Step
  basicInfo: {
    isAuthor: true,
    journal: "",
    journalSeries: "",
    articleType: "",
    title: "",
    language: "Անգլերեն",
    date: "",
    field: "Կիրառական գիտություններ",
    keywords: ["Տեղեկատվական համակարգեր"],
  },

  // Author Info Step
  authorInfo: {
    educationLevel: "",
    biography: "",
    authors: [
      {
        name: "Անուն Ազգանուն",
        email: "help@gmail.com",
        orcid: "ORCID -ը չի տրամադրվել SSRN -ին",
        role: "Կապ Հեղինակ",
        affiliation: "SSRN -ին պատկանելություն չի տրամադրում",
        relatedRole: "դերը չի տրամադրվել SSRN -ին",
      },
    ],
  },

  // File Upload Step
  fileUpload: {
    files: [],
    uploadProgress: {},
  },

  // Review Submit Step
  reviewSubmit: {
    termsAccepted: false,
    publicationDetails: "",
  },
}

// Reducer
const articleSubmissionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FORM_DATA:
      // Special handling for fileUpload to ensure no File objects reach Redux
      if (action.formSection === "fileUpload" && action.data.files) {
        const serializedFiles = action.data.files.map((file) => {
          // If it's already serialized metadata, return as-is
          if (!file.file) return file

          // If it contains a File object, extract only serializable properties
          return {
            id: file.id,
            name: file.name,
            size: file.size,
            type: file.type,
            lastModified: file.lastModified,
            isSelected: file.isSelected,
            dateAdded: file.dateAdded,
          }
        })

        return {
          ...state,
          [action.formSection]: {
            ...state[action.formSection],
            ...action.data,
            files: serializedFiles,
          },
          lastSaved: new Date().toISOString(),
        }
      }

      // Default handling for other form sections
      return {
        ...state,
        [action.formSection]: {
          ...state[action.formSection],
          ...action.data,
        },
        lastSaved: new Date().toISOString(),
      }

    case SET_CURRENT_STEP:
      return {
        ...state,
        currentStep: action.step,
      }

    case SAVE_DRAFT:
      return {
        ...state,
        isDraft: true,
        lastSaved: new Date().toISOString(),
      }

    case LOAD_DRAFT:
      return {
        ...action.draftData,
        lastSaved: action.draftData.lastSaved || new Date().toISOString(),
      }

    case CLEAR_FORM:
      return {
        ...initialState,
        currentStep: 0,
        isSubmitted: false,
        isSubmitting: false,
        submissionError: null,
      }

    case SET_SUBMISSION_STATUS:
      return {
        ...state,
        isSubmitting: action.isSubmitting,
        isSubmitted: action.isSubmitted,
        submissionError: action.error,
      }

    case SET_UPLOAD_PROGRESS:
      return {
        ...state,
        uploadProgress: {
          ...state.uploadProgress,
          ...action.progress,
        },
      }

    case SET_FORM_ERRORS:
      return {
        ...state,
        formErrors: {
          ...state.formErrors,
          [action.formSection]: action.errors,
        },
      }

    case ADD_AUTHOR:
      return {
        ...state,
        authorInfo: {
          ...state.authorInfo,
          authors: [...state.authorInfo.authors, action.author],
        },
        lastSaved: new Date().toISOString(),
      }

    case REMOVE_AUTHOR:
      return {
        ...state,
        authorInfo: {
          ...state.authorInfo,
          authors: state.authorInfo.authors.filter((_, index) => index !== action.index),
        },
        lastSaved: new Date().toISOString(),
      }

    case RESET_SUBMISSION:
      return {
        ...initialState,
        currentStep: 0,
      }

    default:
      return state
  }
}

// Helper function to ensure data is serializable
const ensureSerializable = (formSection, data) => {
  if (formSection === "fileUpload" && data.files) {
    return {
      ...data,
      files: data.files.map((file) => {
        // If it's already serialized metadata, return as-is
        if (!file.file) return file

        // If it contains a File object, extract only serializable properties
        return {
          id: file.id || `${file.name}-${file.lastModified}-${Date.now()}`,
          name: file.name,
          size: file.size,
          type: file.type,
          lastModified: file.lastModified,
          isSelected: file.isSelected || true,
          dateAdded: file.dateAdded || new Date().toISOString(),
        }
      }),
    }
  }
  return data
}

// Action Creators
export const setFormData = (formSection, data) => ({
  type: SET_FORM_DATA,
  formSection,
  data: ensureSerializable(formSection, data),
})

export const setCurrentStep = (step) => ({
  type: SET_CURRENT_STEP,
  step,
})

export const saveDraft = () => ({
  type: SAVE_DRAFT,
})

export const loadDraft = (draftData) => ({
  type: LOAD_DRAFT,
  draftData,
})

export const clearForm = () => ({
  type: CLEAR_FORM,
})

export const setSubmissionStatus = (isSubmitting, isSubmitted, error = null) => ({
  type: SET_SUBMISSION_STATUS,
  isSubmitting,
  isSubmitted,
  error,
})

export const setUploadProgress = (progress) => ({
  type: SET_UPLOAD_PROGRESS,
  progress,
})

export const setFormErrors = (formSection, errors) => ({
  type: SET_FORM_ERRORS,
  formSection,
  errors,
})

export const addAuthor = (author) => ({
  type: ADD_AUTHOR,
  author,
})

export const removeAuthor = (index) => ({
  type: REMOVE_AUTHOR,
  index,
})

export const resetSubmission = () => ({
  type: RESET_SUBMISSION,
})

// Thunks
import { clearAllSubmissionData, saveSubmissionDraft, loadSubmissionDraft } from "../../utils/localStorage-utils"
import {articleApplicationApi} from '../../api/api'

// Updated article application API to handle files


// Update the saveFormDraft thunk
export const saveFormDraft = () => (dispatch, getState) => {
  const state = getState().articleSubmission
  saveSubmissionDraft(state)
  dispatch(saveDraft())
}

// Update the loadFormDraft thunk
export const loadFormDraft = () => (dispatch) => {
  try {
    const draftData = loadSubmissionDraft()
    if (draftData) {
      dispatch(loadDraft(draftData))
      return true
    }
    return false
  } catch (error) {
    console.error("Error loading draft:", error)
    return false
  }
}

// New thunk to submit form with files using your API
export const submitFormWithFiles = (formData, filesForUpload) => async (dispatch) => {
  dispatch(setSubmissionStatus(true, false))

  try {
    console.log("Starting form submission with files...")
    console.log("Form data:", formData)
    console.log("Files for upload:", filesForUpload)

    // Validate that we have files
    if (!filesForUpload || filesForUpload.length === 0) {
      throw new Error("Ֆայլեր չեն գտնվել ներկայացման համար")
    }

    // Initialize progress for all files
    const initialProgress = {}
    filesForUpload.forEach((fileItem) => {
      initialProgress[fileItem.metadata.id] = 0
    })
    dispatch(setUploadProgress(initialProgress))

    // Create a custom axios config with progress tracking
    const customApi = {
      async sendArticleApplication(formData, files) {
        try {
          const submitData = new FormData()

          // Add form data as JSON
          const applicationData = {
            basicInfo: formData.basicInfo,
            authorInfo: formData.authorInfo,
            reviewSubmit: formData.reviewSubmit,
          }

          submitData.append("applicationData", JSON.stringify(applicationData))

          // Add actual files to FormData
          files.forEach((fileItem, index) => {
            if (fileItem.file) {
              submitData.append(`article_files`, fileItem.file)
              submitData.append(`fileNames[${index}]`, fileItem.metadata.name)
              submitData.append(`fileTypes[${index}]`, fileItem.metadata.type)
              submitData.append(`fileIds[${index}]`, fileItem.metadata.id)
            }
          })

          // Log FormData contents for debugging
          console.log("FormData contents:")
          for (const [key, value] of submitData.entries()) {
            console.log(`${key}:`, value instanceof File ? `File: ${value.name}` : value)
          }

          // Use fetch with manual progress tracking or axios
          const response = await fetch("/art_app/article-applications", {
            method: "POST",
            body: submitData,
            credentials: "include",
          })

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
          }

          return await response.json()
        } catch (error) {
          console.error("Error sending Application: ", error)
          throw error
        }
      },
    }

    // Simulate progress updates during upload
    const progressInterval = setInterval(() => {
      const currentProgress = { ...initialProgress }
      let allComplete = true

      filesForUpload.forEach((fileItem) => {
        const currentValue = currentProgress[fileItem.metadata.id] || 0
        if (currentValue < 100) {
          currentProgress[fileItem.metadata.id] = Math.min(currentValue + 10, 100)
          allComplete = false
        }
      })

      dispatch(setUploadProgress(currentProgress))

      if (allComplete) {
        clearInterval(progressInterval)
      }
    }, 200)

    // Call your API
    const response = await customApi.sendArticleApplication(formData, filesForUpload)

    // Clear the progress interval
    clearInterval(progressInterval)

    // Set final progress to 100% for all files
    const finalProgress = {}
    filesForUpload.forEach((fileItem) => {
      finalProgress[fileItem.metadata.id] = 100
    })
    dispatch(setUploadProgress(finalProgress))

    console.log("Form submitted successfully:", response)

    // If successful
    dispatch(setSubmissionStatus(false, true))

    // Clear ALL localStorage data related to the submission
    clearAllSubmissionData()

    console.log("Form submitted successfully and all localStorage cleared")

    return { success: true, data: response }
  } catch (error) {
    dispatch(setSubmissionStatus(false, false, error.message || "Submission failed"))
    console.error("Submission failed:", error)
    return { success: false, error: error.message }
  }
}

// Keep the original submitForm thunk for backward compatibility
export const submitForm = (formData) => async (dispatch) => {
  dispatch(setSubmissionStatus(true, false))

  try {
    const response = await articleApplicationApi.sendArticleApplication(formData)
    console.log(response)

    // If successful
    dispatch(setSubmissionStatus(false, true))

    // Clear ALL localStorage data related to the submission
    clearAllSubmissionData()

    console.log("Form submitted successfully and all localStorage cleared")

    return true
  } catch (error) {
    dispatch(setSubmissionStatus(false, false, error.message || "Submission failed"))
    console.error("Submission failed:", error)
    return false
  }
}

// Update the startNewSubmission thunk
export const startNewSubmission = () => (dispatch) => {
  // Clear all localStorage data
  clearAllSubmissionData()

  // Reset the form state completely
  dispatch(resetSubmission())

  console.log("New submission started - all data cleared")
}

export const validateStep = (step) => (dispatch, getState) => {
  const state = getState().articleSubmission
  let isValid = true
  const errors = {}

  switch (step) {
    case 0: // Basic Info
      if (!state.basicInfo.journal) {
        errors.journal = "Խնդրում ենք ընտրել հանդեսը"
        isValid = false
      }
      if (!state.basicInfo.journalSeries) {
        errors.journalSeries = "Խնդրում ենք ընտրել հանդեսի սերիան"
        isValid = false
      }
      if (!state.basicInfo.articleType) {
        errors.articleType = "Խնդրում ենք ընտրել հոդվածի տեսակը"
        isValid = false
      }
      if (!state.basicInfo.title) {
        errors.title = "Խնդրում ենք ներկայացնել հոդվածի վերնագիրը"
        isValid = false
      }
      if (!state.basicInfo.date) {
        errors.date = "Խնդրում ենք ընտրել ամսաթիվը"
        isValid = false
      }
      if (state.basicInfo.keywords.length === 0) {
        errors.keywords = "Խնդրում ենք ավելացնել առնվազն մեկ հիմնաբառ"
        isValid = false
      }
      break

    case 1: // Author Info
      if (!state.authorInfo.educationLevel) {
        errors.educationLevel = "Կրթական աստիճանը պարտադիր է"
        isValid = false
      }
      if (!state.authorInfo.biography) {
        errors.biography = "Կենսագրությունը պարտադիր է"
        isValid = false
      }
      break

    case 2: // File Upload
      if (state.fileUpload.files.length === 0) {
        errors.files = "Խնդրում ենք ներբեռնել առնվազն մեկ ֆայլ"
        isValid = false
      }
      break

    case 3: // Review Submit
      if (!state.reviewSubmit.termsAccepted) {
        errors.termsAccepted = "Խնդրում ենք ընդունել պայմանները և դրույթները"
        isValid = false
      }
      break

    default:
      break
  }

  if (!isValid) {
    dispatch(setFormErrors(getFormSectionByStep(step), errors))
  }

  return isValid
}

// Helper function to get form section name by step
const getFormSectionByStep = (step) => {
  switch (step) {
    case 0:
      return "basicInfo"
    case 1:
      return "authorInfo"
    case 2:
      return "fileUpload"
    case 3:
      return "reviewSubmit"
    default:
      return "basicInfo"
  }
}

export default articleSubmissionReducer
