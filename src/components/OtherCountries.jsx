
import { getWeatherInfo } from "../utils/weather";

function OtherCountries({ cities }) {
  return (
    <section className="other-card">

      <div className="section-heading">
        <h3>Other Countries</h3>
        <span>Live Updates</span>
      </div>

      {cities.length === 0 ? (
        <p className="loading">Loading cities...</p>
      ) : (
        cities.map((city) => {
          const info = getWeatherInfo(
            city.current.weather_code
          );

          return (
            <div className="country-item" key={city.city}>

              <div>
                <small>{city.country}</small>
                <h4>{city.city}</h4>
                <p>{info.text}</p>
              </div>

              <span className="country-weather">
                {info.icon}
              </span>

              <h3>
                {Math.round(
                  city.current.temperature_2m
                )}°C
              </h3>

            </div>
          );
        })
      )}

    </section>
  );
}

export default OtherCountries;
