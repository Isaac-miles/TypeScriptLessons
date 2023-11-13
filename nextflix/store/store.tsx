import { configureStore } from "@reduxjs/toolkit";
import modalReducer from '@/features/modalSlice'

const store = configureStore({
    reducer:modalReducer
      
})

export type RootState = ReturnType<typeof store.getState>

export default store;