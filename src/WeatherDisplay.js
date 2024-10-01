import React from 'react';

const WeatherDisplay = ({ weatherData }) => {
  const { name, weather, main, wind } = weatherData;

  return (
    <div>
      <h2>{name}</h2>
      <p>{weather[0].description}</p>
      <p>Temperature: {main.temp} K</p>
      <p>Humidity: {main.humidity}%</p>
      <p>Wind Speed: {wind.speed} m/s</p>
    </div>
  );
};

export default WeatherDisplay;
