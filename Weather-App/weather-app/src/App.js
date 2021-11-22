import React, { useState } from "react";
import "./App.css";
import "@fontsource/nunito";
const apiKey = "6e8e9e8a6b81898eae0219daf41270f3";

export default function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const getWeather = async (e) => {
    if (e.key === "Enter") {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apiKey}`
      );
      const data = await response.json();
      setWeather(data);
      setCity("");
    }
  };
  return (
    <div className="App">
      <input
        type="text"
        value={city}
        placeholder="enter city..."
        onChange={(e) => setCity(e.target.value)}
        onKeyPress={getWeather}
        required
      />
      {typeof weather.main === "undefined" ? (
        <p>Enter a Location...</p>
      ) : (
        <div>
          <h3>
            {weather.name},{weather.sys.country}
          </h3>
          <p className="temp">{Math.round(weather.main.temp)}&deg;C</p>
          <p className="weather">{weather.weather[0].main}</p>
        </div>
      )}
    </div>
  );
}

