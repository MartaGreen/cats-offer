import { CreationFormType } from "../types/customCards.type";

export const CARD_CREATION_FIELDS: CreationFormType = {
  taste: {
    value: "",
    placeholder: "Feed taste",
    type: "text",
  },
  servingsAmount: {
    value: "",
    placeholder: "Amount of servings",
    type: "text",
  },
  selectedMsg: {
    value: "",
    placeholder: "Footer msg (when select card)",
    type: "text",
  },
  isDisabled: {
    value: "",
    placeholder: "Disable",
    type: "checkbox",
  },
};
