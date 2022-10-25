import { createSlice, current } from "@reduxjs/toolkit";
import { CardType } from "../../types/card.type";
import {
  getStorageData,
  setStorageData,
  updateStorage,
} from "../shared/storage";

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
      return updateStorage(state, selectedCard, "isSelected", "cards");
    },

    addCard: (state, action) => {
      const newCardData: CardType = action.payload;
      const index = state.findIndex((card) => card.id === newCardData.id);
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

    cardDisablingChange: (state, action) => {
      const selectedCard: CardType = action.payload;
      return updateStorage(state, selectedCard, "isDisabled", "cards");
    },
  },
});

export const { cardSelectionChange, addCard, rmCard, cardDisablingChange } =
  cardsSlice.actions;
export default cardsSlice.reducer;
