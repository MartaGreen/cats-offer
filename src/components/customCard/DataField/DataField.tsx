import React, { useState } from "react";
import { createCardDataType, fieldsIdsType } from "../CustomCard";
import styles from "./DataField.style";

function DataField({
  id,
  placeholder,
  setCreatedCardData,
}: {
  id: fieldsIdsType;
  placeholder: string;
  setCreatedCardData: React.Dispatch<React.SetStateAction<createCardDataType>>;
}) {
  const classes = styles();

  const onFieldUpdated = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldData: string = e.target.value;
    setCreatedCardData((state: createCardDataType) => {
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
      onChange={onFieldUpdated}
    />
  );
}

export default DataField;
