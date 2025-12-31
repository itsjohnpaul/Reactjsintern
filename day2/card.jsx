
import img from "./assets/user.png";
import "./card.css";
function Card() {
    const details = {
        name: "JOHNPAUL",
        role: "FullStack"
    }
    return (
        <>
            <div className="nav">
                <h4><a href="">HOME</a></h4>
                <h4><a href="">ABOUT</a></h4>
                <h4><a href="">BIO</a></h4>
            </div>
            <div className="prim">

                <div className="ab">
                    <h1>I am {details.name}!</h1>
                    <p>{details.role} Developer !</p>
                </div>
                <div className="ima">
                    <img src={img} alt="" className="im" />
                </div>
            </div>
            <div className="con">
                <div className="head">
                    <h1>ABOUT</h1>
                </div>

                <div className="about">
                    HI!,Myself Johnpaul from Madurai , currently doing my BE CSE at kamaraj college of Engineering and technology and i am a passionate React developer loving to design websites using my creativity.
                </div>
            </div>
        </>

    );
}
export default Card;