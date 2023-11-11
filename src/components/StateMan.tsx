import { useState } from "react";

const StateMan = () => {
  const [count, setCount] = useState(0);
  const [list, setList] = useState(["Tony", "Captain", "Hulk"]);
  function addCount() {
    setCount(count + 1);
  }
  return (
    <div>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <button onClick={addCount}>count: {count}</button>
    </div>
  );
};

export default StateMan;
