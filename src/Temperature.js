import React, { useState } from "react";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="temperature">
        <h5>
          {Math.round(props.celsius)}{" "}
          <span className="unit">
            °C | <button onClick={showFahrenheit}>°F</button>{" "}
          </span>
        </h5>
      </div>
    );
  } else {
    return (
      <div className="temperature">
        <h5>
          {Math.round(fahrenheit())}{" "}
          <span className="unit">
            <button onClick={showCelsius}>°C</button> |°F
          </span>
        </h5>
      </div>
    );
  }
}
