import { createUseStyles } from "react-jss";
import { COLORS } from "../../../constants/styles.constants";

export default createUseStyles({
  header__link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: 20,

    "&:hover": {
      textDecoration: "underline",
    },
  },

  header__link_selected: {
    color: COLORS.selected.main,
    textDecoration: "underline",
    fontWeight: "bold",
    fontSize: 22,
  },
});
