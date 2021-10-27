import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import "./WeatherIcon.css";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "CLEAR_DAY",
    "02d": "PARTLY_CLOUDY_DAY",
    "03d": "PARTLY_CLOUDY_DAY",
    "04d": "CLOUDY",
    "09d": "RAIN",
    "10d": "RAIN",
    "11d": "RAIN",
    "13d": "SNOW",
    "50d": "FOG",
    "01n": "CLEAR_NIGHT",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03n": "PARTLY_CLOUDY_NIGHT",
    "04n": "CLOUDY",
    "09n": "RAIN",
    "10n": "RAIN",
    "11n": "RAIN",
    "13n": "SNOW",
    "50n": "FOG",
  };
  return (
    <div className="weather-icon-big">
      <ReactAnimatedWeather
        icon={codeMapping[props.code]}
        color="pink"
        size={100}
        animate={true}
      />
    </div>
  );
}
