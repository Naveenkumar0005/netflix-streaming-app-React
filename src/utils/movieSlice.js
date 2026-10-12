import {createSlice} from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlaying: [],
        popularMovie:[],
        topratedMovie:[],
        trailerVedio:[],
        topsearchMovie:[],
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
        },
        addTopsearchMovies:(state,action) =>{
            state.topsearchMovie=action.payload;
        }
    }
});

export const { addNowPlayingMovies, addPopularMovies, addTopratedMovies, addMovieTrailer,addTopsearchMovies} = movieSlice.actions;
    
export default  movieSlice.reducer;