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
    // Save to localStorage
    const state = store.getState().articleSubmission;
    localStorage.setItem('articleSubmissionDraft', JSON.stringify(state));
  }
  
  return result;
};
