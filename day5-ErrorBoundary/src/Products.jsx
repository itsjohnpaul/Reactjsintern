import "./Products.css";
import {useState} from "react";
function Products({ products }) {
  const [btn,setInc]=useState(0);
  return (
    <div className="user">
      <h2 className="title">Users List</h2>
      {products.map(user => (
        <div key={user.id} className="card">
         <p>ID: {user.id}</p>
         <p>NAME: {user.name}</p>
        </div>
      ))}
      <p>Count:{btn}</p>
      <button onClick={()=>setInc(btn+1)}>Click</button>
      if(btn==5){
        throw new Error("You have reached the limit !");
      }
    </div>
  );
}

export default Products;


