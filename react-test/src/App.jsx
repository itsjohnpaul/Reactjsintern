import React, { useState } from 'react';
import "./App.css";
export default function App() {

  const initems = [
    { id: 1, name: "Item A", priority: 2 },
    { id: 2, name: "Item B", priority: 1 },
    { id: 3, name: "Item C", priority: 3 }
  ];

  const [tog, setToggle] = useState(true);
  const [item, setItems] = useState(initems);

  function sorted() {
    const sorteditems = [...item].sort(
      (a,b) => a.priority - b.priority
    );
    setItems(sorteditems);
  }

  return (
    <>
      <h3>{tog ? "Items are shown" : "Items are Hidden"}</h3>
      {tog && (
        <div className="con">
          <button onClick={sorted}>Sort</button>

          {item.length === 0 ? (
            <p>No items to show</p>) :
             ( item.map((data) => (
              <div className="cons" key={data.id}>
                <p>{data.name}</p>
                <p>{data.priority}</p>
              </div>
            ))
          )}
        </div>
      )}
     <div className="but">
       <button onClick={() => setToggle(!tog)}>
        {tog ? "Hide" : "Show"}
      </button></div>
    </>
  );
}
