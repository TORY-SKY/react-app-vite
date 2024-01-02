import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import "./API_CSS/WeatherAppContainer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import sunny from "./weatherImages/sunny.png";
import cloudy from "./weatherImages/cloudy.png";
import heavyCloud from "./weatherImages/heavyCloud.png";

const WeatherAPI = () => {
  // State to manage user-inputted city and weather data
  const [city, setCity] = useState<string>("");
  const [data, setData] = useState(null);
  const [loading, setloading] = useState(false);
  const [inputErrorVisibility, setinputErrorVisibility] = useState(false);

  const InputErrorFUnction = () => {
    if (city == "") {
      setinputErrorVisibility(true);
    } else {
      setinputErrorVisibility(false);
    }
  };

  // API key and URLs for OpenWeatherMap
  const URL_KEY: string = "";
  const URL: string = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${URL_KEY}`;

  // Function to fetch weather data from OpenWeatherMap API
  const WeatherAPI = async () => {
    try {
      setloading(true);
      const response = await axios.get(URL);
      const Data = await response.data;
      setData(Data);
    } catch (err) {
      console.error(err);
    }
  };

  /* City Input Function */
  const SearchCity = useCallback((e) => {
    // Capture the user-inputted city name
    const CatchCityname = e.target.value;
    setCity(CatchCityname);
  }, []);
  /*Enter key function */
  /*Enter key function here is... */
  const handleEnter = (event) => {
    event.preventDefault();
    if (event.key === "Enter" && city.trim() !== "") {
      console.log("calling the weather API");
      setloading(true);
      WeatherAPI();
    }
  };

  return (
    <div>
      <div className="WeatherDiv container ">
        {/* Conditional Statement for Empty input */}

        <div
          className="alert alert-danger "
          style={{
            visibility: inputErrorVisibility == true ? "hidden" : "visible",
          }}
          role="alert"
        >
          Input cannot be empty, hope you know?
        </div>

        {/* Conditional Statement for Empty input */}

        <div className="weatherContent container border rounded-3 p-3">
          <div className="inputNsearch d-flex align-items-center justify-content-center">
            {/* Search input */}
            <input
              type="text"
              className="w-100 mx-2 border-none outline-none rounded-4 p-3 searchBox"
              placeholder="Search Cities"
              onChange={SearchCity}
              onKeyDown={(e) => e.key === "Enter" && handleEnter(e)}
              onFocus={InputErrorFUnction}
            />
            {/* Search icon */}
            <div
              className="SearchIcon mx-3"
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
                /*This part of the code  */
                onClick={city ? WeatherAPI : null}
              />
            </div>
          </div>
          <div className="WeatherDate container d-flex flex-column align-items-center justify-content-center ">
            {/* Weather image */}
            <img src={heavyCloud} alt="" className="w-50 m-3 IMAGE" />
            <div className="textArea d-flex flex-column align-items-center justify-content-center">
              {/* Temperature and City */}
              {data ? (
                <h1>{Math.floor(data.main.temp)}˚C</h1>
              ) : (
                <div className="spinner-border m-5" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              )}
              <h2>{data ? data.name.toUpperCase() : "City"}</h2>
            </div>
          </div>
          <div className="WeatherDetails  container d-flex gap-0 justify-content-between align-items-center rounded-3 py-2">
            <div>
              {/* Humidity */}
              {data ? <h1>{data.main.humidity}%</h1> : <h4>0</h4>}
              <h4>Humidity</h4>
            </div>

            <div className="">
              {/* Wind Speed */}
              {data ? (
                <h1 key={data.id}>{Math.floor(data.wind.speed)}MPh</h1>
              ) : (
                <h2>0</h2>
              )}
              <h4>Wind Speed</h4>
            </div>
          </div>
        </div>
      </div>
      {/*

Weather App Documentation
Introduction
The Weather App is a React component that allows users to check the current weather of a city. It leverages the OpenWeatherMap API to fetch weather data. This documentation aims to provide an overview of the code structure, functionality, and best practices.

Code Overview
Dependencies:

The component uses Axios for making HTTP requests.
FontAwesome for rendering icons.
State and Variables:

city: Holds the user-inputted city name.
data: Stores the weather data fetched from the API.
URL_KEY: API key for OpenWeatherMap.
G_url: Default API URL with latitude and longitude.
URL: API URL based on the user-inputted city.
WeatherAPI Function:

Responsible for making asynchronous API requests using Axios.
Updates the data state with the fetched weather information.
Handles errors and logs them to the console.
SearchCity Function:

Callback function to capture the user-inputted city name.
Updates the city state with the entered city name.
Conditional Rendering:

Displays an error message if the city input is empty.
User Interface:

Provides a search input for users to enter the city name.
Displays a search icon that triggers the WeatherAPI function on click.
Shows weather details including temperature, city name, humidity, wind speed, and an associated weather image.
Weather Images:

The component includes different weather images based on the current weather conditions (e.g., sunny, cloudy, heavy cloud).
       */}
    </div>
  );
};

export default WeatherAPI;
