import React from "react";
import { newCardType, fieldsIdsType } from "../../../types/customCards.type";
import styles from "./DataField.style";

function DataField({
  id,
  placeholder,
  updateNewCardData,
  defaultValue,
}: {
  id: fieldsIdsType;
  placeholder: string;
  updateNewCardData: React.Dispatch<React.SetStateAction<newCardType>>;
  defaultValue?: string;
}) {
  const classes = styles();

  const onFieldUpdated = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldData: string = e.target.value;
    updateNewCardData((state: newCardType) => {
      state[id] = fieldData;
      return { ...state };
    });
  };

  return (
    <input
      type="text"
      id={id}
      placeholder={placeholder}
      className={`${classes.form__field}`}
      value={defaultValue}
      onChange={onFieldUpdated}
    />
  );
}

export default DataField;
