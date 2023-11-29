import React, { useCallback, useEffect, useState } from "react";

const TheUseEffect = () => {
  const [placeholder, setPlaceholder] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/1/");
        const data = await response.json();
        setPlaceholder(data);
      } catch (error) {
        console.error("Error fetching data from API ", error);
      }
    };
    fetchData();
  }, []);
  const [input, setInput] = useState("");
  const [displayinput, setdisplayinput] = useState("");
  const [saveDisp, setsaveDisp] = useState([]);
  function SaveInput() {
    let TheArr = [...input, displayinput];
  }
  const CallBackFunc = useCallback((e) => {
    setInput(e.target.value);
    setdisplayinput(e.target.value);
  }, []);
  return (
    <div className="container m-4">
      <input
        type="text"
        name=""
        id=""
        value={input}
        onChange={CallBackFunc}
        placeholder="enter your name"
      />
      <h1 className="justify-content-center d-flex align-items-center">
        {displayinput}
      </h1>
      <h2>{displayinput}</h2>
      <button onClick={SaveInput}>save your input</button>
    </div>
  );
};

export default TheUseEffect;
