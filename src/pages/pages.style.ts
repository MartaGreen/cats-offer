import { createUseStyles } from "react-jss";

export default createUseStyles({
  header: {
    position: "relative",
    // margin: "0 0 50px 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  header__nav: {
    position: "absolute",
    right: "5%",
    top: 0,
  },

  header__link: {
    color: "#fff",
    textDecoration: "none",
  },

  header__title: {
    fontSize: 36,
    textAlign: "center",
    color: "#FFFFFF",
    lineHeight: "42px",
    fontWeight: 200,

    margin: "30px 0",
  },
});
