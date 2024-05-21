import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice(
    {
        name:'movies',
        initialState:{
            nowPlayingMovies: null,
            trailer: null,
            movieCategoryHeader: {
                nowPlaying : null,
                nowPopular : null,
                nowTopRated: null,
                nowUpcoming: null,

            },
            nowPopularMovies: null,
            nowTopRatedMovies: null,
            nowUpcomingMovies: null,
        },
        reducers: {
            addNowPlayingMovies: (state, action) =>{
                state.nowPlayingMovies = action.payload; 
            },
            addNowPlayingHeader: (state, action) => {
                state.movieCategoryHeader.nowPlaying = action.payload;
            },
            addTrailer: (state, action) => {
                state.trailer = action.payload;
            },
            addPopularMovies: (state, action) =>{
                state.nowPopularMovies = action.payload; 
            },
            addPopularHeader: (state, action) => {
                state.movieCategoryHeader.nowPopular = action.payload;
            },
            addTopRatedMovies: (state, action) =>{
                state.nowTopRatedMovies = action.payload; 
            },
            addTopRatedHeader: (state, action) => {
                state.movieCategoryHeader.nowTopRated = action.payload;
            },
            addUpcomingMovies: (state, action) =>{
                state.nowUpcomingMovies = action.payload; 
            },
            addUpcomingHeader: (state, action) => {
                state.movieCategoryHeader.nowUpcoming = action.payload;
            },

        }
    }
)
console.log(movieSlice.actions);
// Object Destructuring from actions
export const {addNowPlayingMovies, addTrailer, addPopularMovies, addTopRatedMovies, addUpcomingMovies, addNowPlayingHeader, addPopularHeader, addTopRatedHeader, addUpcomingHeader } = movieSlice.actions;

export default movieSlice.reducer;