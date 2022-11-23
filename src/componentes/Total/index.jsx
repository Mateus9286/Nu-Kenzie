import "./index.css";

export function Total({ list }) {
  const valor = list.reduce(
    (accumulator, currentValue) => +accumulator + +currentValue.value,
    0
  );

  return (
    <div className="container-Total">
      <div className="value-Container">
        <h2 className="value-Title">Valor total:</h2>
        <span className="value"> R${valor},00</span>
      </div>
      <p className="text">O valor se refere ao saldo</p>
    </div>
  );
}
