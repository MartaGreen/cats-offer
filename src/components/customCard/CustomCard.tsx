import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import idGenerator from "../../shared/idGenerator";
import previewStyles from "../Card/Preview/Preview.style";
import styles from "./CustomCard.style";
import DataField from "./DataField/DataField";
import { addCard } from "../../redux/slices/cards.slice";
import { CardType } from "../../types/card.type";

export type createCardDataType = {
  taste: string;
  servings: string;
  card_footer: string;
};

export type fieldsIdsType = "taste" | "servings" | "card_footer";
export type fieldsType = {
  id: fieldsIdsType;
  placeholder: string;
};

function CustomCard() {
  const [isInProcess, setIsInProcess] = useState(false);
  const [createdCardData, setCreatedCardData] = useState({
    taste: "",
    servings: "",
    card_footer: "",
  } as createCardDataType);

  const previewCardStyles = previewStyles();
  const classes = styles();
  const dispatch = useDispatch();

  const onStartNewCardCreation = () => {
    setIsInProcess(true);
  };

  const onFinishProcess = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const onStopCreation = () => {
    setIsInProcess(false);
  };
  const onCreateCard = () => {
    const createdCardsFields: fieldsIdsType[] = Object(
      Object.keys(createdCardData)
    );
    const isValidationPassed = createdCardsFields.some(
      (field) => !createdCardData[field]
    );

    if (isValidationPassed) return;

    const cardData: CardType = {
      id: idGenerator(),
      taste: createdCardData.taste,
      servingsAmount: Number(createdCardData.servings),
      selectedMsg: createdCardData.card_footer,
    };

    dispatch(addCard(cardData));
  };

  const fields: fieldsType[] = [
    {
      id: "taste",
      placeholder: "Feed taste",
    },
    {
      id: "servings",
      placeholder: "Amount of servings",
    },
    {
      id: "card_footer",
      placeholder: "Footer msg (when select)",
    },
  ];

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
          onSubmit={onFinishProcess}
        >
          <div className={classes.form__fields}>
            {fields.map((field) => (
              <DataField
                key={field.id}
                setCreatedCardData={setCreatedCardData}
                id={field.id}
                placeholder={field.placeholder}
              />
            ))}
          </div>

          <div className={classes.form__btns}>
            <button
              className={`${classes.form__cancelBtn} ${classes.form__btn}`}
              onClick={onStopCreation}
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
