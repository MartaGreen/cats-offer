import React from "react";
import styles from "./Cart.style";
import pagesStyle from "../pages.style";

import { useSelector } from "react-redux";
import StoreType from "../../types/store.type";

import { Link } from "react-router-dom";
import CartItem from "../../components/CartItem/CartItem";

function Cart() {
  const classes = styles();
  const pagesClasses = pagesStyle();
  const cartStore = useSelector((state: StoreType) => state.cart);

  return (
    <>
      <header className={pagesClasses.header}>
        <nav className={pagesClasses.header__nav} style={{ left: "5%" }}>
          <Link to="/" className={pagesClasses.header__link}>
            Back to catalog
          </Link>
        </nav>
        <h1 className={pagesClasses.header__title}>Cart</h1>
      </header>
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
