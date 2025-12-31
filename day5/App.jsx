import React, { useState } from 'react';

import "./calculator.css";
export default function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) =>
    setInput(input + value);

const handleEquals = () => {
  try {
    setInput(eval(input).toString());
  } catch {
    setInput("Error");
  }
};

  const clearInput = () => setInput("");

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const symbols = ["+", "-", "*", "/"];

  return (
    <div className="cal">
      <h2>Simple Calculator</h2>
      <input type="text" value={input} readOnly className="inp" />

      <div className="nums">
        {numbers.map(num => (
          <button key={num} onClick={() => handleClick(num.toString())}>{num}</button>
        ))}
      </div>

      <div className="sym">
        {symbols.map(sym => (
          <button key={sym} onClick={() => handleClick(sym)}>{sym}</button>
        ))}
        <button onClick={handleEquals}>=</button>
        <button onClick={clearInput}>C</button>
      </div>
    </div>
  );
}
