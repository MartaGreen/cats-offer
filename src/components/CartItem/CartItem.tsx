import React, { useState } from "react";
import styles from "./CartItem.style";

import dustbinIcon from "../../../assets/images/dustbin.svg";
import { CardType } from "../../types/card.type";
import { useDispatch } from "react-redux";
import { rmItem } from "../../redux/slices/cart.slice";
import { cardSelectionChange } from "../../redux/slices/cards.slice";

import Checkbox from "../Checkbox/Checkbox";

function CartItem({ item }: { item: CardType }) {
  const [itemSelected, setItemSelected] = useState(false);
  const classes = styles();

  const dispatch = useDispatch();

  const onDeleteFromCart = () => {
    dispatch(rmItem(item));
    dispatch(cardSelectionChange(item));
  };

  const onChangeSelection = () => {
    setItemSelected((state) => !state);
  };

  return (
    <tr
      key={item.id}
      className={`${classes.cart__item} ${
        item.isDisabled && classes.item_disabled
      }`}
    >
      <td className={classes.item__td} style={{ padding: 0, paddingLeft: 15 }}>
        <Checkbox
          extraStyleClasses={classes.item__selection_styled}
          id={item.id}
          isChecked={itemSelected}
          changeChecking={onChangeSelection}
        />
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
