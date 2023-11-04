import { useState } from "react";
import Alert from "./Alert";

// Define the expected props for the Button component
interface ButtonInterface {
  children: string;
  color?: "primary" | "secondary" | "success";
}

// Button component that accepts props
function Button({ children, color }: ButtonInterface) {
  // Use state to manage the visibility of the imported component
  const [imported, setImported] = useState(false);

  // Function to handle the button click event and toggle the visibility of the imported component
  function handleClick() {
    setImported(!imported);
  }
  function onclose() {
    setImported(false);
  }

  return (
    <>
      {/* Conditionally render the imported component (Alert) or a message */}
      {imported ? <Alert onclose={onclose} /> : <h2>Nothing to display!</h2>}

      {/* The button that triggers the handleClick function */}
      <button
        onClick={handleClick}
        type="button"
        className={`btn btn-${color || "success"} `}
      >
        {children}
      </button>
    </>
  );
}

export default Button;
