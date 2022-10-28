import React, { useState } from "react";
import styles from "../Preview/Preview.style";
import adminStyles from "./AdminPreview.style";

import { useDispatch } from "react-redux";
import { WEIGHT_PER_SERVING } from "../../../constants/card.constant";
import { cardDisablementChange } from "../../../redux/slices/cards.slice";
import { updateCart } from "../../../redux/slices/cart.slice";
import { CardType } from "../../../types/card.type";

import ServingsOffer from "../../Offer/Servings/ServingsOffer";
import MousesOffers from "../../Offer/Mouses/MousesOffer";
import Checkbox from "../../Checkbox/Checkbox";
import CreateCardForm from "../../customCard/CreateCardForm/CreateCardForm";

function AdminPreview({ data }: { data: CardType }) {
  const [isEditProcess, setIsEditProcess] = useState(false);

  const classes = styles();
  const adminClasses = adminStyles();
  const isDisabled = !!data.isDisabled;

  const dispatch = useDispatch();

  const countTotalWeight = () => data.servingsAmount * WEIGHT_PER_SERVING;
  const servingsWordForms = { singular: "serving", plural: "servings" };
  const mousesAmount = Math.ceil(data.servingsAmount / 20);
  const mouseWordForms = { singular: "mice", plural: "mouses" };

  const onDisablementChange = (): void => {
    dispatch(updateCart(data));
    dispatch(cardDisablementChange(data));
  };

  const onEditCard = () => {
    setIsEditProcess(true);
  };

  return (
    <div className={`${classes.preview}`} style={{ cursor: "default" }}>
      {(!isEditProcess && (
        <div className={classes.preview__inner}>
          <div className={classes.preview__description}>
            <h2 className={classes.description__title}>Yummy</h2>
            <h3 className={classes.description__taste}>{data.taste}</h3>

            <div className={adminClasses.disable}>
              <span className={adminClasses.disable__text}>disable:</span>

              <Checkbox
                id={data.id}
                isChecked={isDisabled}
                changeChecking={onDisablementChange}
                extraStyleClasses={adminClasses.disable__label}
              />
            </div>

            <div onClick={onEditCard} className={adminClasses.edit}>
              edit card
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
      )) || (
        <CreateCardForm
          changeProcessState={setIsEditProcess}
          defaultData={data}
          mode="edit"
        />
      )}
    </div>
  );
}

export default AdminPreview;
