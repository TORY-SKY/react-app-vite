import React, { useContext } from "react";
import LoginContext from "./ContextFile/Context";

const ProfilePage = () => {
  const { userName, setUserName } = useContext(LoginContext);
  const UserNameFunc = () => {
    setUserName("Victor");
  };
  return (
    <div>
      <h2>Welcome {userName}</h2>
      <button onClick={UserNameFunc}>Login here</button>
    </div>
  );
};

export default ProfilePage;
