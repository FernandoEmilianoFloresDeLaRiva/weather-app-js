import { CityContext } from "../../context/CityContext";
import "./Menu.css";
import Header from "../../components/Header/Header";
import InputCity from "../../components/InputCity/InputCity";
import ShowWeather from "../../components/ShowWeather/ShowWeather";
import Humidity from "../../assets/Humidity.svg";
import Wind from "../../assets/Wind.svg";
import WeatherDetails from "../../components/WeatherDetails/WeatherDetails";
import { useContext } from "react";

function App() {
  const { cityData } = useContext(CityContext);
  return (
    <div className="App">
      <Header />
      <main>
        <aside>
          <InputCity />
        </aside>
        <ShowWeather />
        <section>
          <WeatherDetails
            imgSrc={Humidity}
            title="Humidity"
            data={cityData.humidity}
            unit="%"
          />
          <WeatherDetails
            imgSrc={Wind}
            title="Wind speed"
            data={cityData.windSpeed}
            unit="m/s"
          />
        </section>
      </main>
    </div>
  );
}

export default App;
