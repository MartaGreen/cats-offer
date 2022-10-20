import React from "react";
import styles from "./Cart.style";
import { useSelector } from "react-redux";
import StoreType from "../../types/store.type";

function Cart() {
  const classes = styles();
  const cartStore = useSelector((state: StoreType) => state.cart);

  return (
    <table className={classes.cart}>
      <tbody>
        {cartStore.map((item) => {
          console.log(item);
          return (
            <tr key={item.id} className={classes.cart__item}>
              <td className={classes.item__td}>
                <input
                  type="checkbox"
                  name={item.id}
                  id={item.id}
                  className={classes.item__selection}
                />
                <label
                  htmlFor={item.id}
                  className={classes.item__selection_styled}
                ></label>
              </td>
              <td
                className={`${classes.item__td}`}
                style={{ textAlign: "start" }}
              >
                <b style={{ fontSize: 17, textTransform: "uppercase" }}>
                  {item.taste}:
                </b>{" "}
                {item.selectedMsg}
              </td>
              <td className={`${classes.item__td} ${classes.item__buy}`}>
                buy
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Cart;
