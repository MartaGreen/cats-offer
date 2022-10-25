import React from "react";
import styles from "./Checkbox.style";

function Checkbox({
  id,
  extraStyleClasses,
  isChecked,
  changeChecking,
}: {
  id: string;
  extraStyleClasses?: string;
  isChecked: boolean;
  changeChecking: () => void;
}) {
  const classes = styles();

  return (
    <>
      <input
        type="checkbox"
        name="isDisabled"
        id={`disableCard_${id}`}
        checked={isChecked}
        onChange={changeChecking}
        className={classes.checkbox__input}
      />
      <label
        htmlFor={`disableCard_${id}`}
        className={`${classes.checkbox__label} ${extraStyleClasses}`}
      ></label>
    </>
  );
}

export default Checkbox;
