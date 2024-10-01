// function WeatherGz({ cities }) {
//   return (
//     <div>
//       <h2>{cities.name}</h2>
//       {/* <p>{cities.weather[0].description}</p> */}
//       {/* <p>Temperature: {cities.main.temp}</p> */}
//     </div>
//   );
// }

// export default WeatherGz;
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

import WeatherDisplay from './WeatherDisplay';

const API_KEY = 'd76570719fb98cbfdad6e5f2fb907ddd';

const WeatherGz = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [cities, setCities] = useState(['Linz', 'London']);

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${citi}&appid=${API_KEY}`,
      );

      setWeatherData((cities) => [...cities, response.data]);
      console.log(cities, response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    cities.forEach((el) => fetchWeatherData(el));
  }, [cities]);

  return (
    <div>
      {weatherData.map((data) => (
        <WeatherDisplay key={data.id} weatherData={data} />
      ))}
    </div>
  );
};

export default WeatherGz;
