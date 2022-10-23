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
      setStorageData("cards", state);
      return state;
    },

    addCard: (state, action) => {
      const newCardData: CardType = action.payload;
      state.push(newCardData);
      setStorageData("cards", state);
      return state;
    },
    rmCard: (state, action) => {
      const deletedCard: CardType = action.payload;
      const stateObject = current(state);
      const updatedState = stateObject.filter(
        (stateItem: CardType) => stateItem.id !== deletedCard.id
      );
      setStorageData("cards", updatedState);
      return updatedState;
    },
  },
});

export const { cardSelectionChange, addCard, rmCard } = cardsSlice.actions;
export default cardsSlice.reducer;
