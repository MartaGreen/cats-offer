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

  disable__input: {
    opacity: 0,

    "&:checked ~ $disable__label": {
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
  disable__label: {
    width: 20,
    height: 20,
    display: "inline-block",
    border: `1px solid ${COLORS.default.main}`,
    cursor: "pointer",
  },

  disable__text: {
    fontSize: 12,
    fontWeight: "bold",
    color: COLORS.default.main,
    textTransform: "uppercase",
  },
});
