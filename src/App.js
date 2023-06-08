import React, { useEffect, useState } from 'react';

const App = () => {
  const [city, setCity] = useState('Nairobi');
  const [result, setResult] = useState('');

  const getWeather = () => {
    let cityValue = city;

    if (cityValue.length === 0) {
      setResult(<h3 className="msg">Please enter a city name</h3>);
    } else {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;

      setCity('');

      fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data);
          console.log(data.weather[0].icon);
          console.log(data.weather[0].main);
          console.log(data.weather[0].description);
          console.log(data.name);
          console.log(data.main.temp_min);
          console.log(data.main.temp_max);
