import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

export default function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('Linz');

  const API_KEY = 'd76570719fb98cbfdad6e5f2fb907ddd';

  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
  // const fetchWeatherData = async () => {
  //   try {
  //     const response = await axios.get(url);
  //     setWeatherData(response.data);
  //     console.log(response.data);

  //     console.log(weatherData);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const getData = async () => {
    try {
      const response = await axios.get(url);

      setWeatherData(response.data);
      7;
      console.log(response.data);
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
      {weatherData ? (
        <div>
          <h2>{weatherData.name}</h2>
          <p>{weatherData.weather[0].description}</p>
          <p>Temperature: {weatherData.main.temp}</p>
        </div>
      ) : (
        <div>LOADING...</div>
      )}
    </div>
  );
}
