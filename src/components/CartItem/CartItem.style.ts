import { createUseStyles } from "react-jss";
import { COLORS } from "../../constants/styles.constants";

export default createUseStyles({
  cart__item: {
    height: 50,

    color: "#000",
    fontSize: 14,
  },

  item_disabled: {
    position: "relative",

    "&:before": {
      content: "''",
      position: "absolute",
      left: 0,
      top: 0,

      width: "calc(100% - 38px)",
      height: "100%",

      backgroundColor: COLORS.disabled.main,
      opacity: "85%",
    },
    "&:after": {
      content: "'out of stock'",
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
      display: "inline-block",
      fontSize: 20,
      fontWeight: "bold",
      color: COLORS.selected.main,
    },
  },

  item__td: {
    borderBottom: "1px solid #000",
    textAlign: "center",
    padding: "7px 15px",
    verticalAlign: "center",

    "&:first-child": {
      width: 30,
    },
  },

  item__selection: {
    opacity: 0,

    "&:checked ~ $item__selection_styled": {
      position: "relative",

      "&:before, &:after": {
        content: "''",
        display: "inline-block",

        position: "absolute",
        bottom: "60%",
        left: "10%",

        width: "70%",
        height: 3,
        transformOrigin: "left center",
        transform: "rotate(50deg)",
        background: COLORS.selected.main,
      },
      "&:after": {
        width: "100%",
        transform: "rotate(-50deg)",

        left: "50%",
        bottom: "10%",
      },
    },
  },
  item__selection_styled: {
    display: "inline-block",
    width: 20,
    height: 20,
    border: "2px solid #000",
    borderRadius: "50%",
    cursor: "pointer",
  },

  item__buy: {
    backgroundColor: "none",
    borderLeft: "2px solid #000",
    borderRight: "2px solid #000",
    color: "#000",

    "&:hover": {
      backgroundColor: "#000",
      color: "#fff",
      cursor: "pointer",
    },
  },

  item__delete: {
    width: 30,
    padding: "5px 10px",
  },
  item__dustbin: {
    height: 17,
    display: "inline-block",
    transition: "0.3s",

    "&:hover": {
      transform: "scale(1.2)",
      cursor: "pointer",
    },
  },
});
