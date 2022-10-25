import { createUseStyles } from "react-jss";
import { COLORS } from "../../constants/styles.constants";

export default createUseStyles({
  customCard: {
    height: 470,
    alignSelf: "flex-start",
  },
  customCard__inner: {
    backgroundImage: "none",
    padding: 30,
    justifyContent: "space-around",
  },
  customCard__addBtn: {
    position: "relative",
    width: 150,
    height: 150,
    border: `4px solid ${COLORS.default.main}`,
    borderRadius: "50%",

    "&:after, &:before": {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translateX(-50%)",
      content: "''",
      display: "inline-block",
      width: "70%",
      height: 7,
      background: COLORS.default.main,
    },
    "&:before": {
      transform: "rotate(90deg) translate(-50%, 0)",
      transformOrigin: "left center",
    },
  },
});
