import "./Products.css";
import { useState } from "react";
function Products({ products }) {
  const [btn, setInc] = useState(0);
  if (btn == 5) {
    throw new Error("Something went Wrong !");
  }
  return (
    <div className="user">
      <h2 className="title">Users List</h2>
   <center>  <button onClick={() => setInc(btn + 1)}>Click</button>  </center>
      <p style={{textAlign:"center"}}>Count:{btn}</p>

      {products.map(user => (
        <div key={user.id} className="card">
          <p>ID: {user.id}</p>
          <p>NAME: {user.name}</p>
        </div>
      ))}

    </div>
  );
}

export default Products;


