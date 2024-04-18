import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import WeatherIcon from "@/components/WeatherIcon";
import { OpenWeatherMapAPI, OpenWeatherMapAPIDaily } from "@/lib/api";
import { cn, parseDateFromTimestamp, WeatherIconID } from "@/lib/utils";

function WeatherForecastItem(props: OpenWeatherMapAPIDaily) {
  return (
    <div
      className={cn(
        "flex",
        "flex-col",
        "items-center",
        "justify-between",
        "rounded-lg",
        "border",
        "py-4",
        "px-2",
        "w-36",
      )}
    >
      <p>{parseDateFromTimestamp(props.dt)}</p>
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
      <div className="flex gap-1 md:justify-center">
        {props.daily.map((daily) => (
          <WeatherForecastItem {...daily} key={daily.dt} />
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
