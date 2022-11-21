import { Input, SmallerInput } from "../Input";
import { Button } from "../Button";
import "./index.css";
import { Total } from "../Total";
import ListCards from "../ListCard";
import { useState } from "react";

export function Form({ listTransactions, value }) {
  const [formData, setformData] = useState({
    description: "",
    type: "",
    value: "",
  });

  return (
    <div className="flex">
      <div>
        <form>
          <Input
            onChange={(event) =>
              setformData({ ...formData, description: event.target.value })
            }
          />
          <span>Ex: Compra de roupas</span>
          <SmallerInput
            value={value}
            onChangeSelect={(event) =>
              setformData({ ...formData, value: event.target.value })
            }
            onChange={(event) =>
              setformData({ ...formData, value: event.target.value })
            }
          />
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
        <ListCards Transactions={formData} />
      </div>
    </div>
  );
}
