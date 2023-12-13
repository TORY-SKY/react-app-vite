import axios from "axios";
import React, { useEffect, useState } from "react";

const AppliPrograI = () => {
  const [excuseA, setExcuseA] = useState([]); // Initial state for excuses
  const [errors, setErrors] = useState(""); // Initial state for errors
  const [family, setFamily] = useState(""); // Initial state for chosen category

  const getExcuse = async () => {
    try {
      const response = await axios.get(
        `https://excuser-three.vercel.app/v1/excuse/${family}/`
      );
      setExcuseA(response.data); // Update state with fetched excuse data
    } catch (error) {
      console.error(error);
      setErrors(error.message); // Update state with error message
    }
  };

  useEffect(() => {
    if (family) {
      getExcuse(); // Fetch excuse data when a category is chosen
    }
  }, [family]);

  return (
    <div>
      <h1>Generate An Excuse</h1>
      <h2>Fetched Excuse:</h2>
      {excuseA.length > 0 && (
        <h2 key={excuseA[0].id}>{excuseA[0].excuse}</h2> // Render only first excuse
      )}
      <h2>Error: {errors}</h2>
      <button
        onClick={() => setFamily("party")}
        className="btn btn-danger m-2"
        style={{}}
      >
        Party
      </button>
      <button
        onClick={() => setFamily("family")}
        className="btn btn-success mx-2"
      >
        Family
      </button>
      <button onClick={() => setFamily("office")} className="btn btn-dark mx-2">
        Office
      </button>
    </div>
  );
};

export default AppliPrograI;
