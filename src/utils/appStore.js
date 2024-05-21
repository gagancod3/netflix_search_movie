import {configureStore} from "@reduxjs/toolkit";
import  userReducer  from "./userSlice";
import moviesReducer from "./movieSlice";
import searchPageReducer from "./showSearchPageSlice";
import languageReducer from "./languageSlice";
import searchedMoviesReducer from "./searchMovieSlice";
/*
configureStore()
A friendly abstraction over the standard Redux createStore() function. 
*/

const appStore = configureStore(
// A friendly abstraction over the standard Redux createStore() function.
{
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        searchPage: searchPageReducer,
        language: languageReducer,
        searchMovie:searchedMoviesReducer, 

    },

});

export default appStore;