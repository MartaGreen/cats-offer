import React from "react";
import WithOffer from "../WithOffer";

function ServingsOffer({
  amount,
  word,
}: {
  amount: number | "";
  word: string;
}) {
  return (
    <div>
      <b>{amount}</b> {word}
    </div>
  );
}

export default WithOffer(ServingsOffer);
