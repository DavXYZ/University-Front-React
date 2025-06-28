// Middleware to save drafts automatically
export const draftSaveMiddleware = store => next => action => {
  // First, dispatch the action
  const result = next(action);

  // Then check if we need to save a draft
  const actionsToSaveDraft = [
    'article-submission/SET_FORM_DATA',
    'article-submission/ADD_AUTHOR',
    'article-submission/REMOVE_AUTHOR'
  ];

  if (actionsToSaveDraft.includes(action.type)) {
    // Defer the localStorage operation to avoid React warnings
    setTimeout(() => {
      const state = store.getState().articleSubmission;
      try {
        localStorage.setItem('articleSubmissionDraft', JSON.stringify(state));
      } catch (error) {
        console.error('Failed to save draft to localStorage:', error);
      }
    }, 0);
  }

  return result;
};