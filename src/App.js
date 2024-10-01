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

    setCity('');

    console.log(weatherData);
  };

  // if (!weatherData) {
  //   return <div>Loading.....</div>;
  // }
  return (
    <div>
      <h1>Hello React Weather App </h1>

      <form onSubmit={submitHandle}>
        <input
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </form>
    </div>
  );
}
