import React from "react";
import styles from "./Admin.style";
import pagesStyle from "../pages.style";

import { Link } from "react-router-dom";
import { CardType } from "../../types/card.type";
import { useSelector } from "react-redux";
import StoreType from "../../types/store.type";

import Card from "../../components/Card/Card";
import CustomCard from "../../components/customCard/CustomCard";
import Header from "../../components/Header/Header";

function Admin() {
  const classes = styles();
  const cardsStorage = useSelector((data: StoreType) => data.cards);

  return (
    <>
      <Header title="Edit mode" />

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
