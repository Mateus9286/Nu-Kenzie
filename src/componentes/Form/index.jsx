import { Input, SmallerInput } from "../Input";
import { Button } from "../Button";
import "./index.css";
import { Total } from "../Total";
import { Card } from "../Card";
import ListCards from "../ListCard";
import { useState } from "react";

export function Form({ listTransactions }) {
  const [formData, setformData] = useState({
    description: "",
    type: "",
    value: "",
  });
  return (
    <div className="flex">
      <div>
        <form>
          <Input />
          <span>Ex: Compra de roupas</span>
          <SmallerInput />
          <div>
            <Button />
          </div>
        </form>
        <Total />
      </div>
      <div className="cont-Resumo">
        <div className="cont-Button">
          <h2 className="titleResumo">Resumo financeiro</h2>
          <div>
            <button className="button-Todos">Todos</button>
            <button className="button-Entradas">Entradas</button>
            <button className="button-Despesas">Despesas</button>
          </div>
        </div>
        <ListCards listTransactions={listTransactions} />
      </div>
    </div>
  );
}
