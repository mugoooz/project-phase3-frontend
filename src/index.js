import React, {useEffect, useState} from 'react';

const WeatherApp = () => {
  const [cityValue, setCityValue] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const key = "44fd0dcc0901a5fc29bd759611208d3b";
  
  const handleInputChange = (event) => {
    setCityValue(event.target.value);
  };

  const getWeather = () => {
    if (cityValue.length === 0) {
      // Display error message if city name is empty
      setWeatherData(null);
      return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;

    // Clear the input field
    setCityValue('');

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setWeatherData(data);
      })
      .catch(() => {
        // Display error message if city not found
        setWeatherData(null);
      });
  };




}