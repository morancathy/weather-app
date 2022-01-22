
import React from "react";
import weatherData from "./components/weatherData.js";

function WeatherForecast(props) {
  return (
    <section>
      {weatherData.map((thing, index) => (
        <div key={index} className="weather">
          <img src={thing.img} alt="..." />
          <p>
            <span>conditions: </span>
            {thing.conditions}
          </p>
          <p>
            <span>time: </span>
            {thing.time}
          </p>
        </div>
      ))}
    </section>
  );
}

export default WeatherForecast;
