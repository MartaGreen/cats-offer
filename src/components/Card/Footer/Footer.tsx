import React from "react";
import { CardType } from "../../../types/card.type";

import styles from "./Footer.style";

function Footer({
  data,
  isSelected,
  changeSelection,
  isDisabled,
}: {
  data: CardType;
  isSelected: boolean;
  changeSelection: React.Dispatch<React.SetStateAction<boolean>>;
  isDisabled: boolean;
}) {
  const classes = styles();

  const onSelectionChange = () => {
    changeSelection((selection: boolean) => !selection);
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
