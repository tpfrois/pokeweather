import axios from 'axios';
require('dotenv').config();


const getCityWeather = async (city) => {
  const API_KEY = process.env.REACT_APP_WEATHER_API;

  try {
    const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
    const weather = {
      temperature: Math.round(data.main.temp - 273.15),
      main: data.weather[0].main,
      isRaining: data.weather[0].main.toLowerCase().includes("rain")
    }
    return weather;
  } catch (error) {
    throw Error("Wrong city name")
  }
}

export { getCityWeather };
