import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let lat = props.coordinates.lat;
  let lon = props.coordinates.lon;
  let apiKey = `9a0d21c8021bfb9471b6c1f5f01b0591`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  function handleResponse(response) {
    console.log(response.data);
  }

  return (
    <div className="row forecast-row">
      <div className="col-3">
        <span className="weather-forecast-text">
          <div className="weather-weekday">Mon</div>
          <div className="weather-digits">
            <span className="weather-max">11°</span> |{" "}
            <span className="weather-min">8°</span>
          </div>
        </span>
        <span className="icon">
          <WeatherIcon code="01d" size={50} />
        </span>
      </div>
      <div className="col-3">
        <span className="weather-forecast-text">
          <div className="weather-weekday">Tue</div>
          <div className="weather-digits">
            <span className="weather-max">9°</span> |{" "}
            <span className="weather-min">4°</span>
          </div>
        </span>
        <span className="icon">
          <WeatherIcon code="01d" size={50} />
        </span>
      </div>
      <div className="col-3">
        <span className="weather-forecast-text">
          <div className="weather-weekday">Wed</div>
          <div className="weather-digits">
            <span className="weather-max">13°</span> |{" "}
            <span className="weather-min">5°</span>
          </div>
        </span>
        <span className="icon">
          <WeatherIcon code="01d" size={50} />
        </span>
      </div>
      <div className="col-3">
        <span className="weather-forecast-text">
          <div className="weather-weekday">Thurs</div>
          <div className="weather-digits">
            <span className="weather-max">12°</span> |{" "}
            <span className="weather-min">9°</span>
          </div>
        </span>
        <span className="icon">
          <WeatherIcon code="01d" size={50} />
        </span>
      </div>
    </div>
  );
}
