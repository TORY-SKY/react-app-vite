import Dev from "../imagess/portfolio_man_5.png";
import ContextAPII from "../ContextFile/THECONTEXT";
import { useContext } from "react";
import Victory from "../imagess/Software-Developer.jpg";
export default function SignUp() {
  const { addNo, setaddNo } = useContext(ContextAPII);
  return (
    <>
      <div className="container bg-dark text-light">
        <div className="row">
          <div className="container-fluid d-flex">
            <div className="imgDIV bg-dark m-4 border-dark border-4 rounded-3 overflow-hidden">
              <img src={Victory} className="w-100" alt="" />
            </div>
            <div className="textA container d-flex flex-column justify-content-center">
              <h1>VICTORY SKY</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aliquam alias, porro iure adipisci fugiat delectus maiores!
                Molestiae excepturi eum deserunt commodi! Corrupti, quae odit!
                Sint deserunt dignissimos at incidunt porro?
              </p>
              <div className="btnDiv">
                <button className="btn btn-danger m-2 w-25 ">MY CV</button>
                <button className="btn btn-success m-2 w-25 ">HIRE US</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
