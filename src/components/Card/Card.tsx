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
    </div>
  );
}

export default Card;
