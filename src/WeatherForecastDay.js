import React from "react";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

    return days[day];
  }
  console.log(props);
  return (
    <div>
      <span className="weather-forecast-text">
        <div className="weather-weekday">{day()}</div>
        <div className="weather-digits">
          <span className="weather-max">{maxTemperature()}°</span> |{" "}
          <span className="weather-min">{minTemperature()}°</span>
        </div>
      </span>
      <span className="icon">
        <WeatherIcon code={props.data.weather[0].icon} size={50} />
      </span>
    </div>
  );
}
