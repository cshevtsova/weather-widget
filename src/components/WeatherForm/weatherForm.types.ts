import { DayInfo } from '../../interfaces/weatherData';

export interface WeatherFormProps {
  city: string;
  daysInfo: DayInfo[];
  noWeather: boolean;
}