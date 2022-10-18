import React from "react";

function WithOffer(Component: React.ComponentType<any>) {
  return ({
    amount,
    wordForms,
  }: {
    amount: number | string;
    wordForms: { singular: string; plural: string };
  }) => {
    const word = (amount === 1 && wordForms.singular) || wordForms.plural;
    amount = (amount === 1 && "a") || amount;

    return <Component amount={amount} word={word} />;
  };
}

export default WithOffer;
