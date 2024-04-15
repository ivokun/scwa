import { WeatherIconID } from "@/lib/utils";
import WeatherIcon from "@/components/WeatherIcon";
import { WindIcon, DropletIcon } from "@/components/Icons";

interface WeatherCardProps {
  iconID: WeatherIconID;
  location: string;
  temperature: number;
  temperatureMin: number;
  temperatureMax: number;
  description: string;
  feelsLike: number;
  humidity: number;
  windSpeed: number;
  windDirection: number;
  pressure: number;
}

export default function WeatherCard(props: WeatherCardProps) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center justify-center">
        <WeatherIcon id={props.iconID} size="4x" width={150} height={150} />
        <div className="flex-col">
          <p className="text-6xl">{props.temperature}°</p>
          <p className="capitalize">{props.description}</p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-1.5">
          <DropletIcon className="w-4 h-4 text-gray-500" />
          <p>Humidity: 10%</p>
        </div>
        <div className="flex items-center gap-1.5">
          <WindIcon className="w-4 h-4 text-gray-500" />
          <p>Wind: 5 kph</p>
        </div>
      </div>
    </div>
  );
}
