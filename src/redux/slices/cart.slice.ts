import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { CardType } from "../../types/card.type";
import {
  getStorageData,
  setStorageData,
  updateStorage,
} from "../shared/storage";

const updateCartStorage = (data: CardType[]) => {
  setStorageData("cart", data);
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: getStorageData("cart"),
  reducers: {
    addItem: (state: CardType[], action: PayloadAction<CardType>) => {
      state.push(action.payload);
      updateCartStorage(state);
    },
    rmItem: (state: CardType[], action: PayloadAction<CardType>) => {
      const updatedState = state.filter(
        (item: CardType) => item.id !== action.payload.id
      );
      updateCartStorage(updatedState);
      return updatedState;
    },

    updateCart: (state, action) => {
      const selectedCard: CardType = action.payload;
      return updateStorage(state, selectedCard, "isDisabled", "cart");
    },
  },
});

export const { addItem, rmItem, updateCart } = cartSlice.actions;
export default cartSlice.reducer;
