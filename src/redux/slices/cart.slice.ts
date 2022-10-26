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
      const newItem: CardType = action.payload;
      const updatedState = [...state, newItem];
      updateCartStorage(updatedState);
      return updatedState;
    },
    rmItem: (state: CardType[], action: PayloadAction<CardType>) => {
      const selectedCard = action.payload;
      const clonedState = [...state];

      const updatedState = clonedState.filter(
        (item: CardType) => item.id !== selectedCard.id
      );
      updateCartStorage(updatedState);
      return updatedState;
    },

    updateCart: (state, action) => {
      const selectedCard: CardType = action.payload;
      return updateStorage(
        state,
        selectedCard,
        "cart",
        selectedCard.isSelected,
        selectedCard.isDisabled
      );
    },
  },
});

export const { addItem, rmItem, updateCart } = cartSlice.actions;
export default cartSlice.reducer;
