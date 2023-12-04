import React from "react";
import "./ABOUT.css";

import LandingPage from "./landingPage";

const ABOUT = () => {
  return (
    <div className="container ">
      <LandingPage />
      <div className="ABOUT container justify-content-center align-items-center d-flex flex-column">
        <h1>
          Your got the travel plans, <br /> we got the travel van.
        </h1>
        <p>Add adventure to your life by joining the #vanlife movement.</p>
        <p>Rend the perfect van to make your perfect road trip.</p>
      </div>
    </div>
  );
};

export default ABOUT;
