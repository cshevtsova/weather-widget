import React, { memo, VFC } from 'react';
import { Box, Typography } from '@material-ui/core';
import useStyles from './details.styles';
import WeatherKey from '../../enums/weatherKeys';
import { DetailsProps } from './details.types';
import { useState } from 'react';
import { useEffect, useMemo } from 'react';

const Details: VFC<DetailsProps> = ({
  dayInfo,
  city,
  handleScale,
  tempScale = 'C'
}: DetailsProps) => {
  const classes = useStyles();

  const [temp, setTemp] = useState<number>(0);

  const getWeekDay = useMemo(() => {
    if (!dayInfo) return;
    const date = new Date(dayInfo.dt * 1000);
    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return weekDays[date.getDay()];
  }, [dayInfo]);


  useEffect(() => {
    if (!dayInfo) return;

    if (tempScale === 'C') {
      setTemp(dayInfo.current_temp_C || dayInfo.max_temp_C);
    } else {
      setTemp(dayInfo.current_temp_F || dayInfo.max_temp_F);
    }
  }, [dayInfo, tempScale]);


  return dayInfo ?
    (
      <Box className={classes.details}>
        <Typography className={classes.location}>{city}</Typography>
        <Box className={classes.descriptionInfo}>
          <Typography className={classes.description}>{getWeekDay} •</Typography>
          <Typography className={classes.description}> {dayInfo.weather_description}</Typography>
        </Box>
        <Box className={classes.weatherInfo}>
          <Box display="flex" alignItems="center">
            <img
              alt="icon"
              src={`http://openweathermap.org/img/wn/${dayInfo.icon}.png`}
              className={classes.icon}
            />
            <Typography className={classes.degree}>
              {`${temp}${WeatherKey.DEGREE}`}
            </Typography>
            <Box display="flex">
              <span
                onClick={() => handleScale('C')}
                className={tempScale === 'C' ? classes.scaleSelected : classes.scale}
              >
                {WeatherKey.CELSIUS}
              </span>
              <span>/</span>
              <span
                onClick={() => handleScale('F')}
                className={tempScale === 'F' ? classes.scaleSelected : classes.scale}
              >
                {WeatherKey.FAHRENHEIT}
              </span>
            </Box>
          </Box>
          <Box>
            <Typography>{`${WeatherKey.HUMIDITY} ${dayInfo.humidity} %`}</Typography>
            <Typography>{`${WeatherKey.WIND} ${dayInfo.wind_speed} m/s`}</Typography>
            <Typography>{`${WeatherKey.AIR_QUALITY} ${dayInfo.weather_main}`}</Typography>
          </Box>
        </Box>
      </Box>
    ) : (
      <></>
    );
};

export default memo(Details);