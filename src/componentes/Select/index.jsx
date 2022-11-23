import "./index.css";

export function Select({ onChange, defaultValue, onClick, value }) {
  const list = [
    { id: "Entrada", name: "Entrada" },
    { id: "Despesa", name: "Despesa" },
  ];

  return (
    <div className="contSelect">
      <label htmlFor="select">Tipo de valor</label>
      <select
        value={value}
        onClick={onClick}
        defaultValue={defaultValue}
        onChange={onChange}
        name="select"
        required
      >
        <option value={""}>{""}</option>
        {list.map((item) => (
          <option value={item.id}>{item.name}</option>
        ))}
      </select>
    </div>
  );
}
