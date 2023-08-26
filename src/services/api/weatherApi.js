const api_key = "{YOUR API KEY HERE}";
const api_url = `https://api.openweathermap.org/data/2.5/weather?appid=${api_key}&units=metric`;

export const getWeather = async (city) => {
  const res = await fetch(`${api_url}&q=${city}`);
  return res.json();
};
