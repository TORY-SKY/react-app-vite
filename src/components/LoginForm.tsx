import React, { useContext } from "react";
import LoginContext from "./ContextFile/Context";

const LoginForm = () => {
  const { userName } = useContext(LoginContext);
  return <div>Hello {userName}</div>;
};
//today we are going to further our learning on context API and also do look at the REACT-ROUTING, so help me GOD, amen

export default LoginForm;
