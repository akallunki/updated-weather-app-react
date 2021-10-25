import React from "react";
import FormattedDate from "./FormattedDate";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="row">
      <div className="col-6">
        <h3>{props.data.city}</h3>
        <FormattedDate date={props.data.date} />
        <ul className="Weather">
          <li>Temperature: {props.data.temperature}°C</li>
          <li>Humidity: {props.data.humidity}%</li>
          <li>Wind: {props.data.wind} km/h</li>
          <li>Description: {props.data.description} </li>
        </ul>
      </div>
      <div className="col-6">
        <img
          src={props.data.icon}
          alt={props.data.description}
          className="img"
        />
      </div>
      <div className="row">
        <div className="col-3"></div>
        <div className="col-3"></div>
        <div className="col-3"></div>
        <div className="col-3"></div>
      </div>
    </div>
  );
}
