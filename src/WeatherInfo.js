import React from "react";
import FormattedDate from "./FormattedDate";
import "./WeatherInfo.css";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";

export default function WeatherInfo(props) {
  return (
    <div>
      <div className="row">
        <div className="city">
          <h3>{props.data.city}</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-7 left-box">
          <div className="current-temp">
            <Temperature celsius={props.data.temperature} />
          </div>
          <div className="Weather">
            <ul>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {props.data.wind} km/h</li>
              <li>Description: {props.data.description} </li>
            </ul>
          </div>
          <div className="last-update">
            <FormattedDate date={props.data.date} />
          </div>
        </div>
        <div className="col-5">
          <WeatherIcon code={props.data.icon} size={100} />
        </div>
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
