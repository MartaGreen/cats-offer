import React, { useRef } from "react";
import { WEIGHT_PER_SERVING } from "../../../constants/card.constant";
import { CardType } from "../../../types/card.type";
import styles from "./Preview.style";

import ServingsOffer from "../../Offer/Servings/ServingsOffer";
import MousesOffers from "../../Offer/Mouses/MousesOffer";

function Preview({ data }: { data: CardType }) {
  const classes = styles();
  const previewContainer = useRef(null);

  const countTotalWeight = () => data.servingsAmount * WEIGHT_PER_SERVING;
  const servingsWordForms = { singular: "serving", plural: "servings" };
  const mousesAmount = Math.ceil(data.servingsAmount / 20);
  const mouseWordForms = { singular: "mice", plural: "mouses" };

  return (
    <div ref={previewContainer} className={classes.preview}>
      <div className={classes.preview__inner}>
        <div className={classes.preview__description}>
          <h2 className={classes.description__title}>Yummy</h2>
          <h3 className={classes.description__taste}>{data.taste}</h3>
          <ServingsOffer
            amount={data.servingsAmount}
            wordForms={servingsWordForms}
          />
          <MousesOffers amount={mousesAmount} wordForms={mouseWordForms} />
        </div>
        <div className={classes.description__weight}>
          <p style={{ fontSize: 42, lineHeight: "38px" }}>
            {countTotalWeight()}
          </p>
          <p style={{ fontSize: 21 }}>kg</p>
        </div>
      </div>
    </div>
  );
}

export default Preview;
