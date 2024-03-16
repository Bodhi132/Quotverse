import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
    name:'feed',
    initialState:{
        activeFeed:'Home'
    },
    reducers:{
        setActiveFeed:(state,action)=>{
            return {...state, activeFeed:action.payload};
        }
    }
})

export const {setActiveFeed} = feedSlice.actions;
export default feedSlice.reducer;