import {createSlice} from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlaying: [],
        popularMovie:[],
        topratedMovie:[],
        trailerVedio:[],
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlaying = action.payload;
        },
        addPopularMovies:(state, action) => {
            state.popularMovie=action.payload;
        },
        addTopratedMovies:(state, action) => {
            state.topratedMovie=action.payload;
        },       
        addMovieTrailer:(state,action) =>{
            state.trailerVedio=action.payload;
        }
    }
});

export const { addNowPlayingMovies, addPopularMovies, addTopratedMovies, addMovieTrailer} = movieSlice.actions;
    
export default  movieSlice.reducer;