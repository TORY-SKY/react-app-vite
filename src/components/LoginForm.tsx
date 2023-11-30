import React, { useContext } from "react";
import LoginContext from "./ContextFile/Context";
import "./style.css";

const LoginForm = () => {
  const { userName, setUserName } = useContext(LoginContext);
  return (
    <div>
      <form
        action=""
        className="container justify-content-center align-items-center d-flex mt-5 FORM"
      >
        <input
          type="email"
          name=""
          id=""
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="enter your email boss"
        />
        <input type="password" placeholder="password here bro" />
        <button className="btn btn-success w-100">Login</button>
      </form>
    </div>
  );
};
//today we are going to further our learning on context API and also do look at the REACT-ROUTING, so help me GOD, amen

export default LoginForm;
