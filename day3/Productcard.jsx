import "./prduct.css";

function Productcard(props){
    return(

     <>
     <div className="card">
         <div >
            <img className="images" src={props.image} alt="product1" />
         </div>
        <div className="detail">
             <div className="name">
            <h2>{props.name}</h2>
         </div>
         <div className="pri">
            <h3>${props.price}</h3>
         </div>
         <div className="but">
            <button className="b"onClick={() => alert(`${props.name} ordered`)}>Order</button>
         </div>
        </div>

     </div>
     
     </>

    );
}
export default Productcard;