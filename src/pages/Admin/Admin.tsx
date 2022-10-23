import React from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";
import CustomCard from "../../components/customCard/CustomCard";
import { CardType } from "../../types/card.type";
import styles from "./Admin.style";
import pagesStyle from "../pages.style";
import { useSelector } from "react-redux";
import StoreType from "../../types/store.type";

function Admin() {
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
          <Link to="/" className={pagesClasses.header__link}>
            Back to catalog
          </Link>
        </nav>
      </header>

      <main className={classes.main}>
        {cardsStorage.map((data: CardType) => {
          return <Card key={data.id} data={data} isAdmin={true} />;
        })}

        <CustomCard />
      </main>
    </>
  );
}

export default Admin;
