import LoginContext from "./components/ContextFile/Context";
import { useState } from "react";
import ProfilePage from "./components/ProfilePage";
import LoginForm from "./components/LoginForm";
import { Router } from "react-router-dom";

function App() {
  /* const Vicky = "Became";
  const Todo = [
    { id: 0, text: `${Vicky} A Full Stack Web Developer` },
    { id: 1, text: `${Vicky} A Guitarist` },
    { id: 2, text: `${Vicky} Song Writer` },
    { id: 3, text: `${Vicky} An Automotive Engineer` },
  ];
   */
  const [userName, setUserName] = useState(false);
  const [psswrd, setPsswrd] = useState(Number);
  //const [profile, setProfile] = useState("");
  return (
    <>
      <LoginContext.Provider
        value={{ userName, setUserName, psswrd, setPsswrd }}
      >
        {userName ? <ProfilePage /> : <LoginForm />}
      </LoginContext.Provider>
    </>
  );
}
export default App;
