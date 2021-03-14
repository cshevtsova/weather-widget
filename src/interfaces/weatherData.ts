export interface DayInfo {
  dt: number;
  min_temp_C: number;
  max_temp_C: number;
  min_temp_F: number;
  max_temp_F: number;
  humidity: number;
  wind_speed: number;
  weather_id: number;
  weather_main: string;
  weather_description: string;
  icon: string;
}

export interface DayInfoResponse {
  dt: number;
  temp: {
    min: number;
    max: number;
  };
  humidity: number;
  wind_speed: number;
  weather: WeatherInfo[];
}

interface WeatherInfo {
  id: number;
  main: string;
  description: string;
  icon: string;
}
