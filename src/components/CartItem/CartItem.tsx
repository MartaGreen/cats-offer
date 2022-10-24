import React from "react";
import { CardType } from "../../types/card.type";
import styles from "./CartItem.style";
import dustbinIcon from "../../../assets/images/dustbin.svg";
import { useDispatch } from "react-redux";

import { rmItem } from "../../redux/slices/cart.slice";
import { cardSelectionChange } from "../../redux/slices/cards.slice";

function CartItem({ item }: { item: CardType }) {
  const classes = styles();

  const dispatch = useDispatch();

  const onDeleteFromCart = () => {
    dispatch(rmItem(item));
    dispatch(cardSelectionChange(item));
  };

  return (
    <tr
      key={item.id}
      className={`${classes.cart__item} ${
        item.isDisabled && classes.item_disabled
      }`}
    >
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
      <td className={`${classes.item__td} ${classes.item__delete}`}>
        <img
          src={dustbinIcon}
          alt="dustbin"
          className={classes.item__dustbin}
          onClick={onDeleteFromCart}
        />
      </td>
    </tr>
  );
}

export default CartItem;
