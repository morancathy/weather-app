import React from "react";
import "./styles.css";

import WeatherForecast from "./WeatherForecast";

export default function App(props) {
  return (
    <div className="App">
      <h1>My WeatherIcons App</h1>
      <WeatherForecast />
    </div>
  );
}
