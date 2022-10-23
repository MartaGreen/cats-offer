import { createUseStyles } from "react-jss";

export default createUseStyles({
  preview__delete: {
    position: "absolute",
    top: 13,
    right: 13,
    width: 25,
    height: 25,
    cursor: "pointer",
    transition: "0.5s",

    "&:before, &:after": {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      content: "''",
      width: "100%",
      height: 3,
      background: "gray",
      display: "inline-block",
      transformOrigin: "center",
    },
    "&:after": {
      transform: "rotate(-45deg)",
    },
    "&:before": {
      transform: "rotate(45deg)",
    },

    // "&:hover:after": {
    //   boxShadow: "10px -5px 1px grey",
    //   transform: "rotate(-45deg) translateX(-10px)",
    // },
    // "&:hover:before": {
    //   boxShadow: "10px -5px 1px grey",
    //   transform: "rotate(45deg) translateX(-10px)",
    // },
  },
});
