import { CardType } from "./card.type";

export type CreationFormIdsType = keyof CardType;
export type CreationFieldType = {
  value: string;
  placeholder: string;
  type: "checkbox" | "text";
};
export type CreationFormType = {
  [key in CreationFormIdsType]?: CreationFieldType;
};
