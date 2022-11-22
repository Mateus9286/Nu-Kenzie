import React, { useState } from "react";
import { Data } from "../../data/Data";
import { Card } from "../Card";

const ListCards = ({ Transactions }) => {
  const cont = [{ ...Transactions, Data }];
  // const [list, setList] = useState(cont);

  // const lista = () => setList({ ...list, cont });
  return (
    <ul>
      {cont.map((ele, index) => (
        <Card key={index} Transactions={ele} />
      ))}
    </ul>
  );
};

export default ListCards;
