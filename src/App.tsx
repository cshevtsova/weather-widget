import {
  Box,
  IconButton,
  InputBase
} from '@material-ui/core';
import React, {
  useCallback,
  useEffect,
  useState,
} from 'react';
import './index.css';
import Close from '@material-ui/icons/Close';
import useStyles from './App.styles';
import WeatherForm from './components/WeatherForm';
import useDebounce from './utils/useDebounce';
import { DayInfo } from './interfaces/weatherData';
import { getCityCoordinates, getWeatherData } from './api/api'
import WeatherKey from './enums/weatherKeys';

function App() {
  const classes = useStyles();
  const [city, setCity] = useState('');
  const [cityInfo, setCityInfo] = useState('');
  const [daysInfo, setDaysInfo] = useState([] as DayInfo[]);
  const debouncedValue = useDebounce(city, 500);
  const [noWeather, setNoWeather] = useState(false);

  const handleCityChange = useCallback(({ target: { value } }) => {
    setCity(value);
    if (!value) {
      setCityInfo('');
      setNoWeather(false);
    }

  }, []);

  const handleClearClick = useCallback(() => {
    setCity('');
    setCityInfo('');
    setNoWeather(false);
  }, []);

  useEffect(() => {
    if (debouncedValue) {
      getCityCoordinates(debouncedValue).then((response) => {
        if (response) {
          const coordinates = {
            lat: response.lat,
            lon: response.lon,
          };
          setCityInfo(`${response.name}, ${response.country}`);
          setNoWeather(false);
          getWeatherData(coordinates).then((weatherData) => {
            if (weatherData) {
              setDaysInfo(weatherData);
              setNoWeather(false);
            } else {
              setCityInfo('');
              setNoWeather(true);
            }
          });
        } else {
          setCityInfo('');
          setNoWeather(true);
        }
      });
    }
  }, [debouncedValue]);


  return (
    <Box className={classes.app}>
      <Box className={classes.searchBox}>
        <InputBase
          className={classes.searchInput}
          placeholder={WeatherKey.CITY_PLACEHOLDER}
          value={city}
          onChange={handleCityChange}
        />
        <IconButton
          className={classes.clearIcon}
          onClick={handleClearClick}
        >
          <Close />
        </IconButton>
      </Box>
      <WeatherForm 
        daysInfo={daysInfo} 
        noWeather={noWeather} 
        city={cityInfo} 
      />
    </Box>
  );
}

export default App;
