import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo.js";
import "./Weather.css";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      humidity: Math.round(response.data.main.humidity),
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      city: response.data.name,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
      coordinates: response.data.coord,
    });
  }

  function search() {
    let apiKey = `01ee656db728e671d53e4bbc2ed1c53d`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="row form">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Type a city..."
              autoFocus="on"
              onChange={handleCityChange}
              className="form-input"
            />
            <input type="submit" value="Search" className="form-submit" />
          </form>
        </div>
        <WeatherInfo data={weatherData} size={100} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "The app is loading...";
  }
}
