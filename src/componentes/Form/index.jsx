import { Input, SmallerInput } from "../Input";
import { Button } from "../Button";
import "./index.css";
import { Total } from "../Total";
import ListCards from "../ListCard";
import { useState } from "react";
import emptyCard from "../Assets/NoCard.png";

export function Form({ addList, list, remove }) {
  const [formData, setformData] = useState({
    description: "",
    type: "",
    value: "",
  });

  function submit(event) {
    event.preventDefault();
    addList(formData);
    setformData({
      description: "",
      type: "",
      value: "",
    });
  }

  const [filter, setFilter] = useState("Todos");

  const newList = list.filter((cards) => {
    return filter === "Todos" ? true : filter === cards.type;
  });

  return (
    <div className="flex">
      <div>
        <form onSubmit={submit}>
          <Input
            value={formData.description}
            onChange={(event) =>
              setformData({ ...formData, description: event.target.value })
            }
          />
          <span>Ex: Compra de roupas</span>
          <SmallerInput
            value={formData.value}
            defaultValue={formData.type}
            onChangeSelect={(event) =>
              setformData({
                ...formData,
                type: event.target.value,
              })
            }
            onChange={(event) => {
              setformData({ ...formData, value: `${event.target.value}` });
            }}
          />
          <div>
            <Button />
          </div>
        </form>
        <Total list={list} />
      </div>
      <div className="cont-Resumo">
        <div className="cont-Button">
          <h2 className="titleResumo">Resumo financeiro</h2>
          <div>
            <button onClick={() => setFilter("Todos")} className="button-Todos">
              Todos
            </button>
            <button
              onClick={() => setFilter("Entrada")}
              className="button-Entradas"
            >
              Entradas
            </button>
            <button
              onClick={() => setFilter("Despesa")}
              className="button-Despesas"
            >
              Despesas
            </button>
          </div>
        </div>
        {list.length === 0 ? (
          <>
            <h2 className="titleNenhumLançamento">
              Você ainda não possui nenhum lançamento
            </h2>
            <br />
            <img src={emptyCard} alt="emptyCard" />
          </>
        ) : (
          <ListCards
            newList={newList}
            remove={remove}
            list={list}
            addList={addList}
          />
        )}
      </div>
    </div>
  );
}
