// Middleware to check for non-serializable values
export const serializationCheckMiddleware = (store) => (next) => (action) => {
  // Check if action contains non-serializable data
  if (action.type === "article-submission/SET_FORM_DATA" && action.formSection === "fileUpload") {
    if (action.data.files) {
      const hasNonSerializable = action.data.files.some(
        (file) => file.file instanceof File || file.lastModifiedDate instanceof Date || typeof file.file === "object",
      )

      if (hasNonSerializable) {
        console.warn("Non-serializable data detected in fileUpload action, cleaning...")

        // Clean the action data
        action.data = {
          ...action.data,
          files: action.data.files.map((file) => ({
            id: file.id || `${file.name}-${file.lastModified}-${Date.now()}`,
            name: file.name,
            size: file.size,
            type: file.type,
            lastModified: file.lastModified,
            isSelected: file.isSelected || true,
            dateAdded: file.dateAdded || new Date().toISOString(),
          })),
        }
      }
    }
  }

  return next(action)
}
