import React, { createContext, useState } from 'react';
import Item1 from './Item1';
import Item2 from './Item2';
export const Context = createContext();
import "./App.css";
function App() {
    const [tog, settheme] = useState(true);

  const data = {
    background: tog? "red":"blue",
    color :tog? "black":"white",
    name: "Johnpaul"
  };
  return (
    <div>
      <Context.Provider value={data}>
         <center>
          <h1>My Theme Toggle !</h1><br />
          <button onClick={() => settheme(!tog)}>toggle</button>
         </center>
         <br />
        {tog?<Item1 />:<Item2/>}
      </Context.Provider>
    </div>
  );
}

export default App;
