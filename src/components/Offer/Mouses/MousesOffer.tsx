import React from "react";
import WithOffer from "../WithOffer";

function MousesOffers({ amount, word }: { amount: number | ""; word: string }) {
  return (
    <div>
      <b>{amount}</b> {word} as a gift
    </div>
  );
}

export default WithOffer(MousesOffers);
