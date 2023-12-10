import "./HOME.css";
import Dev from "../imagess/portfolio_man_5.png";
import ContextAPII from "../ContextFile/THECONTEXT";
import { useContext } from "react";
export default function SignUp() {
  const { addNo, setaddNo } = useContext(ContextAPII);
  return (
    <div className="container-fluid px-4 HomePage d-flex flex-column justify-content-center align-items-start text-light">
      <div className="container row">
        <div className="col-8 px-4 landingpageText">
          <h1>VICKTORY sky</h1>
          <p>A Passionate Software Developer</p>
          <span>with a year of experience in Web developement</span>
          <div className="buttons">
            <button>My CV</button>
            <button onClick={() => setaddNo(addNo + 1)}>Contact Us</button>
          </div>
        </div>
        <div className="col-4 COL-4-img d-flex align-items-center justify-content-center">
          <div className="container ">
            <img src={Dev} className="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
