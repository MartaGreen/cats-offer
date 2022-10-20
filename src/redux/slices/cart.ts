import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardType } from "../../types/card.type";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [] as CardType[],
  reducers: {
    addItem: (state: CardType[], action: PayloadAction<CardType>) => {
      state.push(action.payload);
    },
    rmItem: () => {},
    getCartItems: () => {},
    getCartItemsCounter: () => {},
  },
});

export const { addItem, rmItem, getCartItems, getCartItemsCounter } =
  cartSlice.actions;
export default cartSlice.reducer;
