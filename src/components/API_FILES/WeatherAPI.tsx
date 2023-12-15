import axios from "axios";
import React, { useState } from "react";
import "./API_CSS/WeatherAppContainer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const WeatherAPI = () => {
  const [city, setCity] = useState("");
  const [lat, setLat] = useState(0);
  const [data, setData] = useState(0);
  const URL_KEY: string = "";
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
      <h1>WEATHER APP</h1>
      <div className="WeatherDiv container">
        <div className="weatherContent container border rounded-3 p-3">
          <div className="inputNsearch d-flex align-items-center justify-content-center">
            <input
              type="text"
              className="w-100 mx-2 border-none outline-none rounded-4 p-3"
              placeholder="Search Cities"
            />
            <div className="  rounded-5">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                style={{ color: "#000000", fontSize: "1.5rem" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherAPI;
