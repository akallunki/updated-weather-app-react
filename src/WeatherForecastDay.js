import React from "react";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  return (
    <div>
      <span className="weather-forecast-text">
        <div className="weather-weekday">{props.dt}</div>
        <div className="weather-digits">
          <span className="weather-max">{Math.round(props.temp.max)}°</span> |{" "}
          <span className="weather-min">{Math.round(props.temp.min)}°</span>
        </div>
      </span>
      <span className="icon">
        <WeatherIcon code={props.weather[0].icon} size={50} />
      </span>
    </div>
  );
}
