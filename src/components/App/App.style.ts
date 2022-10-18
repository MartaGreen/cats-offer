import { createUseStyles } from "react-jss";

export default createUseStyles({
  main: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 320px))",
    gridGap: 80,

    justifyContent: "center",
    alignItems: "center",

    padding: "0 10px",
  },
});
