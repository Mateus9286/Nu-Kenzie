import React from "react";
import { Card } from "../Card";

const ListCards = ({ listTransactions }) => {
  return (
    <ul>
      {}
      <Card listTransactions={listTransactions} />
    </ul>
  );
};

export default ListCards;
