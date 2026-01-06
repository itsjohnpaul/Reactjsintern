import React, { useReducer, useState } from 'react'
import "./App.css"

const reducer = (cards, action) => {
  switch (action.type) {
    case "Add":
      return [...cards, action.payload]
    case "delete":
      return cards.filter((card) => card.id !== action.payload);
    case "quantity":
      return cards.map(i =>i.id == action.payload ?{...i,quantity: i.quantity + 1} :i);
    case "decrease":
      return cards.map(i =>i.id == action.payload ?{...i,quantity: i.quantity - 1 }:i);
    case "clear":
      return [];
    default:
      return cards

  }
}
function App() {
  const cards = [
    { id: 1, name: "shirt", price: 600, quantity: 0 },
    { id: 2, name: "tshirt", price: 400, quantity: 0 },
    { id: 3, name: "trouser", price: 600, quantity: 0 },
    { id: 4, name: "pants", price: 500, quantity: 0 },
  ];

  const [list, dispatch] = useReducer(reducer, []);
  return (
    <div className='main'>
      <h1>Shopping Cards
      </h1>
      <div className="dvi" >
        {cards.map((item) => (
          <div className="it" key={item.id}>
            <h2>Product:{item.name}</h2>
            <h4>Price: ${item.price}</h4>
            <button onClick={() => dispatch({ type: "Add", payload: item })}>add</button>
          </div>
        ))}
      </div>
      <hr />
  <h2>{list.length==0 ?"No items 🛒":  <h2>Added Carts 🛒</h2>}</h2>
      <div className="dvi">
        {list.map((i, index) => (
          <div className="it" key={index}>
            <h2>Product:{i.name}</h2>
            <h4>Price: ${i.price}</h4>
            <h4>{i.quantity}</h4>
            <div className="but">
              <button onClick={() => dispatch({ type: "decrease", payload: i.id })}>-</button>
               <button onClick={() => dispatch({ type: "quantity", payload: i.id })}>+</button>

            </div>

            <button onClick={() => dispatch({ type: "delete", payload: i.id })}>delete</button>
          </div>
        ))}
      </div>
      {list.length !== 0 &&
        <center>       <button onClick={() => { dispatch({ type: "clear" }) }} style={{ marginTop: "10px" }}>clear</button>
        </center>
      }
    </div>
  )
}

export default App