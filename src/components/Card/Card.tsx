import React, { useState } from "react";
import { CardType } from "../../types/card.type";

import Preview from "./Preview/Preview";
import Footer from "./Footer/Footer";
import Delete from "./Delete/Delete";

function Card({ data }: { data: CardType }) {
  const [isDisabled, setIsDisabled] = useState(data.isDisabled || false);
  const [isSelected, setIsSelected] = useState(data.isSelected || false);

  return (
    <div style={{ height: 510, position: "relative" }}>
      <Preview
        data={data}
        isSelected={isSelected}
        isDisabled={isDisabled}
        changeSelection={setIsSelected}
      />
      <Footer
        data={data}
        isSelected={isSelected}
        isDisabled={isDisabled}
        changeSelection={setIsSelected}
      />
      <Delete data={data} />
    </div>
  );
}

export default Card;
