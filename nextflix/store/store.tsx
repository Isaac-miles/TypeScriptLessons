import { configureStore } from "@reduxjs/toolkit";
import modalReducer from '@/features/modalSlice'
import movieReducer from '@/features/movieSlice'

const store = configureStore({
    reducer:{
    modal:modalReducer,
     movie:movieReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export default store;