import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [cou, setCount] = useState(0);
  const [show, setShow] = useState(true);
  return (
  
   <>
   <h1 style={{textAlign:"center", color:"black"}}>Counter App</h1>
    <div className="coun">
      <h1>Counter App</h1>
      {show && <p>{cou}</p>}
      <div className="btns">
        <button onClick={() => setCount(cou + 1)}  style={{textAlign:"center", background:"blue"}}>+</button>
         <button onClick={() => setCount(0) }>Reset</button>
        <button onClick={() => setCount(cou - 1)}  style={{textAlign:"center", background:"blue"}}>-</button>
      </div>
      <button className="tog" onClick={() => setShow(!show)}  style={{textAlign:"center", background:"red"}}>
        Toggle
      </button>
    </div></>
  );
}
