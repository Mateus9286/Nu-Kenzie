import { Input, SmallerInput } from "../Input";
import { Button } from "../Button";
import "./index.css";
import { Total } from "../Total";
import ListCards from "../ListCard";
import { useState } from "react";
import { Data } from "../../data/Data";

export function Form() {
  const [formData, setformData] = useState({
    description: "",
    type: "",
    value: "",
  });

  function evento(event) {
    event.preventDefault();
  }

  return (
    <div className="flex">
      <div>
        <form onSubmit={evento}>
          <Input
            onChange={(event) =>
              setformData({ ...formData, description: event.target.value })
            }
          />
          <span>Ex: Compra de roupas</span>
          <SmallerInput
            value
            onChangeSelect={(event) =>
              setformData({
                ...formData,
                type: event.target.value,
              })
            }
            onChange={(event) =>
              setformData({ ...formData, value: `R$ ${event.target.value},00` })
            }
          />
          <div>
            <Button />
          </div>
        </form>
        <Total formData={formData.value} />
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
        <ListCards Transactions={formData} />
      </div>
    </div>
  );
}
