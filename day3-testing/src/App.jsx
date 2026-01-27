import React, { useState } from "react";
import "./App.css";

function App() {
  const [disabled, setDisabled] = useState(false);
  const handleClick = () => {
    alert("Button Clicked");
    setDisabled(true);
  };
  return (
    <div className="container">
      <button
        className="btn"
        onClick={handleClick}
        disabled={disabled}
      >
        Click !
      </button>
    </div>
  );
}

export default App;
