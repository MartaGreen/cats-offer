import { createUseStyles } from "react-jss";

export default createUseStyles({
  cart: {
    minWidth: 300,
    width: "90%",
    maxWidth: 900,
    maxHeight: "80vh",
    margin: "0 auto",

    borderRadius: 10,
    borderCollapse: "collapse",
  },
  cart__item: {
    height: 50,

    color: "#fff",
    fontSize: 14,
  },

  item__td: {
    border: "3px solid #fff",
    textAlign: "center",
    padding: "0 25px",

    "&:first-child": {
      width: 50,
    },
  },

  item__selection: {
    opacity: 0,

    "&:checked ~ $cart__selection_styled": {
      background: "red",
    },
  },
  item__selection_styled: {
    display: "inline-block",
    width: 25,
    height: 25,
    border: "2px solid #fff",
    borderRadius: "50%",
  },

  item__buy: {
    backgroundColor: "#fff",
    border: "none",
    color: "#000",
  },
});
