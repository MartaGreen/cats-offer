import React from "react";
import styles from "../Preview/Preview.style";
import adminStyles from "./AdminPreview.style";

import { useDispatch } from "react-redux";
import { WEIGHT_PER_SERVING } from "../../../constants/card.constant";
import { CardType } from "../../../types/card.type";
import { cardDisablingChange } from "../../../redux/slices/cards.slice";
import { updateCart } from "../../../redux/slices/cart.slice";

import ServingsOffer from "../../Offer/Servings/ServingsOffer";
import MousesOffers from "../../Offer/Mouses/MousesOffer";

function AdminPreview({
  data,
  isDisabled,
  changeDisabling,
}: {
  data: CardType;
  isDisabled: boolean;
  changeDisabling: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const classes = styles();
  const adminClasses = adminStyles();

  const dispatch = useDispatch();

  const countTotalWeight = () => data.servingsAmount * WEIGHT_PER_SERVING;
  const servingsWordForms = { singular: "serving", plural: "servings" };
  const mousesAmount = Math.ceil(data.servingsAmount / 20);
  const mouseWordForms = { singular: "mice", plural: "mouses" };

  const onDisableChange = () => {
    changeDisabling((state) => !state);
    dispatch(cardDisablingChange(data));
    dispatch(updateCart(data));
  };

  return (
    <div className={`${classes.preview}`} style={{ cursor: "default" }}>
      <div className={classes.preview__inner}>
        <div className={classes.preview__description}>
          <h2 className={classes.description__title}>Yummy</h2>
          <h3 className={classes.description__taste}>{data.taste}</h3>

          <div className={adminClasses.disable}>
            <span className={adminClasses.disable__text}>disable:</span>

            <input
              type="checkbox"
              name="isDisabled"
              id={`disableCard_${data.id}`}
              checked={isDisabled}
              onChange={onDisableChange}
              className={adminClasses.disable__input}
            />
            <label
              htmlFor={`disableCard_${data.id}`}
              className={adminClasses.disable__label}
            ></label>
          </div>

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

export default AdminPreview;
