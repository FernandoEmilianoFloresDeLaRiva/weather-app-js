import { createContext, useState } from "react";

export const CityContext = createContext();

export const CityProvider = ({ children }) => {
  const [cityData, setCityData] = useState({
    cityName : "",
    weatherTitle: "",
    weatherIcon: "",
    temperature: 0,
    feelsLike: 0,
    humidity: 0,
    windSpeed: 0,
  });
  return (
    <CityContext.Provider value={{ cityData, setCityData }}>
      {children}
    </CityContext.Provider>
  );
};
