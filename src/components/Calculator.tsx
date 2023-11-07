import React, { useState } from "react";
const Calculator = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Add
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Add
      </button>
    </div>
  );
};

export default Calculator;
