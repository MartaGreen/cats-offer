import React, { useState } from "react";
import { CardType } from "../../types/card.type";

import Preview from "./Preview/Preview";
import Footer from "./Footer/Footer";

function Card({ data }: { data: CardType }) {
  const [isDisabled, setIsDisabled] = useState(data.isDisabled || false);
  const [isSelected, setIsSelected] = useState(data.isSelected || false);

  return (
    <div>
      <Preview />
      <Footer />
    </div>
  );
}

export default Card;
