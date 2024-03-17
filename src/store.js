import { configureStore } from "@reduxjs/toolkit";  
import feedReducer from "./redux/feedSlice";
import tagReducer from "./redux/tagSlice";
import quoteReducer from "./redux/quoteSlice";
import menuReducer from "./redux/menuSlice";

const store = configureStore({
    reducer:{
        feed:feedReducer,
        tag:tagReducer,
        quote:quoteReducer,
        menu:menuReducer
    }
});

export default store;