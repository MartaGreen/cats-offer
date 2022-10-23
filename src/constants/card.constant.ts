import { CardType } from "../types/card.type";
import idGenerator from "../shared/idGenerator";

const CARDS_DEFAULT_DATA: CardType[] = [
  {
    id: idGenerator(),
    taste: "foie gras",
    servingsAmount: 10,

    selectedMsg: "Duck liver boiled with artichokes.",
  },
  {
    id: idGenerator(),
    taste: "fish",
    servingsAmount: 40,
    isSelected: true,

    selectedMsg: "Pike heads with garlic and fresh salmon.",
  },
  {
    id: idGenerator(),
    taste: "chicken",
    servingsAmount: 100,
    isDisabled: true,

    selectedMsg: "Chicken fillet with truffles in broth.",
  },
];

// we have 0.5 kg of feed and 10 servings.
export const WEIGHT_PER_SERVING = 0.05;

export default CARDS_DEFAULT_DATA;
