import { createSlice } from "@reduxjs/toolkit";

const tagSlice = createSlice({
    name: "tag",
    initialState: {
        activeTag: "",
    },
    reducers: {
        setActiveTag: (state, action) => {
            return { ...state, activeTag: action.payload };
        },
    },
});

export const { setActiveTag } = tagSlice.actions;
export default tagSlice.reducer;
