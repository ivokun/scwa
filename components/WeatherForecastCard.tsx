import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
export default function WeatherForecastCard() {
  const forecast = [
    {
      day: "Mon",
      description: "Cloudy",
      temperature: {
        min: 20,
        max: 30,
      },
    },
    {
      day: "Tue",
      description: "Sunny",
      temperature: {
        min: 22,
        max: 32,
      },
    },
    {
      day: "Wed",
      description: "Rainy",
      temperature: {
        min: 18,
        max: 28,
      },
    },
    {
      day: "Thu",
      description: "Sunny",
      temperature: {
        min: 25,
        max: 35,
      },
    },
    {
      day: "Fri",
      description: "Cloudy",
      temperature: {
        min: 20,
        max: 30,
      },
    },
  ];
  return (
    <ScrollArea className="whitespace-nowrap rounded-md">
      <div className="flex gap-1 md:justify-center">
        {forecast.map((f) => (
          <div
            key={f.day}
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
            <p>{f.day}</p>
            <p>{f.description}</p>
            <p>
              {f.temperature.min}°/{f.temperature.max}°
            </p>
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
