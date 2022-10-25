import React, { useState } from "react";
import previewStyles from "../Card/Preview/Preview.style";
import styles from "./CustomCard.style";
import { CardType } from "../../types/card.type";

import CreateCardForm from "./CreateCardForm/CreateCardForm";

function CustomCard({ defaultData }: { defaultData?: CardType }) {
  const [isInProcess, setIsInProcess] = useState(false);

  const previewCardStyles = previewStyles();
  const classes = styles();

  // creation process functions
  const onStartNewCardCreation = () => {
    setIsInProcess(true);
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
        <CreateCardForm
          defaultData={defaultData}
          changeProcessState={setIsInProcess}
          mode="create"
        />
      )}
    </div>
  );
}

export default CustomCard;
