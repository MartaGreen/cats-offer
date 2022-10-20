import { Reducer } from "react";
import { AnyAction } from "redux";
import { CardType } from "./card.type";

type StoreType = {
  cart: Reducer<CardType[], AnyAction>;
};

export default StoreType;
