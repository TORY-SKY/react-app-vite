import LoginContext from "./components/ContextFile/Context";
import { useState } from "react";
import ProfilePage from "./components/ProfilePage";
import LoginForm from "./components/LoginForm";
function App() {
  /* const Vicky = "Became";
  const Todo = [
    { id: 0, text: `${Vicky} A Full Stack Web Developer` },
    { id: 1, text: `${Vicky} A Guitarist` },
    { id: 2, text: `${Vicky} Song Writer` },
    { id: 3, text: `${Vicky} An Automotive Engineer` },
  ];
   */
  const [userName, setUserName] = useState([]);
  // const [psswrd, setPsswrd] = useState("");
  //const [profile, setProfile] = useState("");
  return (
    <>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName([...userName, e.target.value])}
      />
      <LoginContext.Provider value={{ userName, setUserName }}>
        <ProfilePage />
      </LoginContext.Provider>
    </>
  );
}
export default App;
