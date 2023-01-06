import {configureStore} from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import cartReducer from "./cartSlice";
import searchReducer from "./searchSlice";

const store = configureStore({
    reducer: {
        product: productReducer,
        cart: cartReducer,
        search: searchReducer
    }
});

export default store;