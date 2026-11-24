export function getWeatherInfo(code) {
  if (code === 0) return { text: "Clear Sky", icon: "☀️" };
  if ([1, 2].includes(code)) return { text: "Partly Cloudy", icon: "🌤️" };
  if (code === 3) return { text: "Cloudy", icon: "☁️" };
  if ([45, 48].includes(code)) return { text: "Foggy", icon: "🌫️" };
  if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code))
    return { text: "Rainy", icon: "🌧️" };
  if ([71, 73, 75, 77].includes(code))
    return { text: "Snowy", icon: "❄️" };
  if ([95, 96, 99].includes(code))
    return { text: "Thunderstorm", icon: "⛈️" };

  return { text: "Cloudy", icon: "☁️" };
}

export function getDayName(date, index) {
  if (index === 0) return "Today";

  return new Date(date + "T12:00:00").toLocaleDateString(
    "en-US",
    { weekday: "short" }
  );
}