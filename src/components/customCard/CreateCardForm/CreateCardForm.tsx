import React, { useEffect, useState } from "react";
import styles from "./CreateCardForm.style";
import previewCardStyles from "../../Card/Preview/Preview.style";
import CustomCardStyle from "../CustomCard.style";

import idGenerator from "../../../shared/idGenerator";
import { useDispatch } from "react-redux";
import { addCard, editCard } from "../../../redux/slices/cards.slice";

import { Form } from "react-final-form";

import { CARD_CREATION_FIELDS } from "../../../constants/customCard.constants";
import {
  CreationFormIdsType,
  CreationFieldType,
} from "../../../types/customCards.type";
import { CardType } from "../../../types/card.type";

import Checkbox from "../../Checkbox/Checkbox";
import FormField from "../FormField/FormField";

function CreateCardForm({
  changeProcessState,
  defaultData,
  mode,
}: {
  changeProcessState: React.Dispatch<React.SetStateAction<boolean>>;
  defaultData?: CardType;
  mode: "create" | "edit";
}) {
  const classes = styles();
  const previewCardClasses = previewCardStyles();
  const customCardClasses = CustomCardStyle();
  const dispatch = useDispatch();

  const [formFields, setFormFields] = useState(() => {
    if (!defaultData) return CARD_CREATION_FIELDS;

    const defaultFields = { ...CARD_CREATION_FIELDS };
    const fieldsNames = Object.keys(
      defaultFields
    ) as Array<CreationFormIdsType>;

    fieldsNames.forEach((name: CreationFormIdsType) => {
      const fieldData = defaultFields[name];
      if (!fieldData) return;

      fieldData.value = defaultData[name]?.toString() || "";
    });

    return defaultFields;
  });

  const fieldValidation = (value: CreationFieldType | undefined) =>
    !value?.value;

  const changeDisablement = () => {
    setFormFields((state) => {
      const disablementField = { ...state.isDisabled };
      const value: boolean = Boolean(disablementField?.value);
      disablementField.value = value.toString();

      return { ...state, ...disablementField };
    });
  };

  const onCancelCreation = (form: any) => {
    changeProcessState(false);
    form.reset();
  };
  const onSubmitCreation = () => {
    const newCard: CardType = {
      id: defaultData?.id || idGenerator(),
      taste: formFields.taste?.value || "",
      servingsAmount: Number(formFields.servingsAmount?.value) || 0,
      selectedMsg: formFields.selectedMsg?.value || "",
      isSelected: Boolean(formFields.isSelected?.value),
      isDisabled: Boolean(formFields.isDisabled?.value),
    };

    if (mode === "edit") dispatch(editCard(newCard));
    if (mode === "create") dispatch(addCard(newCard));

    changeProcessState(false);
  };

  return (
    <Form
      onSubmit={onSubmitCreation}
      initialValues={formFields}
      render={({ handleSubmit, form }) => (
        <form
          onSubmit={handleSubmit}
          className={`${previewCardClasses.preview__inner} ${classes.customCard__form} ${customCardClasses.customCard__inner}`}
        >
          <div>
            {(Object.keys(formFields) as Array<CreationFormIdsType>).map(
              (field: CreationFormIdsType) => {
                const fieldData: CreationFieldType | undefined =
                  formFields[field];
                return (
                  (fieldData?.type === "text" && (
                    <FormField
                      name={field}
                      data={fieldData}
                      changeValue={setFormFields}
                      key={field}
                      validate={fieldValidation}
                    />
                  )) ||
                  (fieldData?.type === "checkbox" && (
                    <div className={classes.form__disableField} key={field}>
                      <span className={classes.disableField__text}>
                        Disable:{" "}
                      </span>

                      <Checkbox
                        isChecked={Boolean(fieldData?.value)}
                        changeChecking={changeDisablement}
                        id={idGenerator()}
                      />
                    </div>
                  ))
                );
              }
            )}
          </div>

          <div className={classes.form__btns}>
            <button
              className={`${classes.form__cancelBtn} ${classes.form__btn}`}
              onClick={() => onCancelCreation(form)}
              type="button"
            >
              Cancel
            </button>
            <button
              className={`${classes.form__createBtn} ${classes.form__btn}`}
              type="submit"
            >
              {mode === "create" && "Create"}
              {mode === "edit" && "Edit"}
            </button>
          </div>
        </form>
      )}
    ></Form>
  );
}

export default CreateCardForm;
