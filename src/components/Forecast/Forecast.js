import React from "react";
import "./Forecast.css";

import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thurday",
  "Friday",
  "Saturday",
  "Sunday",
];

function Forecast(props) {
  const {
    data: { list },
  } = props;
  const currentDay = new Date().getDay() - 1;
  const forecastDay = WEEK_DAYS.slice(currentDay).concat(
    WEEK_DAYS.slice(0, currentDay)
  );
  return (
    <div className="forecast">
      <label className="title">Daily Forecast</label>
      <Accordion allowZeroExpanded={true}>
        {list.slice(0, 7).map((item, idx) => (
          <AccordionItem className="forecast-item" key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <div className="item-top">
                    <img
                      src={`icons/${item.weather[0].icon}.png`}
                      alt="weather"
                      className="icon-small"
                    />
                    <label className="forecast-day">{forecastDay[idx]}</label>
                  </div>
                  <div className="item-bottom">
                    <label className="forecast-desrciption">
                      {item.weather[0].description}
                    </label>
                    <label className="temparature">
                      {Math.floor(item.main.temp_min)}°C /{" "}
                      {Math.ceil(item.main.temp_max)}°C
                    </label>
                  </div>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-forecast-details">
                <div className="forecast-row">
                  <span className="forecast-label">Pressure</span>
                  <span className="forecast-value">
                    {Math.round(item.main.pressure)} hPa
                  </span>
                </div>
                <div className="forecast-row">
                  <span className="forecast-label">Clouds</span>
                  <span className="forecast-value">
                    {Math.round(item.clouds.all)} %
                  </span>
                </div>
                <div className="forecast-row">
                  <span className="forecast-label">Sea Level</span>
                  <span className="forecast-value">
                    {Math.round(item.main.sea_level)} m
                  </span>
                </div>
                <div className="forecast-row">
                  <span className="forecast-label">Humidity</span>
                  <span className="forecast-value">
                    {Math.round(item.main.humidity)} %
                  </span>
                </div>
                <div className="forecast-row">
                  <span className="forecast-label">Wind Speed</span>
                  <span className="forecast-value">
                    {Math.round(item.wind.speed)} m/s
                  </span>
                </div>
                <div className="forecast-row">
                  <span className="forecast-label">Feels Like</span>
                  <span className="forecast-value">
                    {Math.round(item.main.feels_like)} °C
                  </span>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default Forecast;
