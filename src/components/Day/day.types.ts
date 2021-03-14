import { DayInfo } from '../../interfaces/weatherData';

export interface DayProps {
   index: number;
   dayInfo: DayInfo;
   selected: boolean;
   tempScale: string;
   onSelect: (index: number) => void;
}