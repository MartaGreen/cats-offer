import React from "react";
import { useDispatch } from "react-redux";
import { rmCard } from "../../../redux/slices/cards.slice";
import { CardType } from "../../../types/card.type";
import styles from "./Delete.style";

function Delete({ data }: { data: CardType }) {
  const classes = styles();
  const dispatch = useDispatch();

  const onDeleteCard = () => {
    dispatch(rmCard(data));
  };

  return <div className={classes.preview__delete} onClick={onDeleteCard}></div>;
}

export default Delete;
