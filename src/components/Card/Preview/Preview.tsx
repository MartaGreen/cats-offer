import React, { useEffect, useRef } from "react";
import { WEIGHT_PER_SERVING } from "../../../constants/card.constant";
import { CardType } from "../../../types/card.type";
import styles from "./Preview.style";

import { useDispatch, useSelector } from "react-redux";
import StoreType from "../../../types/store.type";
import { addItem, rmItem } from "../../../redux/slices/cart";

import ServingsOffer from "../../Offer/Servings/ServingsOffer";
import MousesOffers from "../../Offer/Mouses/MousesOffer";

function Preview({
  data,
  isSelected,
  changeSelection,
  isDisabled,
}: {
  data: CardType;
  isSelected: boolean;
  changeSelection: React.Dispatch<React.SetStateAction<boolean>>;
  isDisabled: boolean;
}) {
  const classes = styles();
  const previewContainer = useRef(null);
  const dispatch = useDispatch();

  const onSelectCard = () => {
    changeSelection((selection: boolean) => !selection);
    if (!isSelected) dispatch(addItem(data));
    if (isSelected) dispatch(rmItem(data));
  };

  useEffect(() => {
    if (isSelected) dispatch(addItem(data));
  }, []);

  useEffect(() => {
    const preview: HTMLDivElement | null = previewContainer.current;
    if (!preview) return;

    const cardLeaveHandler = () => {
      console.log("mouse left a card");
      previewElement.classList.remove(classes.selected_hover);
      previewElement.removeEventListener("mouseleave", cardLeaveHandler);
    };

    const previewElement: HTMLDivElement = preview as HTMLDivElement;
    previewElement.addEventListener("mouseleave", cardLeaveHandler);

    if (!isSelected)
      return previewElement.removeEventListener("mouseleave", cardLeaveHandler);
    previewElement.classList.add(classes.selected_hover);
  }, [isSelected]);

  const countTotalWeight = () => data.servingsAmount * WEIGHT_PER_SERVING;
  const servingsWordForms = { singular: "serving", plural: "servings" };
  const mousesAmount = Math.ceil(data.servingsAmount / 20);
  const mouseWordForms = { singular: "mice", plural: "mouses" };

  return (
    <div
      ref={previewContainer}
      className={`${classes.preview} ${isSelected && classes.selected} ${
        isDisabled && classes.disabled
      }`}
      onClick={onSelectCard}
    >
      <div className={classes.preview__inner}>
        <div className={classes.preview__description}>
          <h2 className={classes.description__title}>Yummy</h2>
          <h3 className={classes.description__taste}>{data.taste}</h3>
          <ServingsOffer
            amount={data.servingsAmount}
            wordForms={servingsWordForms}
          />
          <MousesOffers amount={mousesAmount} wordForms={mouseWordForms} />
        </div>
        <div className={classes.description__weight}>
          <p style={{ fontSize: 42, lineHeight: "38px" }}>
            {countTotalWeight()}
          </p>
          <p style={{ fontSize: 21 }}>kg</p>
        </div>
      </div>
    </div>
  );
}

export default Preview;
