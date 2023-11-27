import { configureStore } from "@reduxjs/toolkit";
import wishlistSlice from './slices/wishlistSlice';
import newCartSlice from "./slices/newCartSlice";


const store = configureStore({
    reducer:{
        wishlistReducer:wishlistSlice,
        cartReducer:newCartSlice
        
    }
})

export default store; 