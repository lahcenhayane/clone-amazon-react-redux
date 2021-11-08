import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSilce";


export default configureStore({
    reducer:{
        products:productReducer
    }
})