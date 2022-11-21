import { useState } from "react";
import "./index.css";

export function Select({ onChangeSelect }) {
  const [selectValue, setSelectValue] = useState(1);
  const list = [
    { id: 1, name: "Entrada" },
    { id: 2, name: "Despesa" },
  ];
  return (
    <div className="contSelect">
      <label htmlFor="select">Tipo de valor</label>
      <select value={selectValue} onChangeSelect={onChangeSelect} name="select">
        {list.map((item) => (
          <option value={item.id}>{item.name}</option>
        ))}
      </select>
    </div>
  );
}
