import React from "react";
import "./HOME.css";
export default function SignUp() {
  return (
    <div className="HomePage">
      <div className="row">
        <div className="col-12 ">
          <form className="SignUpForm" action="">
            <h1>SIGN UP</h1>
            <p>Its quick and easy</p>
            <div className="w-100">
              <input type="text" name="" id="" placeholder="First Name" />
              <input type="text" name="" id="" placeholder="Last Name" />
            </div>
            <input
              className="MOBPASS"
              type="text"
              name=""
              id=""
              placeholder="Mobile Numbe or email"
            />
            <input
              type="password"
              name=""
              id=""
              placeholder="New password"
              className="MOBPASS"
            />

            <div className="d-block container my-5">
              <p>Birthday</p>
              <select name="" id="" className="px-5">
                <option value="Hellow ">Day</option>
                <option value="Hellow ">1</option>
                <option value="Hellow ">2</option>
                <option value="Hellow ">3</option>
                <option value="Hellow ">4</option>
              </select>
              <select name="" id="">
                <option value="Hellow ">Month</option>
                <option value="Hellow ">1</option>
                <option value="Hellow ">2</option>
                <option value="Hellow ">3</option>
                <option value="Hellow ">4</option>
              </select>
              <select name="" id="">
                <option value="Hellow ">Year</option>
                <option value="Hellow ">1</option>
                <option value="Hellow ">2</option>
                <option value="Hellow ">3</option>
                <option value="Hellow ">4</option>
              </select>
            </div>
            <button className=" btn btn-succes w-100 ">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}
