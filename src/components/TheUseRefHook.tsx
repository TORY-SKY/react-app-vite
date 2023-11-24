import React, { useRef } from "react";
import ReducerMan from "./ReducerMan";

const TheUseRefHook = () => {
  const emailRef = useRef(null);
  const psswrdRef = useRef(null);

  const handleClick = () => {
    const emailValue = emailRef.current.value;
    const psswrdValue = psswrdRef.current.value;
    alert(emailValue);
  };
  return (
    <div>
      <form action="" onSubmit={handleClick}>
        <input type="email" placeholder="email here bro" ref={emailRef} />
        <input type="password" ref={psswrdRef} />
        <button type="submit" className="btn btn-success">
          Login
        </button>
      </form>
    </div>
  );
};

export default TheUseRefHook;
