import { configureStore } from "@reduxjs/toolkit";
import {thunk} from "redux-thunk";
import authUserReducer from "./reducers/authUserReducer";
import articleSubmissionReducer from "./reducers/article-submission-reducer";
import { draftSaveMiddleware } from "./middlewares/draft-save-middleware";


const store = configureStore({
  reducer: {
    auth: authUserReducer,
    articleSubmission: articleSubmissionReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk, draftSaveMiddleware),
});

export default store;
