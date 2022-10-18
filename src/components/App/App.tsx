import React from "react";
import styles from "./App.style";

import CARDS_DATA from "../../constants/card.constant";
import { CardType } from "../../types/card.type";
import Card from "../Card/Card";

function App() {
  const classes = styles();

  return (
    <>
      <header className={classes.header}>
        <h1 className={classes.header__title}>Do you feed your cat today?</h1>
      </header>

      <main className={classes.main}>
        {CARDS_DATA.map((data: CardType) => (
          <Card key={data.id} data={data} />
        ))}
      </main>
    </>
  );
}

export default App;
