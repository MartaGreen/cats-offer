import React from "react";
import styles from "./Index.style";
import CARDS_DATA from "../../constants/card.constant";
import { CardType } from "../../types/card.type";
import StoreType from "../../types/store.type";

import Card from "../../components/Card/Card";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Index() {
  const classes = styles();
  const cartStore = useSelector((data: StoreType) => data.cart);

  return (
    <>
      <header className={classes.header}>
        <h1 className={classes.header__title}>Do you feed your cat today?</h1>
        <nav className={classes.header__nav}>
          <Link to="/cart" className={classes.header__cart}>
            Cart {cartStore.length}
          </Link>
        </nav>
      </header>

      <main className={classes.main}>
        {CARDS_DATA.map((data: CardType) => (
          <Card key={data.id} data={data} />
        ))}
      </main>
    </>
  );
}

export default Index;
