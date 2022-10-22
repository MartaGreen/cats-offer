import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./slices/cart.slice";
import cardsReducer from "./slices/cards.slice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    cards: cardsReducer,
  },
});

export default store;
