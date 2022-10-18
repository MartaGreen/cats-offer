import React from "react";
import styles from "./App.style";

import CARDS_DATA from "../../constants/card.constant";
import { CardType } from "../../types/card.type";
import Card from "../Card/Card";

function App() {
  const classes = styles();

  return (
    <>
      <h1>Do you feed your cat today?</h1>

      <main className={classes.main}>
        {CARDS_DATA.map((data: CardType) => (
          <Card key={data.id} data={data} />
        ))}
      </main>
    </>
  );
}

export default App;
