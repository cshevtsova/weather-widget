import { DayInfo } from '../../interfaces/weatherData';

export interface DetailsProps {
   index?: number;
   city: string;
   dayInfo: DayInfo;
   selected?: boolean;
   tempScale?: string;
   onSelect?: (index: number) => void;
   handleScale: (scale: string) => void;
}