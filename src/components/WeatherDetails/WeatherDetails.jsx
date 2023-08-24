import React from "react";
import "./WeatherDetails.css";

function WeatherDetails({ imgSrc, title, data, unit }) {
  return (
    <article>
      <img src={imgSrc} alt={title}/>
      <div>
        <p>{title}</p>
        <h2>{data}</h2>
        <small>{unit}</small>
      </div>
    </article>
  );
}

export default WeatherDetails;
