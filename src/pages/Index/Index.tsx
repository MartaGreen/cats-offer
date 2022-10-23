import React from "react";
import styles from "./Index.style";
import pagesStyle from "../pages.style";

import { CardType } from "../../types/card.type";
import StoreType from "../../types/store.type";

import Card from "../../components/Card/Card";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import CustomCard from "../../components/customCard/CustomCard";

function Index() {
  const classes = styles();
  const pagesClasses = pagesStyle();
  const cartStorage = useSelector((data: StoreType) => data.cart);
  const cardsStorage = useSelector((data: StoreType) => data.cards);

  return (
    <>
      <header className={pagesClasses.header}>
        <h1 className={pagesClasses.header__title}>
          Do you feed your cat today?
        </h1>
        <nav className={pagesClasses.header__nav}>
          <Link to="/cart" className={pagesClasses.header__link}>
            Cart ({cartStorage.length})
          </Link>
        </nav>
      </header>

      <main className={classes.main}>
        {cardsStorage.map((data: CardType) => (
          <Card key={data.id} data={data} />
        ))}

        <CustomCard />
      </main>
    </>
  );
}

export default Index;
