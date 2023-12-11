import axios from "axios";
import React, { useEffect, useState } from "react";

const AppliPrograI = () => {
  const [excuseA, setExcuseA] = useState([]);
  const [errors, setErrors] = useState("");
  const [family, setFamily] = useState("");
  const fFamily = () => {
    setFamily("family");
  };
  function EXUSESE() {}
  useEffect(() => {
    const Family = axios
      .get("https://excuser-three.vercel.app/v1/excuse/family/")
      .then((res) => setExcuseA(res.data))
      .catch((err) => setErrors(err));
  }, [family]);

  return (
    <div>
      <h1>Generate An Excuse</h1>
      <h1>Fetched Data id:</h1>
      {excuseA.map((excuse) => (
        <h2 key={excuse.id}>{excuse.excuse}</h2>
      ))}
      <h2>Error says: {errors}</h2>
      <button>Party</button>
      <button>Family</button>
      <button>Office</button>
    </div>
  );
};

export default AppliPrograI;
