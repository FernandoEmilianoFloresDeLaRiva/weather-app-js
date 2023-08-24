import React, { useContext } from "react";
import { CityContext } from "../../context/CityContext";
import "./ShowWeather.css";

function ShowWeather() {
  const { cityData } = useContext(CityContext);
  return (
    <>
      <section className="section-weather">
        <div>
          <h2>{cityData.cityName || "Write a City Name"}</h2>
          <p>Temperature: {cityData.temperature}°C</p>
          <p>Feels like {cityData.feelsLike}°C</p>
        </div>
        <figure>
          <img
            src={cityData.weatherIcon ? `https://openweathermap.org/img/wn/${cityData.weatherIcon}@2x.png` : null}
            alt={cityData.weatherTitle}
          />
          <figcaption>{cityData.weatherTitle}</figcaption>
        </figure>
      </section>
    </>
  );
}

export default ShowWeather;
