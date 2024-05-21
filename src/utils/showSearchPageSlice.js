import { createSlice } from "@reduxjs/toolkit";

const showSearchPageSlice = createSlice(
    {
        name:'isSearchPage',
        initialState:{ 
            isSearchPage: false},
        reducers:{
            changeSearchPageState : (state) => {
                    state.isSearchPage = !state.isSearchPage;
            },
        },
    }
);

export const {changeSearchPageState} = showSearchPageSlice.actions;

export default showSearchPageSlice.reducer;