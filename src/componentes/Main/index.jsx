import NuKenzie from "../Assets/NuKenzie.png";
import Group from "../Assets/Group 262.png";
import { Header } from "../Header";
import "./index.css";

export function Main({ onClick, changePage }) {
  if (!changePage) {
    return (
      <>
        <div className="presentation-Main">
          <img className="logo" src={NuKenzie} alt="logo" />
          <h1 className="title-Main">
            Centralize o controle das suas finanças
          </h1>
          <p className="text-Main">de forma rápida e segura</p>
          <button onClick={onClick} className="btn-Main">
            Iniciar
          </button>
        </div>
        <img src={Group} alt="image" />
      </>
    );
  } else {
    return (
      <>
        <Header></Header>
      </>
    );
  }
}
