import { useState } from "react";
import "./index.css";

export function Select({ onChange }) {
  const list = [
    { id: "Entrada", name: "Entrada" },
    { id: "Despesa", name: "Despesa" },
  ];
  const [selectValue, setSelectValue] = useState(list);

  return (
    <div className="contSelect">
      <label htmlFor="select">Tipo de valor</label>
      <select
        value={() => setSelectValue([...selectValue, list])}
        onChange={onChange}
        name="select"
      >
        {list.map((item) => (
          <option value={item.id}>{item.name}</option>
        ))}
      </select>
    </div>
  );
}
