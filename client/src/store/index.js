import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth";
import commentSlice from "./comment";
//새로고침 유지
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

const rootReducer = combineReducers({

    auth: authSlice,
    comment: commentSlice,
})

const persistConfig = {
    key: "root",
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
    devTools: process.env.NODE_ENV !== 'production',
})
 

export default store