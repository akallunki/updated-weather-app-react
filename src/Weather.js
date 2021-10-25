import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      humidity: Math.round(response.data.main.humidity),
      wind: Math.round(response.data.wind.speed),
      description: response.data.weather[0].description,
      city: response.data.name,
      icon: "https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png",
      date: new Date(response.data.dt * 1000),
    });
  }
  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="row">
          <form>
            <input type="search" />
            <input type="submit" value="Search" />
          </form>
        </div>
        <div className="row">
          <div className="col-6">
            <h3>{weatherData.city}</h3>
            <FormattedDate date={weatherData.date} />
            <ul>
              <li>Temperature: {weatherData.temperature}°C</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/h</li>
              <li>Description: {weatherData.description} </li>
            </ul>
          </div>
          <div className="col-6">
            <img src={weatherData.icon} alt={weatherData.description} />
          </div>
          <div className="row">
            <div className="col-3"></div>
            <div className="col-3"></div>
            <div className="col-3"></div>
            <div className="col-3"></div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "01ee656db728e671d53e4bbc2ed1c53d";
    let city = "London";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return <div>"The app is loading..."</div>;
  }
}
