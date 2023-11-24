import React, { useEffect, useRef, useState } from "react";

const SideEffect = () => {
  const [state, setState] = useState();
  const [calc, setCalc] = useState(0);
  const [calc1, setCalc1] = useState(0);
  //the Use Effect
  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((reponse) => reponse.json())
      .then((data) => setState(data.value));
  }, []);
  const inputRef = useRef(null);
  const handleClick = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      {state}
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Focus</button>
      <button
        onClick={() => {
          setCalc(calc + 1);
        }}
      >
        {calc} 🛒
      </button>
      <button
        onClick={() => {
          setCalc1(calc1 + 1);
        }}
      >
        {calc1}
      </button>
    </div>
  );
};

export default SideEffect;
