import React from "react";
import { Card } from "../Card";
import "./index.css";

const ListCards = ({ remove, newList }) => {
  return (
    <ul>
      {newList.map((card, index) => (
        <Card remove={remove} key={index} newList={card} />
      ))}
    </ul>
  );
};

export default ListCards;
