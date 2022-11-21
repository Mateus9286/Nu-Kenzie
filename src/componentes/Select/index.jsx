import "./index.css";

export function Select() {
  return (
    <div className="contSelect">
      <label htmlFor="select">Tipo de valor</label>
      <select name="select">
        <option>Entrada</option>
        <option>Despesa</option>
      </select>
    </div>
  );
}
