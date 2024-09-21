import { useEffect, useState } from 'react';
import './App.css';

export default function App() {
  const [weather, setWeather] = useState([]);
  const city = 'linz'; // Replace with your desired city name.

  const API_KEY = 'd76570719fb98cbfdad6e5f2fb907ddd';

  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

  const getWeather = async function () {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setWeather(data);
  };

  useEffect(() => {
    getWeather();
  }, []);
  return (
    <div>
      <h1>Hello </h1>

      {weather.name}

      {weather.weather.map((weather, index) => (
        <p key={index}>
          {weather.description} - {weather.main.temp}°C
        </p>
      ))}
    </div>
  );
}
