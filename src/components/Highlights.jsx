import {
  Wind,
  Droplets,
  Sun,
  Eye,
  Sunrise,
  Sunset,
} from "lucide-react";

function Highlights({ weather }) {
  const current = weather.current;
  const daily = weather.daily;

  const formatTime = (time) => {
    return new Date(time).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    });
  };

  const items = [
    {
      title: "Wind Speed",
      value: `${current.wind_speed_10m} km/h`,
      icon: <Wind />,
    },
    {
      title: "Humidity",
      value: `${current.relative_humidity_2m}%`,
      icon: <Droplets />,
    },
    {
      title: "UV Index",
      value: daily.uv_index_max[0],
      icon: <Sun />,
    },
    {
      title: "Visibility",
      value: `${(current.visibility / 1000).toFixed(1)} km`,
      icon: <Eye />,
    },
    {
      title: "Sunrise",
      value: formatTime(daily.sunrise[0]),
      icon: <Sunrise />,
    },
    {
      title: "Sunset",
      value: formatTime(daily.sunset[0]),
      icon: <Sunset />,
    },
  ];

  return (
    <section className="highlights-card">
      <h3>Today's Highlights</h3>

      <div className="highlights-grid">
        {items.map((item) => (
          <div className="highlight-item" key={item.title}>
            <div className="highlight-heading">
              {item.icon}
              <span>{item.title}</span>
            </div>

            <h2>{item.value}</h2>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Highlights;