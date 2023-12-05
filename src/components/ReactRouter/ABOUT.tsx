import React, { useEffect } from "react";
import "./ABOUT.css";

const ABOUT = () => {
    function APIcaller(){
try{
    const fetchingData = await fetch('https://fakestoreapi.com/products/1')
    const data = await fetchingData.json();
    console.log(data)
}
    }
    catch(error){
        console.error("Error fething data: ," error)
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

    </div>
  );
};

export default ABOUT;
