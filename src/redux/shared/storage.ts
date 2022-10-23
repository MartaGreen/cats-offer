import CARDS_DEFAULT_DATA from "../../constants/card.constant";
import { CardType } from "../../types/card.type";

export const getStorageData = (storageName: string): CardType[] => {
  const storageStr = localStorage.getItem(storageName);
  if (storageStr) return JSON.parse(storageStr);

  localStorage.setItem(storageName, JSON.stringify(CARDS_DEFAULT_DATA));
  return CARDS_DEFAULT_DATA;
};

export const setStorageData = (storageName: string, data: any) => {
  localStorage.setItem(storageName, JSON.stringify(data));
};