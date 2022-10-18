import { CardType } from "../types/card.type";

const idGenerator = (): string => {
  return `c_${Math.floor(Math.random() * 100)}`;
};

const CARDS_DATA: CardType[] = [
  {
    id: idGenerator(),
    taste: "с фуа-гра",
    servingsAmount: 10,

    selectedMsg: "Печень утки разварная с артишоками.",
  },
  {
    id: idGenerator(),
    taste: "с рыбой",
    servingsAmount: 40,
    isSelected: true,

    selectedMsg: "Головы щучьи с чесноком да свежайшая сёмгушка.",
  },
  {
    id: idGenerator(),
    taste: "с курой",
    servingsAmount: 100,
    isDisabled: true,

    selectedMsg: "Филе из цыплят с трюфелями в бульоне.",
  },
];

export default CARDS_DATA;
