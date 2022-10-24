import { createUseStyles } from "react-jss";
import { COLORS } from "../../../constants/styles.constants";

export default createUseStyles({
  preview__delete: {
    position: "absolute",
    top: 17,
    right: 13,
    width: 25,
    height: 25,
    overflow: "hidden",
    transition: "1s",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",

    "&:hover": {
      width: 80,

      "& $delete__icon": {
        transform: "translateX(-23px) rotate(-135deg)",
        border: `2px solid ${COLORS.default.main}`,
      },
      "& $delete__text": {
        right: 0,
        transform: "translateX(0)",
      },
    },
  },
  delete__icon: {
    width: 25,
    height: 25,
    transition: "1s",
    backgroundColor: "#fff",
    borderRadius: "50%",
    transform: "rotate(45deg)",

    "&:before, &:after": {
      position: "absolute",
      top: 0,
      left: 0,
      content: "''",
      width: "100%",
      height: 3,
      background: COLORS.default.main,
      display: "inline-block",
    },
    "&:before": {
      top: "50%",
      transform: "translateY(-50%)",
    },
    "&:after": {
      transformOrigin: "center",
      transform: "rotate(-90deg) translate(-44%, 0)",
    },
  },

  delete__text: {
    position: "absolute",
    height: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.default.main,
    color: "#fff",
    borderRadius: "0 20px 20px 0",
    padding: "7px 7px 7px 12px",
    transition: "1s",
    textTransform: "uppercase",
    transform: "translateX(100%)",
    fontSize: 12,
  },

  "@media screen and (max-width: 768px)": {
    preview__delete: {
      width: 80,
    },
    delete__icon: {
      transform: "translateX(-23px) rotate(-135deg)",
      border: `2px solid ${COLORS.default.main}`,
    },
    delete__text: {
      right: 0,
      transform: "translateX(0)",
    },
  },
});
