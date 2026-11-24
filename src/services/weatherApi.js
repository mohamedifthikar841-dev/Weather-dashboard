
const BASE_URL = "https://api.open-meteo.com/v1/forecast";

const GEO_URL = "https://geocoding-api.open-meteo.com/v1/search";

export async function getCityCoordinates(city) {
  const response = await fetch(
    `${GEO_URL}?name=${encodeURIComponent(city)}&count=1&language=en&format=json`
  );

  if (!response.ok) {
    throw new Error("Unable to find city.");
  }

  const data = await response.json();

  if (!data.results || data.results.length === 0) {
    throw new Error("City not found.");
  }

  return data.results[0];
}
export async function getWeatherData(latitude, longitude) {
  const url =
    `${BASE_URL}?latitude=${latitude}` +
    `&longitude=${longitude}` +
    `&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,visibility` +
    `&daily=weather_code,temperature_2m_max,temperature_2m_min,uv_index_max,sunrise,sunset` +
    `&forecast_days=10&timezone=auto`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Unable to fetch weather data.");
  }

  return response.json();
}

export async function getCityWeather(city) {
  const location = await getCityCoordinates(city);

  const weather = await getWeatherData(
    location.latitude,
    location.longitude
  );

  return {
    ...weather,
    city: location.name,
    country: location.country,
  };
}
