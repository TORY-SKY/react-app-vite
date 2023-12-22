import ContextAPII from "../ContextFile/THECONTEXT";
import { useContext } from "react";
import style from "../HOMEPAGE.module.css";
import Victory from "../imagess/Victory.png";
export default function SignUp() {
  const { addNo, setaddNo } = useContext(ContextAPII);
  return (
    <>
      <div className="container bg-dark text-light">
        <div className={style.MRMODULE}>HELLO WORLD</div>
        <div className="row">
          <div className="col-sm-12 col-lg-6 col-ms-6 container fluid bg-success">
            <div className="container  d-flex flex-column Hero1">
              <p>TORY SKY</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                incidunt asperiores corporis veniam numquam saepe atque
                excepturi! Modi obcaecati voluptatibus praesentium, placeat
                reprehenderit eaque maxime, quo numquam blanditiis laudantium
                aut!
              </p>
            </div>
          </div>
          <div className="col-6">
            <div className="container bg-light">
              <img src={Victory} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
