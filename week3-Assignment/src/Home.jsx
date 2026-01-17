import "./App.css"
import usefetch from './usefetch'
import useSort from './sortings';
import useCartReducer from './Reducer';
import { useState } from "react";
import Loading from "./Loading";
import Footer from "./Footer";

function Home() {
  const { carts, dispatch } = useCartReducer();
const { cart, loading, err } = usefetch("https://fakestoreapi.com/products");
const { search, sort, category, filtersorted, setSearch, setSort, setCategory } = useSort(cart);
  if (loading) return <Loading />;
  if (err) return <h2 style={{ color: "red",textAlign:"center" ,margin:"300px"} }>{err}</h2>
  return (
    <div>
      <center> 
        <input
        type="text"
        value={search}
        placeholder="search items!"
        onChange={(e) => setSearch(e.target.value)}
      />

        <button onClick={() => setSort(!sort)}>
          {sort ? "Unsort":"Sort by Price"}
        </button>
        
        <select onChange={(e) => setCategory(e.target.value)} value={category}>
                  <option value="all">All</option>
                  <option value="electronics">Electronics</option>
                  <option value="jewelery">Jewelery</option>
                  <option value="men's clothing">Men's Clothing</option>
                  <option value="women's clothing">Women's Clothing</option>
          </select>
        </center>

      <div className="d">
        {filtersorted.map((item) => (
          <div className="di" key={item.id}>
            <div className="con">
              <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <h3>${item.price}</h3>
             <h3><span style={{color:"black"}}>Category:</span> {item.category}</h3>

            </div>
            <div className="bu">
              <button onClick={() => {
                dispatch({ type: "Add", payload: item });
                alert("added");
              }}>
                Add to cart
              </button> </div>
          </div>
        ))}
      </div>

    

   <Footer/>
    </div>
  )
}

export default Home
