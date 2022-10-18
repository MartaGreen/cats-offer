import React from "react";

import CARDS_DATA from "../../constants/card.constant";
import { CardType } from "../../types/card.type";
import Card from "../Card/Card";

function App() {
  return (
    <>
      <h1>Do you feed your cat today?</h1>

      {CARDS_DATA.map((data: CardType) => (
        <Card key={data.id} data={data} />
      ))}
    </>
  );
}

export default App;
