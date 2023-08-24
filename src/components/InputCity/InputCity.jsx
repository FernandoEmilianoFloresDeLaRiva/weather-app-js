import React, { useState, useContext } from "react";
import { CityContext } from "../../context/CityContext";
import { getData } from "../../hooks/getData";
import "./InputCity.css";

function InputCity() {
  const { setCityData } = useContext(CityContext);
  const [city, setCity] = useState("");
  const changeInput = ({ target }) => {
    setCity(target.value);
  };
  const searchCity = (e) => {
    e.preventDefault();
    getData(city)
      .then((res) => setCityData(res))
      .catch((err) => console.log(err));
  };
  return (
    <form onSubmit={searchCity}>
      <label htmlFor="cityName">Enter a City Name</label>
      <input
        onChange={changeInput}
        id="cityName"
        type="text"
        placeholder="E.g., New York, Tokyo, London"
        required
      />
      <button>Search</button>
    </form>
  );
}

export default InputCity;
