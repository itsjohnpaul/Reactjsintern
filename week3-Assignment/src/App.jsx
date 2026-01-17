import Home from "./Home";
import Cartpage from "./Cartpage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./Reducer";
import "./nav.css";
import Navbar from "./Navbar";
import { useState } from "react";
import About from "./About";
function App() {
  const [tog, setTog] = useState(false);
  const toggle = () => setTog(!tog);
  if (tog) {
    document.body.className = "dark";
  } else {
    document.body.className = "light";
  }
  return (
    <CartProvider>
      <Router>
        <Navbar tog={tog} toggle={toggle} /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/cart" element={<Cartpage />} />
        </Routes>
     
         
      </Router>
    </CartProvider>
  );
}

export default App;
