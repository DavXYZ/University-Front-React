import { configureStore } from "@reduxjs/toolkit";
import authUserReducer from "./reducers/authUserReducer";


const store = configureStore({
    reducer: {
        auth:authUserReducer,
    }
})

export default store;