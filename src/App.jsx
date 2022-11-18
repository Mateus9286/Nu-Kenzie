import "./App.css";
import "./index.css";
import { useState } from "react";
import { Main } from "./componentes/Main";

function App() {
  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "saída", value: -150 },
  ]);

  const [changePage, setchangePage] = useState(false);

  const ChangePage = () => setchangePage(true);

  return (
    <main className="App">
      <Main changePage={changePage} onClick={ChangePage} />
    </main>
  );
}

export default App;
