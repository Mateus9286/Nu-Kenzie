import "./index.css";
import trash from "../Assets/trash.png";

export function Card({ newList, remove }) {
  return (
    <li className="card">
      <div className="titleCard">
        <h2 className="textCard">{newList.description}</h2>
        <div className="contValue">
          <p className="val">R${newList.value},00</p>
          <img
            className="trash"
            onClick={() => remove(newList.description)}
            src={trash}
            alt="trash"
          />
        </div>
      </div>
      <span>{!newList.type ? "Entrada" : newList.type}</span>
    </li>
  );
}
