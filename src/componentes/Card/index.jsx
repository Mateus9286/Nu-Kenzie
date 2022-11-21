import "./index.css";
import trash from "../Assets/trash.png";

export function Card({ listTransactions }) {
  return (
    <li className="card">
      <div className="titleCard">
        <h2 className="textCard">{listTransactions.description}</h2>
        <div className="contValue">
          <p className="val">{listTransactions.value}</p>
          <img className="trash" src={trash} alt="trash" />
        </div>
      </div>
      <span>Entrada</span>
    </li>
  );
}
