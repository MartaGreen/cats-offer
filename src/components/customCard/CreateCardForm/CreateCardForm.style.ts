import { createUseStyles } from "react-jss";
import { COLORS } from "../../../constants/styles.constants";

export default createUseStyles({
  customCard__form: {},

  form__disableField: {
    width: 90,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  disableField__text: {
    color: COLORS.default.main,
    fontWeight: "bold",
  },

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
