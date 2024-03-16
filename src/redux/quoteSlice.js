import { createSlice } from "@reduxjs/toolkit";

const quoteSlice = createSlice({
    name:'quoteSlice',
    initialState:{
        quote:[]
    },
    reducers:{
        setlikedQuote: (state, action) => {
            const existingQuote = state.quote.find(quote => quote._id === action.payload._id);
            if (!existingQuote) {
                return {
                    ...state,
                    quote: [...state.quote, action.payload],
                };
            }
            return state;
        },
        setdisLikedQuote:(state,action)=>{
            return {
                ...state,
                quote: state.quote.filter((quote) => quote._id !== action.payload._id),
            };
        }
    }
})

export const {setlikedQuote,setdisLikedQuote} = quoteSlice.actions;
export default quoteSlice.reducer;