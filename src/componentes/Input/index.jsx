import "./index.css";

export function Input() {
  return (
    <>
      <label htmlFor="descricao">Descrição</label>
      <input
        id="descricao"
        placeholder="Digite aqui sua descrição"
        type="text"
      />
    </>
  );
}
