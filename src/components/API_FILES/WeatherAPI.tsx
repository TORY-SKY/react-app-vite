import axios from "axios";
import React, { useState } from "react";

const WeatherAPI = () => {
  const [long, setlong] = useState(0);
  const [lat, setLat] = useState(0);
  const [data, setData] = useState(0);
  const URL_KEY = "3a33c91f8a77ec89fb6d58536eb1ede9";
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${URL_KEY}`;
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
      <nav className="nav navbar d-flex align-items-center justify-content-center">
        <h1>Weather APP</h1>
      </nav>
      <div className="container-fluid">
        <form action="">
          <div>
            <input
              type="number"
              placeholder="longitude"
              value={long}
              onChange={(e) => setlong(e.target.value)}
            />
            <input
              type="number"
              placeholder="latitude"
              value={lat}
              onChange={(e) => setLat(e.target.value)}
            />
            <input
              type="button"
              value="search"
              className="btn btn-success"
              onClick={WeatherAPI}
            />
          </div>
        </form>
        <div className="container d-flex align-items-center justify-content-center">
          <h1>{data.id}</h1>
          {isNaN(lat && long) ? (
            console.log(data)
          ) : (
            <h2 style={{ color: "red" }}> "wrong input"</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default WeatherAPI;
