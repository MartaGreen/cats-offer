import { fieldType } from "../types/customCards.type";

export const CUSTOM_CARD_FIELDS: fieldType[] = [
  {
    id: "taste",
    placeholder: "Feed taste",
  },
  {
    id: "servings",
    placeholder: "Amount of servings",
  },
  {
    id: "card_footer",
    placeholder: "Footer msg (when select)",
  },
];

export const NEW_CARD_DEFAULT_DATA = {
  taste: "",
  servings: "",
  card_footer: "",
};
