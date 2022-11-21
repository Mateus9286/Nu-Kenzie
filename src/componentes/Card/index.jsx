import "./index.css";
import trash from "../Assets/trash.png";

export function Card({ Transactions }) {
  return (
    <li className="card">
      <div className="titleCard">
        <h2 className="textCard">{Transactions.description}</h2>
        <div className="contValue">
          <p className="val">{Transactions.value}</p>
          <img className="trash" src={trash} alt="trash" />
        </div>
      </div>
      <span>{Transactions.type}</span>
    </li>
  );
}
