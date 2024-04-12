import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
    name:"movies",
    initialState:{
        movie:null,
        trailer:null,
        movieList:null
    },
    reducers:{
        addMovie:(state,action)=>{
            state.movie = action.payload
        },
        addTrailer:(state,action)=>{
            state.trailer = action.payload
        },


    }
})

export const {addMovie,addTrailer, } = MovieSlice.actions
export default MovieSlice.reducer