
import "./App.css";
import ProductCard from "./Productcard";
import  banana from "./assets/banana.png";
import  orange from "./assets/orange.png";
import  apple from "./assets/apple.png";
import samsung from "./assets/samsung.png";
import iphone from "./assets/iphone.png";
import vivo from "./assets/vivo.png";

import NavBar from "./nav";


function App(){
    return(
  <>
  <NavBar/>
 
  <div className="first">
      <ProductCard image={apple} name="apple" price={30}/>
        <ProductCard image={orange} name="orange" price={40}/>
      <ProductCard  image={banana} name="banana" price={50}/>
     
      <ProductCard image={iphone} name="Graphs" price={80}/>
      <ProductCard image={samsung} name="samsung" price={3000}/>
            <ProductCard image={vivo} name="samsung" price={9000}/>



   </div>
  </>
    );
}
export default App;