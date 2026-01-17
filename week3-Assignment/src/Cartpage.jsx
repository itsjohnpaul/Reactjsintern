import { useState } from "react";
import "./Cartpage.css";
import useCartReducer from "./Reducer";

function Cartpage() {
  const { carts, dispatch } = useCartReducer();

  const totalPrice = carts.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const [submit, setSubmit] = useState(true);

  return (
    <>
      <div className="card">
        {submit ? <div className="page">
          <h1 className="title">Your Cart</h1>
          <center>
            <p>{carts.length == 0 ? "cart is empty" : ""}</p>
          </center>  <center>  <h2 className="total">Total: ${totalPrice}</h2></center>
          <div className="li">
            {carts.map(item => (
              <div className="item" key={item.id}>
                <img className="img" src={item.image} alt={item.title} />
                <div className="info">
                  <h3 className="name">{item.title}</h3>
                  <p className="price">${item.price}</p>
                  <p className="qty">Qty: {item.quantity}</p>
                  <button
                    className="remove"
                    onClick={() => dispatch({ type: "Delete", payload: item.id })}
                  >
                    Remove
                  </button>
                  <button
                    className="in"
                    onClick={() => dispatch({ type: "increase", payload: item.id })}
                    style={{background:"green"}}
                  >
                    +
                  </button>
                  <button
                    className="de"
                    onClick={() => dispatch({ type: "decrease", payload: item.id })}
                 style={{background:"red"}}

                  >
                    -
                  </button>
                </div>
              </div>
            ))}
          </div>
          <center>
            {carts.length > 0 ? <button onClick={() => setSubmit(false)}>
              BUY
            </button> : ""}
          </center>

        </div> :
          <div className="d">
            <center><h2>Your Order has been Placed !</h2>
              <h2>Total Amount : ${totalPrice}</h2>
              <button onClick={() => {
                dispatch({ type: "CLEAR" });
                setSubmit(true);
              }}>
                Return
              </button>

            </center>
          </div>
        }
      </div>
    </>
  );
}

export default Cartpage;
