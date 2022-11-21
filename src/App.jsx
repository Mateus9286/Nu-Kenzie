import "./App.css";
import "./index.css";
import { useState } from "react";
import { Main } from "./componentes/Main";
import { Data } from "./data/Data";

function App() {
  const [listTransactions, setListTransactions] = useState(Data);

  function add(listTransactions) {
    setListTransactions([...listTransactions, Data]);
  }

  function Remove(description) {
    const newTransaction = listTransactions.filter(
      (list) => list.description !== description
    );
    setListTransactions();
  }

  const [changePage, setchangePage] = useState(false);

  const ChangePage = () => setchangePage(true);
  const ChangePageof = () => setchangePage(false);

  return (
    <main className="App">
      <Main
        listTransactions={add}
        changePage={changePage}
        ChangePageof={ChangePageof}
        onClick={ChangePage}
      />
    </main>
  );
}

export default App;
