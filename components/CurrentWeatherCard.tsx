import { WeatherIconID, cn } from "@/lib/utils";
import WeatherIcon from "@/components/WeatherIcon";
import { WindIcon, DropletIcon } from "@/components/Icons";
import type { OpenWeatherMapAPICurrentWeather } from "@/lib/api";

export default function CurrentWeatherCard(
  props: OpenWeatherMapAPICurrentWeather,
) {
  return (
    <div className="flex flex-col">
      <div className={cn("flex", "flex-row", "items-center", "justify-center")}>
        <WeatherIcon
          id={props.weather[0].icon as WeatherIconID}
          size="4x"
          width={150}
          height={150}
        />
        <div className="flex-col">
          <p className="text-6xl">{props.temp}°</p>
          <p className="capitalize">{props.weather[0].main}</p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-1.5">
          <DropletIcon className="w-4 h-4 text-gray-500" />
          <p>Humidity: {props.humidity}%</p>
        </div>
        <div className="flex items-center gap-1.5">
          <WindIcon className="w-4 h-4 text-gray-500" />
          <p>Wind: {props.wind_speed} m/s</p>
        </div>
      </div>
    </div>
  );
}
