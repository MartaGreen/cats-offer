import React from "react";
import styles from "./Delete.style";
import { useDispatch } from "react-redux";
import { rmCard } from "../../../redux/slices/cards.slice";
import { rmItem } from "../../../redux/slices/cart.slice";
import { CardType } from "../../../types/card.type";

function Delete({ data }: { data: CardType }) {
  const classes = styles();
  const dispatch = useDispatch();

  const onDeleteCard = () => {
    dispatch(rmCard(data));
    dispatch(rmItem(data));
  };

  return <div className={classes.preview__delete} onClick={onDeleteCard}></div>;
}

export default Delete;
