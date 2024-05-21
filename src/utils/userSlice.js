import { createSlice } from "@reduxjs/toolkit";


/*
createSlice() - 
A function that accepts an initial state, an object full of reducer functions, and a "slice name", and
automatically generates action creators and action types that correspond to the reducers and state.
*/
const userSlice = createSlice(
    {
        //slice name
        name:'user',
        initialState: null,
        // reducer functions
        reducers:{
            addUser: (state, action) => {
                return action.payload;
            },
            removeUser: (state, action) => {
                return null;
            }
        }
    }
)

export const {addUser, removeUser} = userSlice.actions;

export default  userSlice.reducer;