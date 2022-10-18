export type CardPreviewType = {
  taste: string;
  servingsAmount: number;

  isSelected?: boolean;
  isDisabled?: boolean;
};

export type CardFooterType = {
  selectedMsg: string;
};

export type CardType = CardPreviewType & CardFooterType & { id: string };
