
import { useEffect, useState } from "react";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import CurrentWeather from "./components/CurrentWeather";
import Highlights from "./components/Highlights";
import OtherCountries from "./components/OtherCountries";
import Forecast from "./components/Forecast";

import { getCityWeather } from "./services/weatherApi";

import "./App.css";

function App() {
  const [city, setCity] = useState("Chennai");
  const [weather, setWeather] = useState(null);
  const [otherCities, setOtherCities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch main city weather
  async function fetchWeather(cityName) {
    try {
      setLoading(true);
      setError("");

      const data = await getCityWeather(cityName);

      setWeather(data);
      setCity(data.city);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  // Fetch weather for other countries
  async function fetchOtherCities() {
    const cityNames = ["Canberra", "Tokyo"];

    const results = await Promise.allSettled(
      cityNames.map((name) => getCityWeather(name))
    );

    const successfulCities = results
      .filter((result) => result.status === "fulfilled")
      .map((result) => result.value);

    setOtherCities(successfulCities);
  }

  // Load dashboard
  useEffect(() => {
    fetchWeather("Chennai");
    fetchOtherCities();
  }, []);

  return (
    <div className="app-container">
      <div className="dashboard">

        <Sidebar />

        <main className="main-content">

          <Header
            city={city}
            setCity={setCity}
            onSearch={fetchWeather}
            loading={loading}
          />

          {error && (
            <div className="error-message">
              {error}
            </div>
          )}

          {loading && !weather && (
            <div className="loading">
              Loading weather data...
            </div>
          )}

          {weather && (
            <div className="dashboard-grid">

              <div className="left-column">

                <CurrentWeather weather={weather} />

                <OtherCountries cities={otherCities} />

              </div>

              <div className="right-column">

                <Highlights weather={weather} />

                <Forecast weather={weather} />

              </div>

            </div>
          )}

        </main>
      </div>
    </div>
  );
}

export default App;
