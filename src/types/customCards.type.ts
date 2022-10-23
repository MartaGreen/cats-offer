export type newCardType = {
  taste: string;
  servings: string;
  card_footer: string;
};

export type fieldsIdsType = "taste" | "servings" | "card_footer";
export type fieldType = {
  id: fieldsIdsType;
  placeholder: string;
};
