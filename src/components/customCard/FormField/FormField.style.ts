import { createUseStyles } from "react-jss";

export default createUseStyles({
  form__field: {
    width: "100%",
    borderBottom: "2px solid gray",
    margin: "0 0 20px 0",
    padding: "5px 10px",
    fontSize: 17,
  },
  form__field_notValid: {
    borderBottom: "2px solid red",
  },
});
