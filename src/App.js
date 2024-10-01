import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

import WeatherGz from './WeatherGz';

export default function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('linz');

  const API_KEY = 'd76570719fb98cbfdad6e5f2fb907ddd';

  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

  const getData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(weatherData);

      setWeatherData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const submitHandle = (event) => {
    event.preventDefault();
    getData();

    setCity('');

    console.log(weatherData);
  };

  // if (!weatherData) {
  //   return <div>Loading.....</div>;
  // }
  return (
    <div className="app">
      <h1> React Weather App </h1>

      <form onSubmit={submitHandle}>
        <input
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </form>

      {weatherData ? (
        <div className="weather-info">
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Description: {weatherData.weather[0].description}</p>
          <p>Feels like : {weatherData.main.feels_like}°C</p>
          <p>Humidity : {weatherData.main.humidity}%</p>
          <p>Pressure : {weatherData.main.pressure}</p>
          <p>Wind Speed : {weatherData.wind.speed}m/s</p>
        </div>
      ) : (
        <p className="loading">Loading weather data...</p>
      )}
    </div>
  );
}
