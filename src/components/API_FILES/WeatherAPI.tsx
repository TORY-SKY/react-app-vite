import axios from "axios";
import React, { useState } from "react";
import searchIcon from "../imagess/searchIcon.png";
import "./API_CSS/WeatherAPI.css";

const WeatherAPI = () => {
  const [city, setCity] = useState(0);
  const [lat, setLat] = useState(0);
  const [data, setData] = useState(0);
  const URL_KEY: string = "dc4c9cbda170044955baca69418e9eea";
  const URL: string = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${URL_KEY}`;
  const WeatherAPI = async () => {
    try {
      const response = await axios.get(URL);
      setData(response.data);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      {console.log(data.data)}
      <nav className="nav navbar d-flex align-items-center justify-content-center">
        <h1>Weather APP</h1>
      </nav>
      <div className="WeatherAppDiv container">
        <div className="container border border-4 rounded-3  row d-flex flex-column align-items-center justify-content-center p-3">
          <div className="inputContainer d-flex align-items-center justify-content-center">
            <input
              type="text"
              className=""
              onChange={(e) => setCity(e.target.value)}
            />
            <button className=" searchBTN" onClick={WeatherAPI}>
              search
            </button>
          </div>
          <img src="{}" className="w-25" alt="Some weather images" />
          <h1>SOME WEATHER DEGREES</h1>
          <h3>LOCATION</h3>
          <div>
            <div className="row">
              <div className="col-6">HUMIDITY</div>
              <div className="col-6">WIND SPEED</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherAPI;
