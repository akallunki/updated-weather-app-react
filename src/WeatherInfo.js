import React from "react";
import FormattedDate from "./FormattedDate";
import "./WeatherInfo.css";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";

export default function WeatherInfo(props) {
  return (
    <div className="row">
      <div className="col-7">
        <div className="city">
          <h3>{props.data.city}</h3>
        </div>
        <Temperature celsius={props.data.temperature} />
        <ul className="Weather">
          <li>Humidity: {props.data.humidity}%</li>
          <li>Wind: {props.data.wind} km/h</li>
          <li>Description: {props.data.description} </li>
        </ul>
        <FormattedDate date={props.data.date} />
      </div>
      <div className="col-5">
        <WeatherIcon code={props.data.icon} />
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
