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

    "&:after": {
      content: "'Not available now: out of stock'",
      position: "absolute",
      left: 0,
      top: "50%",
      transform: "translateY(-50%)",
      display: "inline-block",
      width: "calc(100% - 40px)",
      textAlign: "center",
      fontSize: 20,
      fontWeight: "normal",
      color: COLORS.selected.main,
    },

    "& $item__td:not(:last-child)": {
      opacity: "15%",
      pointerEvents: "none",
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
