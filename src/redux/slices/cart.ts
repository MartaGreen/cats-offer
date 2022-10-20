import { createSlice } from "@reduxjs/toolkit";
import { CardType } from "../../types/card.type";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [] as CardType[],
  reducers: {
    addItem: () => {},
    rmItem: () => {},
    getCartItems: () => {},
    getCartItemsCounter: () => {},
  },
});

export const { addItem, rmItem, getCartItems, getCartItemsCounter } =
  cartSlice.actions;
export default cartSlice.reducer;
