"use client";

import { WeatherIconID, cn, parseUpdateTimeFromTimestamp } from "@/lib/utils";
import WeatherIcon from "@/components/WeatherIcon";
import { WindIcon, DropletIcon } from "@/components/Icons";
import type {
  IP2LocationAPI,
  OpenWeatherMapAPICurrentWeather,
} from "@/lib/api";

export default function CurrentWeatherCard(props: {
  current: OpenWeatherMapAPICurrentWeather;
  location: IP2LocationAPI;
}) {
  return (
    <div className="flex flex-col">
      <div className="flex gap-1 p-4 bg-white border border-black shadow-brutalism rounded-sm self-center items-center">
        <p className="text-2xl">{props.location.city_name}</p>
      </div>
      <div className={cn("flex", "flex-row", "items-center", "justify-center")}>
        <WeatherIcon
          id={props.current.weather[0].icon as WeatherIconID}
          size="4x"
          width={150}
          height={150}
        />
        <div className="flex-col">
          <p className="text-6xl font-bold">{props.current.temp}°</p>
          <p className="capitalize font-bold">
            {props.current.weather[0].main}
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-1.5">
          <DropletIcon className="w-4 h-4 text-gray-500" />
          <p>Humidity: {props.current.humidity}%</p>
        </div>
        <div className="flex items-center gap-1.5">
          <WindIcon className="w-4 h-4 text-gray-500" />
          <p>Wind: {props.current.wind_speed} m/s</p>
        </div>
        <div className="flex items-center gap-1.5">
          <p className="text-[0.7rem]">
            Updated at: {parseUpdateTimeFromTimestamp(props.current.dt)}
          </p>
        </div>
      </div>
    </div>
  );
}
