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
