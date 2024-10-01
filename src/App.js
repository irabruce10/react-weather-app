import { useEffect, useState } from 'react';
import './App.css';

export default function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('linz');

  const API_KEY = 'd76570719fb98cbfdad6e5f2fb907ddd';

  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

  // useEffect(() => {}, []);

  const getData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      setWeatherData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData().catch((error) => {
      console.log(error);
    });
  });

  const submitHandle = async (event) => {
    event.preventDefault();
    await getData();

    setCity('');
  };

  return (
    <div className="App">
      <h1> React Weather App </h1>

      <form onSubmit={submitHandle} className="SearchEngine">
        <input
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </form>

      {weatherData ? (
        <div className="weather-info">
          <h2 className="city-name">{weatherData.name}</h2>
          <p className="temp"> {weatherData.main.temp}°C</p>
          <p className="weather-des">{weatherData.weather[0].description}</p>
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
