import { createSlice } from "@reduxjs/toolkit";

const searchMovieSlice = createSlice(
    {
        name: 'searchMovie',
        initialState: {
            searchMovieResults: null,
            searchQuery: null,

        },
        reducers:{
            searchedMovies:  (state,action) =>{
                state.searchMovieResults = action.payload;
            },
            searchQuery: (state, action) => {
                state.searchQuery = action.payload;
            },
        }
    }
)

export const {searchedMovies, searchQuery} = searchMovieSlice.actions;

export default searchMovieSlice.reducer;