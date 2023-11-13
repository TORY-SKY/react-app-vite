import { useState } from "react";

const StateMan = () => {
  // State to manage the list of names
  const [list, setList] = useState(["Tony", "Captain", "Hulk"]);

  // State to manage the input for adding a new name
  const [name, setName] = useState("");

  // Function to add a new name to the list
  function Addname() {
    // Check if the input is empty, and return early if true
    if (name === "") {
      return false;
    }

    // Update the list with the new name
    setList([...list, name]);

    // Clear the input field after adding the name
    setName("");
  }

  // Function to delete all names in the list
  function Deletename() {
    // Reset the list with a placeholder value
    setList(["names here..."]);
  }

  return (
    <div>
      {/* Display the list of names */}
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <hr />
      {/* Input field for adding a new name */}

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {/* Button to add a new name */}
      <button onClick={Addname}>add name</button>
      {/* Button to delete all names */}
      <button onClick={Deletename}>Delete name</button>
    </div>
  );
};

export default StateMan;
