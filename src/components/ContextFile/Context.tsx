import { useState } from "react";
import ContextAPII from "./THECONTEXT";
const Context = ({ children }) => {
  const [addNo, setaddNo] = useState(1);
  const [closeBTN, setCloseBTN] = useState(false);
  const [displayForm, setDisplayForm] = useState(true);
  return (
    <ContextAPII.Provider
      value={{
        addNo,
        setaddNo,
        closeBTN,
        setCloseBTN,
        displayForm,
        setDisplayForm,
      }}
    >
      {children}
    </ContextAPII.Provider>
  );
};
export default Context;
