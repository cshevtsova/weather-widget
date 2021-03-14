import React, { VFC } from 'react';
import { Box } from '@material-ui/core';
import CloudOffIcon from '@material-ui/icons/CloudOff';
import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';
import WeatherKey from '../../enums/weatherKeys';
import useStyles from './defaults.styles';

export const NoWearher: VFC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.weatherModule}>
      <Box className={classes.defaultPart}>
        <CloudOffIcon />
        {WeatherKey.NO_WEATHER}
      </Box>
    </Box>
  );
};

export const Welcome: VFC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.weatherModule}>
      <Box className={classes.defaultPart}>
        <WbSunnyOutlinedIcon />
        <span>{WeatherKey.WELCOME} {WeatherKey.CITY_PLACEHOLDER}</span>
      </Box>
    </Box>
  );
};