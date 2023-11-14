import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/store/store";

const initialState = {
    modal:false
}

const modalSlice = createSlice({
    name: 'modal',
     initialState:initialState,

    reducers :{
        openCloseModal:(state)=>{
                return  {...state, modal:!state.modal}
        }
    }
})


export const modalState = (state:RootState)=>state.modal.modal
export const {openCloseModal} = modalSlice.actions
export default modalSlice.reducer