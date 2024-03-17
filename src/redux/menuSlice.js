// menu.js

import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        activeMenu: false
    },
    reducers: {
        toggleActiveMenu: (state) => {
            return { ...state, activeMenu: !state.activeMenu };
        }
    }
});

export const { setActiveMenu, toggleActiveMenu } = menuSlice.actions;
export default menuSlice.reducer;
