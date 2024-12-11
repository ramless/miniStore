import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../actions/actions.jsx";

const store = configureStore({
    reducer: {
        cart: cartReducer, // Добавляем редьюсер корзины
    },
});

export default store;