"use client";

import { WeatherIconID } from "@/lib/utils";
import WeatherIcon from "./WeatherIcon";

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
    <div className="flex justify-evenly p-4">
      <div className="flex flex-col">
        <p className="capitalize">{props.location}</p>
        <p className="text-6xl tracking-[-1px]">{props.temperature}°</p>
        <div className="flex items-center">
          <p className="text-sm">Min: {props.temperatureMin}°</p>
          <p className="text-sm mx-2">Max: {props.temperatureMax}°</p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <p className="capitalize">{props.description}</p>
        <WeatherIcon id={props.iconID} size="2x" width={100} height={100} />
        <p className="text-sm">Feels like {props.feelsLike}°</p>
      </div>
    </div>
  );
}
