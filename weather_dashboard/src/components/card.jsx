export default function WeatherCard({ data }) {
  if (!data) return null;

  return (
    <div className="card">
      <div className="cardh">
      <h2 >{data.name}</h2>
      <p>{Math.round(data.main.temp)}°C</p>
      <p>{data.weather[0].description}</p>
      </div>

      <div className="carddata">
  
      <p>Humidity: {data.main.humidity}%</p>
      <p>Wind: {data.wind.speed} m/s</p>
      </div>

    </div>
  );
}
