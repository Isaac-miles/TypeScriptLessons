import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/store/store";
import { Movies } from "@/types";

type InitialStateType = {
    movie:Movies | null
}

const initialMovieState:InitialStateType = {
    movie:null
}


const movieSlice = createSlice({
    name: 'movie',
     initialState:initialMovieState,

    reducers :{

        movie:(state, action:PayloadAction<Movies>)=>{
            state.movie = action.payload
            // return state.movie
        }
    }
})


export const movieState = (state:RootState)=>state.movie
export default movieSlice.reducer