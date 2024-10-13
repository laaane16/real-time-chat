import { configureStore } from "@reduxjs/toolkit";
import auth from './slices/auth/slice'
import { postApi } from "../services/PostService";


const store = configureStore({
    reducer: {
        auth,
        [postApi.reducerPath]: postApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(postApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export default store;