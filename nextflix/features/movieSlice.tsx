import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/store/store";
import { Movies } from "@/types";

type InitialStateType = {
    movies:Movies[]
    movie:Movies | null
}

const initialMovieState:InitialStateType = {
    movies:[],
    movie:null
}


const movieSlice = createSlice({
    name: 'movie',
     initialState:initialMovieState,

    reducers :{
        openMovie:(state, action:PayloadAction<Movies>)=>{
            return {...state, movie:action.payload}
            // return state.movie
        }
    }
})


export const movieState = (state:RootState)=>state.movie.movie
export const {openMovie} = movieSlice.actions
export default movieSlice.reducer