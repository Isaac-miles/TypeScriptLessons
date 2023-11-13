import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/store/store";

const initialState = {
    modal:false
}
// export const modalState = {
//     key: 'modalState',
//     default:false
// }
// export const movieState = {
//     key: 'movieState',
//     default:null
// }

const modalSlice = createSlice({
    name: 'modal',
     initialState:initialState,

    reducers :{

        openModal:(state, action:PayloadAction<boolean>)=>{
            return state
        }
    }
})


export const modalState = (state:RootState)=>state.modal
export default modalSlice.reducer