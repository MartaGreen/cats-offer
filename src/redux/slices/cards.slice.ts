import { createSlice, current } from "@reduxjs/toolkit";
import { CardType } from "../../types/card.type";
import {
  getStorageData,
  setStorageData,
  updateStorage,
} from "../shared/storage";

const setCardsStorage = (updatedState: CardType[]) => {
  setStorageData("cards", updatedState);
};

const getCardsStorage = (): CardType[] => {
  const cardsStorage = getStorageData("cards");

  const selectedCards = cardsStorage.filter(
    (card: CardType) => card.isSelected
  );
  setCardsStorage(selectedCards);

  return cardsStorage;
};

const cardsSlice = createSlice({
  name: "cards",
  initialState: getCardsStorage(),
  reducers: {
    addCard: (state, action) => {
      const newCardData: CardType = action.payload;
      const updatedState: CardType[] = [...state, newCardData];

      setCardsStorage(updatedState);
      return updatedState;
    },
    rmCard: (state, action) => {
      const deletedCard: CardType = action.payload;
      const clonedState = [...state];
      const updatedState = clonedState.filter(
        (stateItem: CardType) => stateItem.id !== deletedCard.id
      );
      setCardsStorage(updatedState);
      return updatedState;
    },

    cardSelectionChange: (state, action) => {
      const selectedCard: CardType = action.payload;
      return updateStorage(
        state,
        selectedCard,
        "cards",
        !selectedCard.isSelected,
        selectedCard.isDisabled
      );
    },
    cardDisablementChange: (state, action) => {
      const selectedCard: CardType = action.payload;
      return updateStorage(
        state,
        selectedCard,
        "cards",
        selectedCard.isSelected,
        !selectedCard.isDisabled
      );
    },

    editCard: (state, action) => {
      const editedCard: CardType = action.payload;
      const clonedState: CardType[] = [...state];
      const index = clonedState.findIndex((item) => item.id === editedCard.id);
      clonedState[index] = editedCard;
      return clonedState;
    },
  },
});

export const {
  cardSelectionChange,
  addCard,
  rmCard,
  cardDisablementChange,
  editCard,
} = cardsSlice.actions;
export default cardsSlice.reducer;
