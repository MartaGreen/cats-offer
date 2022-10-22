import { createSlice, current } from "@reduxjs/toolkit";
import { CardType } from "../../types/card.type";
import { getStorageData, setStorageData } from "../shared/storage";

const getCardsStorage = (): CardType[] => {
  const cardsStorage = getStorageData("cards");

  const selectedCards = cardsStorage.filter(
    (card: CardType) => card.isSelected
  );
  setStorageData("cart", selectedCards);

  return cardsStorage;
};

const cardsSlice = createSlice({
  name: "cards",
  initialState: getCardsStorage(),
  reducers: {
    cardSelectionChange: (state, action) => {
      const selectedCard: CardType = action.payload;
      const stateObject: CardType[] = current(state);
      const index: number = stateObject.indexOf(selectedCard);
      state[index].isSelected = !state[index].isSelected;
      const saveState = state;
      return state;
    },
  },
});

export const { cardSelectionChange } = cardsSlice.actions;
export default cardsSlice.reducer;
