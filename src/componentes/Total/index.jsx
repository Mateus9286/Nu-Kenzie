import "./index.css";

export function Total({ formData }) {
  return (
    <div className="container-Total">
      <div className="value-Container">
        <h2 className="value-Title">Valor total:</h2>
        <span value={formData.value} className="value">{`$ 0,00`}</span>
      </div>
      <p className="text">O valor se refere ao saldo</p>
    </div>
  );
}
