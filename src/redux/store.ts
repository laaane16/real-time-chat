import { configureStore } from "@reduxjs/toolkit";
import auth from './slices/auth/slice'


const store = configureStore({
    reducer: {
        auth
    }
})

export type RootState = ReturnType<typeof store.getState>
export default store;