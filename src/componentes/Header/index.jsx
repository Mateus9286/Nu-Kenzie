import NuKenzie from "../Assets/NuKenzie(1).png";
import "./index.css";
import { Form } from "../Form";

export function Header({ ChangePageof, onClick, listTransactions }) {
  return (
    <>
      <div className="container">
        <header>
          <img src={NuKenzie} alt="logo" />
          <button
            ChangePageof={ChangePageof}
            onClick={onClick}
            className="startBtn"
          >
            Inicio
          </button>
        </header>
        <Form listTransactions={listTransactions} />
      </div>
    </>
  );
}
