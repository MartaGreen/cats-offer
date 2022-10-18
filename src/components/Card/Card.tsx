import React, { useState } from "react";
import { CardType } from "../../types/card.type";

import Preview from "./Preview/Preview";
import Footer from "./Footer/Footer";

function Card({ data }: { data: CardType }) {
  const [isDisabled, setIsDisabled] = useState(data.isDisabled || false);
  const [isSelected, setIsSelected] = useState(data.isSelected || false);

  return (
    <div style={{ height: 510 }}>
      <Preview
        data={data}
        changeSelection={setIsSelected}
        isSelected={isSelected}
        isDisabled={isDisabled}
      />
      <Footer />
    </div>
  );
}

export default Card;
