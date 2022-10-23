import { createUseStyles } from "react-jss";

export default createUseStyles({
  cart__item: {
    height: 50,

    color: "#000",
    fontSize: 14,
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
        background: "#D91667",
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