import React from "react";
import styles from "./Index.style";

import { CardType } from "../../types/card.type";
import StoreType from "../../types/store.type";

import Card from "../../components/Card/Card";
import { useSelector } from "react-redux";

import Header from "../../components/Header/Header";

function Index() {
  const classes = styles();
  const cardsStorage = useSelector((data: StoreType) => data.cards);

  return (
    <>
      <Header title="Do you feed your cat today?" />

      <main className={classes.main}>
        {cardsStorage.map((data: CardType) => (
          <Card key={data.id} data={data} isAdmin={false} />
        ))}
      </main>
    </>
  );
}

export default Index;
