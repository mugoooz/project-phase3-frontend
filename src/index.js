import React, { useEffect, useState } from 'react';
import 'src/index.css'; 
import key from 'src/key.js'; 

const WeatherApp = () => {
  const [cityValue, setCityValue] = useState("Nairobi");
  const [result, setResult] = useState("");

  useEffect(() => {
    getWeather();
  }, []);

  const getWeather = () => {
    if (cityValue.length === 0) {
      setResult(`<h3 class="msg">Please enter a city name</h3>`);
    } else {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;

      setCityValue("");
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

          setResult(`
          <h2>${data.name}</h2>
          <h4 class="weather">${data.weather[0].main}</h4>
          <h4 class="desc">${data.weather[0].description}</h4>
          <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
          <h1>${data.main.temp} &#176;</h1>
          <div class="temp-container">
              <div>
                  <h4 class="title">min</h4>
                  <h4 class="temp">${data.main.temp_min}&#176;</h4>
              </div>
              <div>
                  <h4 class="title">max</h4>
                  <h4 class="temp">${data.main.temp_max}&#176;</h4>
              </div>
          </div>
          `);
        })
        .catch(() => {
          setResult(`<h3 class="msg">City not found</h3>`);
        });
    }
  };

  return (
    <div className="wrapper">
      <div className="shape shape-1"></div>
      <div className="shape shape-2"></div>
      <div className="container">
        <div className="search-container">
          <input
            type="text"
            placeholder="Enter a city name"
            id="city"
            value={cityValue}
            onChange={(e) => setCityValue(e.target.value)}
          />
          <button id="search-btn" onClick={getWeather}>
            Search
          </button>
        </div>
        <div id="result" dangerouslySetInnerHTML={{ __html: result }}></div>
      </div>
    </div>
  );
};

export default WeatherApp;
