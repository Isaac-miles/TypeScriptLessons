import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/store/store";
const initialState = {
    modal:false
}

const modalSlice = createSlice({
    name: 'modal',
     initialState:initialState,

    reducers :{

        openModal:(state, action:PayloadAction<boolean>)=>{
            return state
        }
    }
})


export const modalState = (state:RootState)=> state.modal
export default modalSlice.reducer