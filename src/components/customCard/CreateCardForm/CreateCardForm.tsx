import React, { useState } from "react";
import styles from "./CreateCardForm.style";
import previewCardStyles from "../../Card/Preview/Preview.style";
import CustomCardStyle from "../CustomCard.style";

import idGenerator from "../../../shared/idGenerator";
import { useDispatch } from "react-redux";
import { addCard, editCard } from "../../../redux/slices/cards.slice";

import {
  CUSTOM_CARD_FIELDS,
  NEW_CARD_DEFAULT_DATA,
} from "../../../constants/customCard.constants";
import { fieldsIdsType, newCardType } from "../../../types/customCards.type";
import { CardType } from "../../../types/card.type";

import Checkbox from "../../Checkbox/Checkbox";
import DataField from "../DataField/DataField";

function CreateCardForm({
  changeProcessState,
  defaultData,
  mode,
}: {
  changeProcessState: React.Dispatch<React.SetStateAction<boolean>>;
  defaultData?: CardType;
  mode: "create" | "edit";
}) {
  const [isDisabled, setIsDisabled] = useState(!!defaultData?.isDisabled);
  const [newCardData, setNewCardData] = useState(
    NEW_CARD_DEFAULT_DATA as newCardType
  );

  const classes = styles();
  const previewCardClasses = previewCardStyles();
  const customCardClasses = CustomCardStyle();
  const dispatch = useDispatch();

  const onSubminCreation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const onCancelCreation = () => {
    setNewCardData(NEW_CARD_DEFAULT_DATA);
    changeProcessState(false);
  };
  const onCreateCard = () => {
    const createdCardsFields: fieldsIdsType[] = Object(
      Object.keys(newCardData)
    );
    // valid when all fields are filled
    const isValid = createdCardsFields.some((field) => !!newCardData[field]);
    if (!isValid) return;

    const cardData: CardType = {
      id: defaultData?.id || idGenerator(),
      taste: newCardData.taste,
      servingsAmount: Number(newCardData.servings),
      selectedMsg: newCardData.card_footer,
      isDisabled: isDisabled,
    };

    if (mode === "edit") dispatch(editCard(cardData));
    if (mode == "create") dispatch(addCard(cardData));

    // reset
    onCancelCreation();
  };

  const changeIsChecked = () => {
    setIsDisabled((state) => !state);
  };

  return (
    <form
      className={`${previewCardClasses.preview__inner} ${classes.customCard__form} ${customCardClasses.customCard__inner}`}
      onSubmit={onSubminCreation}
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
  );
}

export default CreateCardForm;
