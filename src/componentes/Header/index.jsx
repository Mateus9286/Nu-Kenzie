import NuKenzie from "../Assets/NuKenzie(1).png";
import "./index.css";
import { Form } from "../Form";

export function Header() {
  return (
    <div className="container">
      <header>
        <img src={NuKenzie} alt="logo" />
        <button className="startBtn">Inicio</button>
      </header>
      <Form />
    </div>
  );
}
