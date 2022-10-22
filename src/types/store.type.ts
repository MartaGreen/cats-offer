import { Reducer } from "react";
import { AnyAction } from "redux";
import { CardType } from "./card.type";

type StoreType = {
  cart: CardType[];
  cards: CardType[];
};

export default StoreType;
