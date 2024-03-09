import { useEffect, useState } from "react";
import Search from "../search";

export default function Weather() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  async function fetchWeatherData(param) {
    setLoading(true);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=310432b717fea323741b8a6f5b73cbf6`
      );
      const data = await response.json();
      console.log(data);
      if (data) {
        setWeatherData(data);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      return <h1>Error Occured ! While Fetching Data</h1>;
    }
  }
  function getCurrentDate() {
    return new Date().toLocaleString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }

  function handleDate(unixTimeStamp) {
    const date = new Date(unixTimeStamp * 1000);
    const dt = date.toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    return dt;
    // return <h1>Hi</h1>;
  }
  function handleSearch() {
    fetchWeatherData(search);
  }
  useEffect(() => {
    fetchWeatherData("Los Angeles");
  }, []);
  return (
    <div>
      <Search search={search} setSearch={setSearch} handleSearch={handleSearch} />
      {loading ? <div className="loading">Loading...</div> : null}
      {weatherData ? (
        <div>
          <div className="city-name">
            <h2>
              {weatherData?.name}, <span>{weatherData?.sys?.country}</span>
            </h2>
          </div>
          <div className="date">{handleDate(weatherData?.dt)}</div>
          <div className="temparature">{weatherData?.main?.temp}</div>
          <p className="description">
            {weatherData.weather && weatherData.weather[0] ? weatherData.weather[0].description : ""}
          </p>
          <div className="weather-info">
            <div>
              <div>
                <p className="wind">{weatherData?.wind?.speed}</p>
                <p>Wind Speed</p>
              </div>
            </div>
            <div>
              <div>
                <p className="humidity">{weatherData?.main?.humidity}</p>
                <p>Humidity</p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
