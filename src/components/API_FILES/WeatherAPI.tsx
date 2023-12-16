import axios from "axios";
import React, { useEffect, useState } from "react";
import "./API_CSS/WeatherAppContainer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import sunny from "./weatherImages/sunny.png";
import cloudy from "./weatherImages/cloudy.png";
const WeatherAPI = () => {
  const [city, setCity] = useState<string>("London");
  const [data, setData] = useState(0);
  const URL_KEY: string = "";
  const URL: string = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${URL_KEY}`;
  const WeatherAPI = async () => {
    try {
      const response = await axios.get(URL);
      const Data = await response.data;
      setData(Data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div className="WeatherDiv container w-50">
        {console.log(data)}
        <div className="weatherContent container border rounded-3 p-3">
          <div className="inputNsearch d-flex align-items-center justify-content-center">
            <input
              type="text"
              className="w-100 mx-2 border-none outline-none rounded-4 p-3 "
              placeholder="Search Cities"
            />
            <div
              className="  rounded-5 mx-3"
              style={{
                cursor: "pointer",
              }}
            >
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                style={{
                  color: "#fffffd",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                }}
                onClick={WeatherAPI}
              />
            </div>
          </div>
          <div className="WeatherDate container d-flex flex-column align-items-center justify-content-center m-3">
            <img src={cloudy} alt="" className="w-25 m-3" />
            <div className="textArea d-flex flex-column align-items-center justify-content-center">
              <h1>120˚C</h1>
              <h2>{city}</h2>
            </div>
          </div>
          <div className="  container d-flex  gap-0 justify-content-between align-items-center ">
            <div>
              <h1>48%</h1>
              <h4>Humidity</h4>
            </div>

            <div className="">
              <h1 key={1}>{"20"}km/h</h1>
              <h4>Wind Speed</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherAPI;
