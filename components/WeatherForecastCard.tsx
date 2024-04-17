import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import WeatherIcon from "@/components/WeatherIcon";
import { OpenWeatherMapAPI } from "@/lib/api";
import { cn, parseDateFromTimestamp, WeatherIconID } from "@/lib/utils";
export default function WeatherForecastCard(props: OpenWeatherMapAPI) {
  return (
    <ScrollArea className="whitespace-nowrap rounded-md">
      <div className="flex gap-1 md:justify-center">
        {props.daily.map((d) => (
          <div
            key={d.dt}
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
            <p>{parseDateFromTimestamp(d.dt)}</p>
            <WeatherIcon
              id={d.weather[0].icon as WeatherIconID}
              size="base"
              width={50}
              height={50}
            />
            <p>
              {d.temp.min}°/{d.temp.max}°
            </p>
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
