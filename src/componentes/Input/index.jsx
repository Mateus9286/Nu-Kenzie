import "./index.css";
import { Select } from "../Select";

export function Input({ onChange }) {
  return (
    <>
      <label htmlFor="descricao">Descrição</label>
      <input
        onChange={onChange}
        className="bigger-Input"
        name="descricao"
        placeholder="Digite aqui sua descrição"
        type="text"
      />
    </>
  );
}

export function SmallerInput({ onChange, onChangeSelect }) {
  return (
    <div className="contInputs">
      <div>
        <label htmlFor="number">Valor</label>
        <br />
        <input
          onChange={onChange}
          className="smallerInput"
          name="number"
          type="number"
          placeholder="1"
        />
      </div>
      <Select onChange={onChangeSelect} />
    </div>
  );
}
