import { createUseStyles } from "react-jss";
import { COLORS } from "../../constants/styles.constants";

export default createUseStyles({
  customCard: {
    height: 470,
    alignSelf: "flex-start",
  },
  customCard__inner: {
    backgroundImage: "none",
    padding: 30,
    justifyContent: "space-around",
  },
  customCard__addBtn: {
    position: "relative",
    width: 150,
    height: 150,
    border: `4px solid ${COLORS.default.main}`,
    borderRadius: "50%",

    "&:after, &:before": {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translateX(-50%)",
      content: "''",
      display: "inline-block",
      width: "70%",
      height: 7,
      background: COLORS.default.main,
    },
    "&:before": {
      transform: "rotate(90deg) translate(-50%, 0)",
      transformOrigin: "left center",
    },
  },

  customCard__form: {},

  form__fields: {},
  form__field: {
    width: "100%",
    borderBottom: "2px solid gray",
    margin: "0 0 20px 0",
    padding: "5px 10px",
    fontSize: 17,
  },

  form__btns: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: 40,
    width: "100%",
  },

  form__btn: {
    width: "40%",
    height: "100%",
    padding: "15px 20px",
    borderRadius: 15,
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "bold",
    cursor: "pointer",
  },
  form__cancelBtn: {
    backgroundColor: COLORS.selected.main,
  },
  form__createBtn: {
    backgroundColor: COLORS.default.main,
  },
});
