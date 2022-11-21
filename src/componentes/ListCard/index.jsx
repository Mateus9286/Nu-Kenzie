import React from "react";
import { Card } from "../Card";

const ListCards = ({ Transactions }) => {
  return (
    <ul>
      <Card Transactions={Transactions} />
    </ul>
  );
};

export default ListCards;
