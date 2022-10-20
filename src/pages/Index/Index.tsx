import React from "react";
import styles from "./Index.style";
import CARDS_DATA from "../../constants/card.constant";
import { CardType } from "../../types/card.type";

import Card from "../../components/Card/Card";
import { Link } from "react-router-dom";

function Index() {
  const classes = styles();
  return (
    <>
      <header className={classes.header}>
        <h1 className={classes.header__title}>Do you feed your cat today?</h1>
        <nav className={classes.header__nav}>
          <Link to="/cart">Cart</Link>
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
