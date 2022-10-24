import React from "react";
import styles from "./Cart.style";
import pagesStyle from "../pages.style";

import { useSelector } from "react-redux";
import StoreType from "../../types/store.type";

import CartItem from "../../components/CartItem/CartItem";
import Header from "../../components/Header/Header";

function Cart() {
  const classes = styles();
  const cartStore = useSelector((state: StoreType) => state.cart);

  return (
    <>
      <Header title="Cart" />

      <table className={classes.cart}>
        <tbody>
          {cartStore.map((item) => (
            <CartItem item={item} key={item.id} />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Cart;
