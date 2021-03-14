import React, {
  memo,
  useCallback,
  useState,
  useEffect,
  useMemo,
  VFC,
} from 'react';
import { Box, Typography } from '@material-ui/core';
import clsx from 'clsx';
import useStyles from './day.styles';
import { DayProps } from './day.types';

const Day: VFC<DayProps> = ({
  index,
  dayInfo,
  selected,
  tempScale = 'C',
  onSelect,
}: DayProps) => {
  const classes = useStyles();

  const [maxTemp, setMaxTemp] = useState<number>(0);
  const [minTemp, setMinTemp] = useState<number>(0);

  const getWeekDay = useMemo(() => {
    if (!dayInfo) return;
    const date = new Date(dayInfo.dt * 1000);
    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return weekDays[date.getDay()];
  }, [dayInfo]);

  useEffect(() => {
    if (!dayInfo) return;

    if (tempScale === 'C') {
      setMaxTemp(dayInfo.max_temp_C);
      setMinTemp(dayInfo.min_temp_C);
    } else {
      setMaxTemp(dayInfo.max_temp_F);
      setMinTemp(dayInfo.min_temp_F);
    }
  }, [dayInfo, tempScale]);

  const dayItemClasses = clsx(classes.dayItem, {
    [classes.dayItemSelected]: selected,
  });

  const handleClick = useCallback(() => {
    onSelect(index);
  }, [index, onSelect]);

  return (
    <Box
      className={dayItemClasses}
      onClick={handleClick}
    >
      <Typography className={classes.dayName}>{getWeekDay}</Typography>
      <Box className={classes.iconWrapper}>
        <img
          alt="icon"
          src={`http://openweathermap.org/img/wn/${dayInfo.icon}.png`}
          className={classes.icon}
        />
      </Box>
      <Typography className={classes.maxTemp}>
        {`${maxTemp}`}
      </Typography>
      <Typography className={classes.minTemp}>
        {`${minTemp}`}
      </Typography>
    </Box>
  );
};

export default memo(Day);