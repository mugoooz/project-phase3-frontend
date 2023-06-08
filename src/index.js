import React, { useEffect, useState } from 'react';

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

  useEffect(() => {
    // Fetch weather data on page load
    getWeather();
  }, []);

  return (
    <div>
      <input
        type="text"
        id="city"
        value={cityValue}
        onChange={handleInputChange}
      />
      <button id="search-btn" onClick={getWeather}>
        Search
      </button>
      <div id="result">
        {weatherData ? (
          <div>
            <h2>{weatherData.name}</h2>
            <h4 className="weather">{weatherData.weather[0].main}</h4>
            <h4 className="desc">{weatherData.weather[0].description}</h4>
            <img
              src={`https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
              alt={weatherData.weather[0].main}
            />
            <h1>{weatherData.main.temp} &#176;</h1>
            <div className="temp-container">
              <div>
                <h4 className="title">min</h4>
                <h4 className="temp">{weatherData.main.temp_min}&#176;</h4>
              </div>
              <div>
                <h4 className="title">max</h4>
                <h4 className="temp">{weatherData.main.temp_max}&#176;</h4>
              </div>
            </div>
          </div>
        ) : (
          <h3 className="msg">
            {cityValue.length === 0 ? 'Please enter a city name' : 'City not found'}
          </h3>
        )}
      </div>
    </div>
  );
};

export default WeatherApp;
