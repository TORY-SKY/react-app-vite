import { useState } from "react";

const StateMan = () => {
  const [list, setList] = useState(["Tony", "Captain", "Hulk"]);
  const [name, setName] = useState("");
  function Addname() {
    if (name === "") {
      return false;
    }
    setList([...list, name]);
    setName("");
  }
  function Deletename() {
    setList(["names here..."]);
  }
  return (
    <div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <hr />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={Addname}>add name</button>
      <button onClick={Deletename}>Delete name</button>
    </div>
  );
};

export default StateMan;
