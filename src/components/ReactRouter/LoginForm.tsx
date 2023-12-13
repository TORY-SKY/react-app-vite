import React, { useEffect, useState } from "react";
import "../ReactRouter/LoginForm.css";
import Google from "../imagess/google1.png";
import APPLfavicon from "../imagess/APPLE.png";
import ContextAPII from "../ContextFile/THECONTEXT";
import { useContext } from "react";
import axios from "axios";
const SignUP = () => {
  const URL =
    "https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={afb8d9b92457def07c3d891626c4b57b}";
  const WeatherAPI = async () => {
    try {
      const response = axios.get(URL);
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  //contextAPI
  const { addNo, setCloseBTN, closeBTN, displayForm, setDisplayForm } =
    useContext(ContextAPII);

  return (
    <div
      className="container SignUPFORM"
      style={{ display: displayForm ? "block" : "none" }}
    >
      <div className="container-fluid row">
        <div className="col-2 bg-secondary LoginFormCol">Hello world</div>
        <div className="col-10 bg-light border-1">
          <div className="container m-3 row">
            <div
              className="d-flex align-items-center justify-content-end CloseBTN"
              style={{ display: closeBTN ? "block" : "none" }}
            >
              <span
                className="material-symbols-outlined "
                onClick={() => setDisplayForm(false)}
              >
                close
              </span>
            </div>
            <h1>{addNo} items has been added to the cart bro</h1>
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
              <div className="container justify-content-start align-items-center d-flex">
                <hr className="w-50" />
                OR <hr className="w-50" />
              </div>
              <div className="logInDiv d-flex  flex-column">
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Email"
                  className="my-4"
                />
                <button>Continue</button>
                <div className="d-flex mt-5 ">
                  <p>Already a redditor</p>
                  <a href="">Login</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUP;
