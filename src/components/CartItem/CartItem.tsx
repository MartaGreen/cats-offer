import React from "react";
import { CardType } from "../../types/card.type";
import styles from "./CartItem.style";

function CartItem({ item }: { item: CardType }) {
  const classes = styles();

  return (
    <tr key={item.id} className={classes.cart__item}>
      <td className={classes.item__td} style={{ padding: 0, paddingLeft: 15 }}>
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
      <td className={`${classes.item__td}`} style={{ textAlign: "start" }}>
        <b style={{ fontSize: 17, textTransform: "uppercase" }}>
          {item.taste}:
        </b>{" "}
        {item.selectedMsg} ({item.servingsAmount} serv.)
      </td>
      <td className={`${classes.item__td} ${classes.item__buy}`}>buy</td>
    </tr>
  );
}

export default CartItem;
