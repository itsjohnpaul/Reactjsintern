import { Link } from "react-router-dom";

function Navbar({ toggle, tog }) {
  return (
    <div className="nav1">
      <div className="tit">
        <h2 style={{color:"black"}}>Shopping site</h2>
      </div>
      <div className="nav">
        <h3>
          <Link to="/">Home</Link>
        </h3>
         <h3>
          <Link to="/About">About</Link>
        </h3>
        <h3>
          <Link to="/cart">Cart</Link>
        </h3>
        <button onClick={toggle}>{tog ? " 🌙" : " 🌞"}</button>
      </div>
    </div>
  );
}

export default Navbar;
