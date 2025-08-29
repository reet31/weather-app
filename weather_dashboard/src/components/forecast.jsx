export default function Forecast({ list }) {
  if (!list || list.length === 0) return null;

  // Filter one forecast per day
  const daily = list.filter((item) => item.dt_txt.includes("12:00:00"));

  return (
    <div className="forecast-grid">
      {daily.map((item, index) => (
        <div key={index} className="forecast-card">
          <p className="font-bold">
            {new Date(item.dt_txt).toLocaleDateString(undefined, {
              weekday: "short",
            })}
          </p>
          <img
            src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
            alt={item.weather[0].description}
            className="mx-auto"
          />
          <p>{Math.round(item.main.temp)}°C</p>
        </div>
      ))}
    </div>
  );
}
