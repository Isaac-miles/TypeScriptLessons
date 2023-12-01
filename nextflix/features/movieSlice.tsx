import { PayloadAction, createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@/store/store";
import { Movies } from "@/types";
import getMoviesData from "@/utils/getData";

type InitialStateType = {
    errorMessage:string | undefined
    status: string
    movies:Movies[]
    movie:Movies | null
}

const initialMovieState:InitialStateType = {
    errorMessage:undefined,
    status: 'idlle',
    movies:[],
    movie:null
}

export const fetchMovies = createAsyncThunk('movies/getMovies',async () => {
    const {
        netflixOriginals,
        trendingNow,
        topRated,
        actionMovies,
        comedyMovies,
        horrorMovies,
        romanceMovies,
        documentaries
      
      } = await getMoviesData();
      return {netflixOriginals,trendingNow,topRated,actionMovies,comedyMovies,horrorMovies,romanceMovies,documentaries}
})

const movieSlice = createSlice({
    name: 'movie',
     initialState:initialMovieState,

    reducers :{
        openMovie:(state, action:PayloadAction<Movies>)=>{
            return {...state, movie:action.payload}
            // return state.movie
        }
    },
    extraReducers(builder){
        builder
            .addCase(fetchMovies.pending, (state,action)=>{
                state.status = 'loading'
            })
            .addCase(fetchMovies.fulfilled, (state,action)=>{
                state.status = 'succeeded'
                // add our movies here
                console.log('movvvv',action.payload)

            })
            .addCase(fetchMovies.rejected,(state,action)=>{
                state.status = 'failed'
                state.errorMessage = action.error.message
            })
    }
})


export const movieState = (state:RootState)=>state.movie.movie
export const statusState = (state:RootState)=>state.movie.status
export const errorState = (state:RootState)=>state.movie.errorMessage
export const {openMovie} = movieSlice.actions
export default movieSlice.reducer