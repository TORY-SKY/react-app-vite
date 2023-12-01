import LoginContext from "./components/ContextFile/Context";
import { useState } from "react";
import Navbar from "./components/TheUseCallback";

function App() {
  const [userName, setUserName] = useState([]);

  return (
    <>
      <LoginContext.Provider
        value={{ userName, setUserName, psswrd, setPsswrd }}
      >
        <Navbar />
      </LoginContext.Provider>
    </>
  );
}
export default App;
