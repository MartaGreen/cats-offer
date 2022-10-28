import React from "react";
import styles from "./FormField.style";
import { Field } from "react-final-form";
import {
  CreationFieldType,
  CreationFormIdsType,
  CreationFormType,
} from "../../../types/customCards.type";

function FormField({
  name,
  data,
  changeValue,
  validate,
}: {
  name: CreationFormIdsType;
  data: CreationFieldType | undefined;
  changeValue: React.Dispatch<React.SetStateAction<CreationFormType>>;
  validate: (value: CreationFieldType | undefined) => boolean;
}) {
  const classes = styles();

  const onChangeField = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeValue((state) => {
      const field = { ...state[name] };
      console.log(field.value, e.target.value);
      field.value = e.target.value;
      return { ...state, ...{ [name]: field } };
    });
  };

  return (
    <Field validate={validate} name={name.toString()}>
      {({ input, meta }) => (
        <input
          {...input}
          type="text"
          placeholder={data?.placeholder}
          value={data?.value}
          className={`${classes.form__field} ${
            meta.error && meta.touched && classes.form__field_notValid
          }`}
          onChange={onChangeField}
        />
      )}
    </Field>
  );
}

export default FormField;
