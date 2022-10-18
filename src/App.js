import "./App.css";
import Search from "./components/Search/Search";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./config";
import { getRequest } from "./helper";
import Weather from "./components/Weather/Weather";
import React, { useState } from "react";
import Forecast from "./components/Forecast/Forecast";


// To get users location 
// const currentLocation = async () => {
//   const location = await getCoordinates();
//   const currentWeatherData = await getWeather([
//     location.coords.latitude,
//     location.coords.latitude,
//   ]);
//   setWeather(currentWeatherData);
// };

function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const getWeather = async (countryData) => {
    const { location } = countryData;

    try {
      const fetchWeather = getRequest(
        `${WEATHER_API_URL}/weather?lat=${location[0]}&lon=${location[1]}&appid=${WEATHER_API_KEY}&units=metric`
      );
      const fetchForecast = getRequest(
        `${WEATHER_API_URL}/forecast?lat=${location[0]}&lon=${location[1]}&appid=${WEATHER_API_KEY}&units=metric`
      );
      const data = await Promise.all([fetchWeather, fetchForecast]);
      setWeather({ data: data[0] });
      setForecast(data[1]);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return (
    <div className="container">
      <Search onSearch={getWeather} />
      {weather ? (
        <Weather weather={weather} />
      ) : (
        <p>Search for weather details</p>
      )}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default App;
