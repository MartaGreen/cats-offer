import { createUseStyles } from "react-jss";

export default createUseStyles({
  header: {
    margin: "0 0 50px 0",
  },

  header__title: {
    fontSize: 36,
    textAlign: "center",
    color: "#FFFFFF",
    lineHeight: "42px",
    fontWeight: 200,

    marginBottom: 26,
  },

  main: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 320px))",
    gridGap: 80,

    justifyContent: "center",
    alignItems: "center",

    padding: "0 10px",
  },
});
