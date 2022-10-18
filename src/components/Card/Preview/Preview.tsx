import React, { useRef } from "react";
import { WEIGHT_PER_SERVING } from "../../../constants/card.constant";
import { CardType } from "../../../types/card.type";
import styles from "./Preview.style";

import catImage from "../../../../assets/images/cat.png";

function Preview({ data }: { data: CardType }) {
  const classes = styles();
  const previewContainer = useRef(null);

  const countTotalWeight = () => data.servingsAmount * WEIGHT_PER_SERVING;

  return (
    <div ref={previewContainer} className={classes.preview}>
      <div className={classes.preview__inner}>
        <div className={classes.preview__description}>
          <h2 className={classes.description__title}>Yummy</h2>
          <h3 className={classes.description__taste}>{data.taste}</h3>
        </div>
        <div className={classes.description__weight}>
          <p style={{ fontSize: 42, lineHeight: "38px" }}>
            {countTotalWeight()}
          </p>
          <p style={{ fontSize: 21 }}>кг</p>

          <img src={catImage} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Preview;
