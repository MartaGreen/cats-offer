import { createUseStyles } from "react-jss";
import catImg from "@images/cat.png";
import { COLORS } from "../../../constants/styles.constants";

export default createUseStyles({
  preview: {
    position: "relative",
    height: "92.3%",

    background: COLORS.default.main,

    clipPath: "polygon(40px 0, 100% 0, 100% 100%, 0 100%, 0 40px)",
    borderRadius: 10,
    padding: 4,

    transition: "0.3s",

    "&:hover": {
      cursor: "pointer",
      background: COLORS.default.hover,
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

    background: COLORS.default.main,
    borderRadius: "50%",
    color: "#FFFFFF",

    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",

    paddingBottom: 5,

    transition: "0.3s",
  },

  selected: {
    background: COLORS.selected.main,

    "& $description__weight": {
      background: COLORS.selected.main,
    },

    "&:hover": {
      background: COLORS.selected.hover,

      "& $description__weight": {
        background: COLORS.selected.hover,
      },

      "& $preview__description:before": {
        content: "'Kote disapproves?'",
        color: "#E62E7A",
      },
    },
  },

  selected_hover: {
    "&:hover": {
      background: COLORS.selected.main,

      "& $description__weight": {
        background: COLORS.selected.main,
      },

      "& $preview__description:before": {
        content: "'Delicious overseas food'",
        color: "#666666",
      },
    },
  },

  disabled: {
    background: COLORS.disabled.main,
    pointerEvents: "none",

    "-webkit-touch-callout": "none" /* iOS Safari */,
    "-webkit-user-select": "none" /* Chrome/Safari/Opera */,
    "-khtml-user-select": "none" /* Konqueror */,
    "-moz-user-select": "none" /* Firefox */,
    "-ms-user-select": "none" /* Internet Explorer/Edge */,
    "user-select": "none",

    "& $description__weight": {
      background: COLORS.disabled.main,
    },
    "& $preview__inner": {
      zIndex: 1000,
      opacity: "45%",
    },
  },
});
