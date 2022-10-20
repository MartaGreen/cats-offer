import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardType } from "../../types/card.type";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [] as CardType[],
  reducers: {
    addItem: (state: CardType[], action: PayloadAction<CardType>) => {
      state.push(action.payload);
    },
    rmItem: (state: CardType[], action: PayloadAction<CardType>) => {
      return state.filter((item: CardType) => {
        return item.id !== action.payload.id;
      });
    },
  },
});

export const { addItem, rmItem } = cartSlice.actions;
export default cartSlice.reducer;
