import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardType } from "../../types/card.type";
import { getStorageData, setStorageData } from "../shared/storage";

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
  },
});

export const { addItem, rmItem } = cartSlice.actions;
export default cartSlice.reducer;
