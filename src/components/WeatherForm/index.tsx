import React, {
  memo,
  useCallback,
  useEffect,
  useState,
  VFC,
} from 'react';
import { Box } from '@material-ui/core';
import useStyles from './weatherForm.styles';
import { WeatherFormProps } from './weatherForm.types';
import Day from '../Day';
import Details from '../Details';
import { NoWearher, Welcome } from '../Defaults';


const WeatherForm: VFC<WeatherFormProps> = ({
  daysInfo,
  noWeather,
  city,
}: WeatherFormProps) => {
  const classes = useStyles();
  const today = daysInfo[0];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedDayInfo, setSelectedDayInfo] = useState(today);
  const [tempScale, setTempScale] = useState('C');

  useEffect(() => {
    setSelectedIndex(0);
    setSelectedDayInfo(today);
  }, [noWeather, daysInfo]);

  const handleSelectItem = useCallback((index: number) => {
    setSelectedIndex(index);
    setSelectedDayInfo(daysInfo[index]);
  }, [daysInfo]);

  const handleScale = useCallback((scale: string) => {
    setTempScale(scale);
  }, []);

  return noWeather ?
    (
      <NoWearher />
    ) : (
      city ?
        (
          <Box className={classes.weatherModule}>
            <Box position="relative">
              <Details
                dayInfo={selectedDayInfo}
                city={city}
                handleScale={handleScale}
                tempScale={tempScale}
              />
              <Box className={classes.days}>
                {daysInfo.map((dayInfo, index) => (
                  <Day
                    key={dayInfo.dt}
                    index={index}
                    dayInfo={dayInfo}
                    onSelect={handleSelectItem}
                    selected={index === selectedIndex}
                    tempScale={tempScale}
                  />
                ))}
              </Box>
            </Box>
          </Box>
        ) : <Welcome />
    )
};

export default memo(WeatherForm);