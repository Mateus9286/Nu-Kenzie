import "./App.css";
import "./index.css";
import { useState } from "react";
import { Main } from "./componentes/Main";

function App() {
  const [list, setList] = useState([]);

  function addList(data) {
    setList([...list, data]);
  }

  function remove(description) {
    const newList = list.filter((card) => card.description !== description);
    setList(newList);
  }

  const [changePage, setchangePage] = useState(false);

  const ChangePage = () => setchangePage(true);
  const ChangePageof = () => setchangePage(false);

  return (
    <main className="App">
      <Main
        list={list}
        remove={remove}
        addList={addList}
        changePage={changePage}
        ChangePageof={ChangePageof}
        onClick={ChangePage}
      />
    </main>
  );
}

export default App;
