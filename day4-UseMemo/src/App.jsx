import { useState, useCallback } from "react";
import List from "./List";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  const addItem = useCallback(() => {
    console.log("Item added");
  }, []);

  return (
    <div className={`app${dark?"dark":"light"}`}>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>

      <button onClick={() => setDark(!dark)}>
         Toggle
      </button>

      <List numbers={[1, 2, 3, 4, 5]} addItem={addItem} />
    </div>
  );
}

export default App;
