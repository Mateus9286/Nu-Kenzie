import "./index.css";
import { Select } from "../Select";

export function Input({ onChange, value }) {
  return (
    <>
      <label htmlFor="descricao">Descrição</label>
      <input
        value={value}
        onChange={onChange}
        className="bigger-Input"
        name="descricao"
        placeholder="Digite aqui sua descrição"
        type="text"
        required
      />
    </>
  );
}

export function SmallerInput({
  onChange,
  onChangeSelect,
  onClick,
  value,
  defaultValue,
}) {
  return (
    <div className="contInputs">
      <div>
        <label htmlFor="number">Valor</label>
        <br />
        <input
          value={value}
          onChange={onChange}
          className="smallerInput"
          name="number"
          type="number"
          placeholder="1"
          required
        />
      </div>
      <Select
        value={defaultValue}
        onClick={onClick}
        onChange={onChangeSelect}
      />
    </div>
  );
}
