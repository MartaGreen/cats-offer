import React, { useRef, useState } from "react";
import previewStyles from "../Card/Preview/Preview.style";
import styles from "./CustomCard.style";

function CustomCard() {
  const [isInProcess, setIsInProcess] = useState(false);

  const previewCardStyles = previewStyles();
  const classes = styles();

  const onStartNewCardCreation = () => {
    setIsInProcess(true);
  };

  const onFinishProcess = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const onStopCreation = () => {
    setIsInProcess(false);
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
          onSubmit={onFinishProcess}
        >
          <div className={classes.form__fields}>
            <input
              type="text"
              id="taste"
              placeholder="Feed taste"
              className={`${classes.form__field}`}
            />
            <input
              type="text"
              id="servings"
              placeholder="Amount of servings"
              className={`${classes.form__field}`}
            />
            <input
              type="text"
              id="card_footer"
              placeholder="Footer msg"
              className={`${classes.form__field}`}
            />
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
