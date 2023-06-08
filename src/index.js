import React, {useEffect, useState} from 'react';

const WeatherApp = () => {
  const [cityValue, setCityValue] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const key = "44fd0dcc0901a5fc29bd759611208d3b";
  
  const handleInputChange = (event) => {
    setCityValue(event.target.value);
  };