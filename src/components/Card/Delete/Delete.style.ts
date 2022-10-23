import { createUseStyles } from "react-jss";

export default createUseStyles({
  preview__deleteContainer: {
    position: "absolute",
    top: 13,
    right: 13,
    width: 25,
    height: 25,

    "&:hover": {
      "& $preview__delete": {
        transform: "translateX(-55px) rotate(-180deg)",
      },
      "&:after": {
        content: "'delete'",
        position: "absolute",
        top: 0,
        right: 0,
        borderRadius: "0 20px 20px 0 ",
        background: "gray",
        color: "#fff",
        padding: 5,
      },
    },
  },
  preview__delete: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 25,
    height: 25,
    cursor: "pointer",
    transition: "1s",
    backgroundColor: "#fff",
    borderRadius: "50%",

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
  },
});
