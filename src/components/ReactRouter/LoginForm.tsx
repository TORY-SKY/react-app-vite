import React from "react";
import "../ReactRouter/LoginForm.css";
import Google from "../imagess/google1.png";
import APPLfavicon from "../imagess/APPLE.png";
const LoginForm = () => {
  return (
    <div className="container">
      <div className="container-fluid row">
        <div className="col-2 bg-secondary LoginFormCol">Hello world</div>
        <div className="col-10 bg-light border-1">
          <div className="container m-3">
            <h3>Sign up</h3>
            <div>
              <p className="w-50">
                By continuing, you are setting up a Reddit account and agree to
                our{" "}
                <a href="" className="text-decoration-none">
                  User Agreement
                </a>{" "}
                and{" "}
                <a href="" className="text-decoration-none">
                  {" "}
                  Privacy Policy.
                </a>
              </p>
            </div>
            <div className="FormDiv d-flex align-items-center justify-content-left">
              <input type="checkbox" name="" id="" />
              <span className="mx-2">
                I agree to get emails about cool stuffs on Reddit
              </span>
            </div>
            <div className="LoginOptionDiv">
              <div className="GoogleOption px-5 mb-1  border border-primary border-2 rounded-3 d-flex align-items-center justify-content-between">
                <img src={Google} className="mx-0" alt="loginwih Google" />
                <a href="" className="mx-0">
                  CONTINUE WITH GOOGLE
                </a>
              </div>
              <div className="GoogleOption px-5 mb-1  border border-primary border-2 rounded-3 d-flex align-items-center justify-content-between">
                <img src={APPLfavicon} className="mx-0" alt="loginwih Google" />
                <a href="" className="mx-0">
                  CONTINUE WITH APPLE
                </a>
              </div>
              <div className="container justify-content-end align-items-center d-flex">
                <hr className="w-50" />
                OR <hr className="w-50" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
