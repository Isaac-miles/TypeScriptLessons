import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/store/store";
import { Movies } from "@/types";

type InitialStateType = {
    movie:Movies | null
}

const initialState = {
    key:'movieState',
    movie: null
}


const movieSlice = createSlice({
    name: 'movie',
     initialState:initialState,

    reducers :{

        movie:(state, action:PayloadAction<Movies>)=>{
            return state
        }
    }
})


export const movieState = (state:RootState)=>state.modal
export default movieSlice.reducer