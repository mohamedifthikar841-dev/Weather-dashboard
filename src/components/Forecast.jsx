import { getWeatherInfo, getDayName } from "../utils/weather";

function Forecast({ weather }) {
  const daily = weather.daily;

  return (
    <section className="forecast-card">
      <div className="section-heading">
        <h3>10 Day Forecast</h3>
        <span>Next 10 days</span>
      </div>

      <div className="forecast-list">
        {daily.time.map((date, index) => {
          const info = getWeatherInfo(
            daily.weather_code[index]
          );

          return (
            <div className="forecast-item" key={date}>
              <p>{getDayName(date, index)}</p>

              <span className="forecast-icon">
                {info.icon}
              </span>

              <h4>
                {Math.round(daily.temperature_2m_max[index])}°
              </h4>

              <small>
                {Math.round(daily.temperature_2m_min[index])}°
              </small>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Forecast;