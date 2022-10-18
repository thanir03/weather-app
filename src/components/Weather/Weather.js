import React from "react";
import "./Weather.css";

function Weather(props) {
  const {
    weather: { data },
  } = props;

  return (
    <div className="weather">
      <div className="top">
        <div className="location-details">
          <p className="city">{data.name}</p>
          <p className="description">{data.weather[0].main}</p>
        </div>
        <img
          src={`icons/${data.weather[0].icon}.png`}
          alt="weather"
          className="weather-icon"
        />
      </div>
      <div className="bottom">
        <p className="temperature">{Math.round(data.main.temp)}°C</p>
        <div className="details">
          <p className="parameter-detail">Details</p>
          <div className="parameter-row">
            <span className="parameter-label">Feels Like</span>
            <span className="parameter-value">{Math.round(data.main.feels_like)} °C</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{Math.round(data.wind.speed)} m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{Math.round(data.main.humidity)} %</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">{Math.round(data.main.pressure)} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
