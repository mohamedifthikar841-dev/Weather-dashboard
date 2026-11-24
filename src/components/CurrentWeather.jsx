import { MapPin, CalendarDays } from "lucide-react";
import { getWeatherInfo } from "../utils/weather";

function CurrentWeather({ weather }) {
  const info = getWeatherInfo(weather.current.weather_code);

  const today = new Date().toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <section className="current-card">
      <div className="location">
        <MapPin size={15} />
        <span>
          {weather.city}, {weather.country}
        </span>
      </div>

      <div className="weather-date">
        <div>
          <h2>Today</h2>
          <p>
            <CalendarDays size={13} />
            {today}
          </p>
        </div>

        <span className="weather-condition">
          {info.text}
        </span>
      </div>

      <div className="current-content">
        <div className="weather-illustration">
          <span>{info.icon}</span>
        </div>

        <div className="temperature">
          <h1>
            {Math.round(weather.current.temperature_2m)}°C
          </h1>

          <p>
            Feels like{" "}
            {Math.round(weather.current.apparent_temperature)}°C
          </p>
        </div>
      </div>

      <div className="weather-footer">
        <span>Weather in {weather.city}</span>
        <span>
          Wind: {weather.current.wind_speed_10m} km/h
        </span>
      </div>
    </section>
  );
}

export default CurrentWeather;