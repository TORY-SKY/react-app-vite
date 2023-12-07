import React, { useEffect, useState } from "react";

import "./ABOUT.css";
type APIFunc = {
  APIfunction: () => void;
};
const ABOUT = () => {
  const [data, setData] = useState(0);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  async function APIfunction() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/");
      const fetchedData = await response.json();
      console.log(fetchedData);
    } catch (error) {
      alert("error in your code bro", error);
    }
  }

  return (
    <div className="container ">
      <div className="ABOUT container justify-content-center align-items-center d-flex flex-column">
        <h1>
          Your got the travel plans, <br /> we got the travel van.
        </h1>
        <p>Add adventure to your life by joining the #vanlife movement.</p>
        <p>Rend the perfect van to make your perfect road trip.</p>
      </div>

      <div className="container-fluid  bg-dark text-light d-flex flex-column justify-content-center align-items-center">
        <p className="d-flex flex-column justify-content-center align-items-center">
          @2023 #VANLIFE
        </p>
      </div>
      <div className="container bg-success">
        <h1>hello world</h1>
        <button onClick={() => setData(data + 1)}>{data}</button>
      </div>
    </div>
  );
};

export default ABOUT;
