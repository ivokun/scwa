"use client";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import WeatherIcon from "@/components/WeatherIcon";
import { OpenWeatherMapAPI, OpenWeatherMapAPIDaily } from "@/lib/api/owm";
import { cn, parseDateFromTimestamp, WeatherIconID } from "@/lib/utils";

function WeatherForecastItem(props: OpenWeatherMapAPIDaily) {
  const displayDate = parseDateFromTimestamp(props.dt);
  const baseClassName = [
    "flex",
    "flex-col",
    "items-center",
    "justify-between",
    "rounded-sm",
    "border",
    "border-black",
    "shadow-brutalism",
    "bg-white",
    "py-4",
    "px-2",
    "w-32",
  ];
  const todayBackground = displayDate === "Today" ? "bg-yellow-200" : "";
  return (
    <div className={cn([...baseClassName, todayBackground])}>
      <p>{displayDate}</p>
      <WeatherIcon
        id={props.weather[0].icon as WeatherIconID}
        size="base"
        width={50}
        height={50}
      />
      <p>
        {props.temp.min}°/{props.temp.max}°
      </p>
    </div>
  );
}

export default function WeatherForecastCard(props: OpenWeatherMapAPI) {
  return (
    <ScrollArea className="whitespace-nowrap rounded-md">
      <div className="flex gap-2 lg:justify-center py-4 pr-4">
        {props.daily.map((daily) => (
          <WeatherForecastItem {...daily} key={daily.dt} />
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
