import "./App.css";
import "./index.css";
import { useState } from "react";
import { Main } from "./componentes/Main";

function App() {
  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "saída", value: -150 },
  ]);

  function add(listTransactions) {
    setListTransactions([...listTransactions]);
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
