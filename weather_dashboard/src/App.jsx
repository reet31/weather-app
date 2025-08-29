import { useState } from 'react'
import Header from './components/header';
import Card from './components/card';
import Forecast from './components/forecast';
import axios from 'axios';  
function App() {
  
const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [history, setHistory] = useState([]);
const API_KEY="--";
  const fetchWeather = async (city) => {
    try {
      const res1 = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      const res2 = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
      );

      setWeather(res1.data);
      setForecast(res2.data.list);

      if (!history.includes(city)) {
        setHistory((prev) => [city, ...prev.slice(0, 4)]);
      }
    } catch (error) {
      alert("City not found!");
    }
  };
  return (
    <>

      <Header onSearch={fetchWeather}/>
         {weather && <Card data={weather}/>}
    {forecast.length > 0 && <Forecast list={forecast}/>}
  </>
  )
}

export default App
