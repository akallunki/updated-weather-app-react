import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
  return (
    <div className="row">
      <div className="col-3">
        Mon
        <div>
          <span>8</span> | <span>11</span> °C
        </div>
        <WeatherIcon code="01d" size={50} />
      </div>
      <div className="col-3">
        Tue
        <div>
          <span>4</span> | <span>9</span> °C
        </div>
        <WeatherIcon code="01d" size={50} />
      </div>
      <div className="col-3">
        Wed
        <div>
          <span>5</span> | <span>13</span> °C
        </div>
        <WeatherIcon code="01d" size={50} />
      </div>
      <div className="col-3">
        Thurs
        <div>
          <span>9</span> | <span>12</span> °C
        </div>
        <WeatherIcon code="01d" size={50} />
      </div>
    </div>
  );
}
