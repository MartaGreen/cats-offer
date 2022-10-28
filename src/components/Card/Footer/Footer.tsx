import React from "react";
import { useDispatch } from "react-redux";
import { cardSelectionChange } from "../../../redux/slices/cards.slice";
import { addItem } from "../../../redux/slices/cart.slice";
import { CardType } from "../../../types/card.type";

import styles from "./Footer.style";

function Footer({ data }: { data: CardType }) {
  const classes = styles();
  const dispatch = useDispatch();
  const isSelected = !!data.isSelected;
  const isDisabled = !!data.isDisabled;

  const onSelectionChange = () => {
    if (!isSelected) dispatch(addItem(data));
    dispatch(cardSelectionChange(data));
  };

  const generateFooter = () => {
    if (isDisabled) return <>{`Oops! The ${data.taste} is over`}</>;
    if (isSelected) return <>{data.selectedMsg}</>;

    return (
      <>
        Why are you sitting? Please your cat.&nbsp;
        <a
          href="#"
          className={classes.footer__buyLink}
          onClick={onSelectionChange}
        >
          Buy.
        </a>
      </>
    );
  };

  return (
    <div
      className={`${classes.footer} ${isDisabled && classes.footer_disabled}`}
    >
      {generateFooter()}
    </div>
  );
}

export default Footer;
