import { createUseStyles } from "react-jss";
import catImg from "@images/cat.png";

export default createUseStyles({
  preview: {
    position: "relative",
    height: "92.3%",

    background: "#1698D9",

    clipPath: "polygon(40px 0, 100% 0, 100% 100%, 0 100%, 0 40px)",
    borderRadius: 10,
    padding: 4,

    transition: "0.3s",

    "&:hover": {
      cursor: "pointer",
      background: "#2EA8E6",
    },
  },
  preview__inner: {
    position: "relative",
    height: "100%",

    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",

    background: "#ffffff",
    clipPath: "polygon(40px 0, 100% 0, 100% 100%, 0 100%, 0 40px)",

    backgroundImage: `url(${catImg})`,
    backgroundRepeat: "no-repeat",
    backgroundPositionX: "50%",
    backgroundPositionY: "183%",

    borderRadius: 10,
  },

  preview__description: {
    height: 130,
    width: 228,

    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",

    marginTop: 16,

    "&:before": {
      content: "'Delicious overseas food'",
      fontSize: 16,
      letterSpacing: 0.1,
      color: "#666666",

      marginBottom: 5,
    },
  },

  description__title: {
    fontSize: 48,
    letterSpacing: 1.5,
  },
  description__taste: {
    fontSize: 24,
    letterSpacing: 0.7,

    marginBottom: 14,
  },
  description__offer: {
    fontSize: 14,
  },

  description__weight: {
    position: "absolute",
    right: 12,
    bottom: 12,

    width: 80,
    height: 75,

    background: "#1698D9",
    borderRadius: "50%",
    color: "#FFFFFF",

    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",

    paddingBottom: 5,

    transition: "0.3s",
  },

  // selected: {
  //   background: "#D91667",

  //   "& $description__weight": {
  //     background: "#D91667",
  //   },

  //   "&:hover": {
  //     background: "#E52E7A",

  //     "& $description__weight": {
  //       background: "#E52E7A",
  //     },

  //     "& $preview__description:before": {
  //       content: "'Котэ не одобряет?'",
  //       color: "#E62E7A",
  //     },
  //   },
  // },

  // selected_hover: {
  //   "&:hover": {
  //     background: "#D91667",

  //     "& $description__weight": {
  //       background: "#D91667",
  //     },

  //     "& $preview__description:before": {
  //       content: "'Сказочное заморское яство'",
  //       color: "#666666",
  //     },
  //   },
  // },

  // disabled: {
  //   background: "#B3B3B3",
  //   pointerEvents: "none",

  //   "-webkit-touch-callout": "none" /* iOS Safari */,
  //   "-webkit-user-select": "none" /* Chrome/Safari/Opera */,
  //   "-khtml-user-select": "none" /* Konqueror */,
  //   "-moz-user-select": "none" /* Firefox */,
  //   "-ms-user-select": "none" /* Internet Explorer/Edge */,
  //   "user-select": "none",

  //   "& $description__weight": {
  //     background: "#B3B3B3",
  //   },
  //   "& $preview": {
  //     zIndex: 1000,
  //     opacity: "45%",
  //   },
  // },
});
