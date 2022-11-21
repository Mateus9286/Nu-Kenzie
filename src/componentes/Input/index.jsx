import "./index.css";
import { Select } from "../Select";

export function Input() {
  return (
    <>
      <label htmlFor="descricao">Descrição</label>
      <input
        className="bigger-Input"
        name="descricao"
        placeholder="Digite aqui sua descrição"
        type="text"
      />
    </>
  );
}

export function SmallerInput() {
  return (
    <div className="contInputs">
      <div>
        <label htmlFor="number">Valor</label>
        <br />
        <input
          className="smallerInput"
          name="number"
          type="number"
          placeholder="1"
        />
      </div>
      <Select />
    </div>
  );
}
