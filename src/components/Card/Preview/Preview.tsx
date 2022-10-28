import React, { useEffect, useRef } from "react";
import { WEIGHT_PER_SERVING } from "../../../constants/card.constant";
import { CardType } from "../../../types/card.type";
import styles from "./Preview.style";

import { useDispatch } from "react-redux";
import { addItem, rmItem } from "../../../redux/slices/cart.slice";
import { cardSelectionChange } from "../../../redux/slices/cards.slice";

import ServingsOffer from "../../Offer/Servings/ServingsOffer";
import MousesOffers from "../../Offer/Mouses/MousesOffer";
import cartIcon from "../../../../assets/images/cart.svg";

function Preview({ data }: { data: CardType }) {
  const classes = styles();
  const previewContainer = useRef(null);
  const isSelected = !!data.isSelected;
  const isDisabled = !!data.isDisabled;
  const dispatch = useDispatch();

  const onSelectCard = () => {
    if (!isSelected) dispatch(addItem(data));
    if (isSelected) dispatch(rmItem(data));
    dispatch(cardSelectionChange(data));
  };

  // tracking when to show hover caption after card selection
  // (only if cursor leave a card)
  useEffect(() => {
    const preview: HTMLDivElement | null = previewContainer.current;
    if (!preview) return;

    const cardLeaveHandler = () => {
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
        {isSelected && (
          <div className={classes.preview_inCart}>
            <img
              src={cartIcon}
              alt="cart"
              style={{ display: "inline-block", width: "100%" }}
            />
          </div>
        )}

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
