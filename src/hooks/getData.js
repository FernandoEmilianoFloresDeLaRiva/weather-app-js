import { getWeather } from "../services/api/weatherApi";

export const getData = async (city) => {
  try {
    const data = await getWeather(city);
    const dataObject = {
      cityName: `${data.name}, ${data.sys.country}`,
      weatherTitle: data.weather[0].main,
      weatherIcon: data.weather[0].icon,
      temperature: data.main.temp,
      feelsLike: data.main.feels_like,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
    };
    return dataObject;
  } catch (err) {
    console.error("Error fetching:", err);
    alert("City not found");
    throw err;
  }
};
