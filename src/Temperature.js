import React from "react";

export default function Temperature(props) {
  return (
    <div className="temperature">
      <h5>
        {Math.round(props.celsius)} <span className="unit">°C</span>
      </h5>
    </div>
  );
}
