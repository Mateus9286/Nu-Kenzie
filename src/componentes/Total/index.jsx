import "./index.css";

export function Total() {
  return (
    <div className="container-Total">
      <div className="value-Container">
        <h2 className="value-Title">Valor total:</h2>
        <span className="value">$ 8456</span>
      </div>
      <p className="text">O valor se refere ao saldo</p>
    </div>
  );
}
