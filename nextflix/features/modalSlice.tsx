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
         if(action.payload){
            state.modal = action.payload
         }
        },
        closeModal:(state, action:PayloadAction<boolean>)=>{
            if(action.payload){
                state.modal = action.payload
                return state
             }
          
             console.log(action.payload)
             console.log(state.modal)
        }
    }
})


export const modalState = (state:RootState)=>state.modal.modal
export const {openModal, closeModal} = modalSlice.actions
export default modalSlice.reducer