import React, { useState } from "react";
import previewStyles from "../Card/Preview/Preview.style";
import styles from "./CustomCard.style";
import { useDispatch } from "react-redux";

import idGenerator from "../../shared/idGenerator";
import {
  CUSTOM_CARD_FIELDS,
  NEW_CARD_DEFAULT_DATA,
} from "../../constants/customCard.constants";
import { addCard } from "../../redux/slices/cards.slice";
import { CardType } from "../../types/card.type";
import { newCardType, fieldsIdsType } from "../../types/customCards.type";

import DataField from "./DataField/DataField";
import Checkbox from "../Checkbox/Checkbox";

function CustomCard() {
  const [isInProcess, setIsInProcess] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [newCardData, setNewCardData] = useState(
    NEW_CARD_DEFAULT_DATA as newCardType
  );

  const previewCardStyles = previewStyles();
  const classes = styles();
  const dispatch = useDispatch();

  // creation process functions
  const onStartNewCardCreation = () => {
    setIsInProcess(true);
  };
  const onFinishCreation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const onCancelCreation = () => {
    setNewCardData(NEW_CARD_DEFAULT_DATA);
    setIsInProcess(false);
  };
  const onCreateCard = () => {
    const createdCardsFields: fieldsIdsType[] = Object(
      Object.keys(newCardData)
    );
    // valid when all fields are filled
    const isValid = createdCardsFields.some((field) => !!newCardData[field]);
    if (!isValid) return;

    const cardData: CardType = {
      id: idGenerator(),
      taste: newCardData.taste,
      servingsAmount: Number(newCardData.servings),
      selectedMsg: newCardData.card_footer,
      isDisabled: isDisabled,
    };

    dispatch(addCard(cardData));
    // reset
    onCancelCreation();
  };

  const changeIsChecked = () => {
    setIsDisabled((state) => !state);
  };

  return (
    <div className={`${previewCardStyles.preview} ${classes.customCard}`}>
      {(!isInProcess && (
        <div
          className={`${previewCardStyles.preview__inner} ${classes.customCard__inner}`}
          onClick={onStartNewCardCreation}
        >
          <h2 className={previewCardStyles.description__title}>New Card</h2>
          <div className={classes.customCard__addBtn}></div>
        </div>
      )) || (
        <form
          className={`${previewCardStyles.preview__inner} ${classes.customCard__inner} ${classes.customCard__form}`}
          onSubmit={onFinishCreation}
        >
          <div className={classes.form__fields}>
            {CUSTOM_CARD_FIELDS.map((field) => (
              <DataField
                key={field.id}
                updateNewCardData={setNewCardData}
                id={field.id}
                placeholder={field.placeholder}
              />
            ))}

            <div className={classes.form__disableField}>
              <span className={classes.disableField__text}>Disable: </span>

              <Checkbox
                isChecked={isDisabled}
                changeChecking={changeIsChecked}
                id={idGenerator()}
              />
            </div>
          </div>

          <div className={classes.form__btns}>
            <button
              className={`${classes.form__cancelBtn} ${classes.form__btn}`}
              onClick={onCancelCreation}
            >
              Cancel
            </button>
            <button
              className={`${classes.form__createBtn} ${classes.form__btn}`}
              onClick={onCreateCard}
            >
              Create
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default CustomCard;
