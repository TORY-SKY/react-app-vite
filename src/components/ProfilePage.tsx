import React, { useContext } from "react";
import LoginContext from "./ContextFile/Context";

const ProfilePage = () => {
  const { userName, setUserName } = useContext(LoginContext);
  return (
    <div>
      <h2>Welcome {userName}</h2>
    </div>
  );
};

export default ProfilePage;
