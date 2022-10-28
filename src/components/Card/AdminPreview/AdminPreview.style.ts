import { createUseStyles } from "react-jss";
import { COLORS } from "../../../constants/styles.constants";

export default createUseStyles({
  disable: {
    position: "absolute",
    top: 60,
    right: 10,

    width: 80,

    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  disable__label: {
    width: 20,
    height: 20,
    display: "inline-block",
    border: `1px solid ${COLORS.default.main}`,
    cursor: "pointer",
  },

  disable__text: {
    textTransform: "uppercase",
    fontSize: 12,
    fontWeight: "bold",
    color: COLORS.default.main,
  },

  edit: {
    position: "absolute",
    top: 100,
    right: 10,

    fontSize: 15,
    textTransform: "uppercase",
    fontWeight: "bold",
    color: COLORS.default.main,
    transition: "0.3s",

    "&:hover": {
      textDecoration: "underline",
      cursor: "pointer",
      color: COLORS.selected.main,
    },
  },
});
