import "./App.css";
import img from "./assets/image.png";
function App() {
    return (
        <>
        <div className="one">
                <div className="two">
                    <center>
                        <h1>HELO IT'S JOHNPAUL!</h1>
                        <h2>Welcome all !</h2>
                        <img src={img} alt="Invitation" className="img"/>

                    </center>
                </div> 
            </div>
        </>
    )
};
export default App;