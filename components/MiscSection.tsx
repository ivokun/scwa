import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export type HourlyForecastItem = {
  time: string;
  temperature: number;
  description: string;
};

function HourlyForecastCard(forecast: HourlyForecastItem) {
  return (
    <div
      className={cn(
        "flex",
        "items-center",
        "justify-between",
        "rounded-lg",
        "border",
        "p-2",
        "w-full",
      )}
    >
      <p>{forecast.time}</p>
      <div className="flex gap-4">
        <p>{forecast.description}</p>
        <p>{forecast.temperature}°</p>
      </div>
    </div>
  );
}

export default function MiscSection(props: {
  hourlyForecast: HourlyForecastItem[];
  currentWeatherDetail: string;
  currentWeatherAdvice: string;
}) {
  return (
    <Accordion type="multiple">
      <AccordionItem value="hourly-forcast">
        <AccordionTrigger>Hourly Forecast</AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col gap-1">
            {props.hourlyForecast.map((forecast) => (
              <HourlyForecastCard {...forecast} key={forecast.time} />
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
  );
}
