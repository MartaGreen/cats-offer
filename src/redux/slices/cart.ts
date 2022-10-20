import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardType } from "../../types/card.type";

const updateCartStorage = (data: CardType[]) => {
  localStorage.setItem("cart", JSON.stringify(data));
};
const cartStorage: CardType[] = JSON.parse(
  localStorage.getItem("cart") || "[]"
);

export const cartSlice = createSlice({
  name: "cart",
  initialState: cartStorage.length ? cartStorage : ([] as CardType[]),
  reducers: {
    addItem: (state: CardType[], action: PayloadAction<CardType>) => {
      updateCartStorage(state);
      state.push(action.payload);
    },
    rmItem: (state: CardType[], action: PayloadAction<CardType>) => {
      const updatedState = state.filter(
        (item: CardType) => item.id !== action.payload.id
      );
      updatedState.forEach((item: any) => {
        console.log(item);
      });
      updateCartStorage(updatedState);
      return updatedState;
    },
  },
});

export const { addItem, rmItem } = cartSlice.actions;
export default cartSlice.reducer;
