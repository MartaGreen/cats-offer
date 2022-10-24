import { createUseStyles } from "react-jss";
import { COLORS } from "../../../constants/styles.constants";

export default createUseStyles({
  footer: {
    width: "99%",

    textAlign: "center",
    fontSize: 13,
    color: "#FFFFFF",

    marginTop: 15,
  },

  footer__buyLink: {
    textDecoration: "underline",
    textDecorationStyle: "dotted",
    color: COLORS.default.main,
  },

  footer_disabled: {
    color: "rgb(255, 255, 102)",
  },
});
