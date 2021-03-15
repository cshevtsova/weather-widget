import axios from 'axios';
import { DayInfo, DayInfoResponse } from '../interfaces/weatherData';
import { convertToCelsius, convertToFahrenheit, getDate } from '../utils/convertData';

const OPEN_WEATHER_MAP_KEY = 'b06ef0545a0c1f17df53bbab4832aa3e';

export const getCityCoordinates = async (city: string) => {
  const params = {
    q: city,
    appid: OPEN_WEATHER_MAP_KEY,
    limit: 5,
    lang: 'en',
  };

  const url = 'http://api.openweathermap.org/geo/1.0/direct';

  try {
    return await axios.get(url, { params }).then((response) => {
      return response.data[0];
    });
  } catch (err) {
    //
  }
}

export const getWeatherData = async (coordinates: {
  lat: number;
  lon: number;
}) => {
  const params = {
    lat: coordinates.lat,
    lon: coordinates.lon,
    exclude: 'minutely,hourly',
    appid: OPEN_WEATHER_MAP_KEY,
    lang: 'en',
  };

  const url = 'https://api.openweathermap.org/data/2.5/onecall';

  try {
    return await axios.get(url, { params }).then((response) => {
      const currentDay = response.data?.current;
      const daily = response.data?.daily;
      const daysInfo: DayInfo[] = [];

      daily.map((day: DayInfoResponse) => {
        const transformedDay: DayInfo = {
          dt: day.dt,
          min_temp_C: convertToCelsius(day.temp.min),
          max_temp_C: convertToCelsius(day.temp.max),
          min_temp_F: convertToFahrenheit(day.temp.min),
          max_temp_F: convertToFahrenheit(day.temp.max),
          humidity: day.humidity,
          wind_speed: day.wind_speed,
          weather_id: day.weather[0].id,
          weather_main: day.weather[0].main,
          weather_description: day.weather[0].description,
          icon: day.weather[0].icon,
        };

        if (getDate(day.dt) === getDate(currentDay.dt)) {
          transformedDay.current_temp_C = convertToCelsius(currentDay.temp);
          transformedDay.current_temp_F = convertToFahrenheit(currentDay.temp);
        }

        return daysInfo.push(transformedDay);
      });

      return daysInfo;
    });
  } catch (err) {
    //
  }
}