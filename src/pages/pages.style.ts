import { createUseStyles } from "react-jss";

export default createUseStyles({
  header: {
    position: "relative",
    width: "98%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  header__nav: {
    position: "absolute",
    minWidth: 250,
    right: "5%",
    top: 0,

    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  header__link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: 20,
    fontWeight: "bold",

    "&:hover": {
      textDecoration: "underline",
    },
  },

  header__title: {
    fontSize: 36,
    textAlign: "center",
    color: "#FFFFFF",
    lineHeight: "42px",
    fontWeight: 200,

    margin: "40px 0 26px 0",
  },
});
