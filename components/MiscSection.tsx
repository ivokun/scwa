import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { OpenWeatherMapAPIHourly } from "@/lib/api";
import WeatherIcon from "@/components/WeatherIcon";
import { cn, parseTimeFromTimestamp, WeatherIconID } from "@/lib/utils";

function HourlyForecastCard(forecast: OpenWeatherMapAPIHourly) {
  return (
    <div
      className={cn(
        "flex",
        "items-center",
        "justify-between",
        "rounded-lg",
        "border",
        "px-2",
        "w-full",
      )}
    >
      <p>{parseTimeFromTimestamp(forecast.dt)}</p>
      <div className="flex items-center">
        <WeatherIcon
          id={forecast.weather[0].icon as WeatherIconID}
          size="base"
          width={50}
          height={50}
        />
        <p>{forecast.temp}°</p>
      </div>
    </div>
  );
}

export default function MiscSection(props: {
  hourlyForecast: Array<OpenWeatherMapAPIHourly>;
  currentWeatherDetail: string;
  currentWeatherAdvice: string;
}) {
  return (
    <div className="z-10">
      <Accordion type="multiple">
        <AccordionItem value="hourly-forcast">
          <AccordionTrigger>Hourly Forecast</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-1">
              {props.hourlyForecast.map((forecast) => (
                <HourlyForecastCard {...forecast} key={forecast.dt} />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="detail">
          <AccordionTrigger>Detail</AccordionTrigger>
          <AccordionContent>
            <p>{props.currentWeatherDetail}</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="Advice">
          <AccordionTrigger>Advice</AccordionTrigger>
          <AccordionContent>
            <p>{props.currentWeatherAdvice}</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
