import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../actions/actions.jsx";

const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

export default store;