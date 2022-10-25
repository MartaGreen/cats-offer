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
    fontSize: 12,
    fontWeight: "bold",
    color: COLORS.default.main,
    textTransform: "uppercase",
  },
});
