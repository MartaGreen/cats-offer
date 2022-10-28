import React, { useMemo } from "react";
import { CardType } from "../../types/card.type";

import Preview from "./Preview/Preview";
import AdminPreview from "./AdminPreview/AdminPreview";
import Footer from "./Footer/Footer";
import Delete from "./Delete/Delete";

function Card({ data, isAdmin }: { data: CardType; isAdmin: boolean }) {
  const cardData = useMemo(() => data, [data]);

  return (
    <div style={{ height: 510, position: "relative" }}>
      {(isAdmin && <AdminPreview data={data} />) || <Preview data={cardData} />}
      <Footer data={cardData} />
      {isAdmin && <Delete data={cardData} />}
    </div>
  );
}

export default Card;
