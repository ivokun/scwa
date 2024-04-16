import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type HourlyForecastItem = {
  time: string;
  temperature: number;
  description: string;
};

function HourlyForecastCard(forecast: HourlyForecastItem) {
  return (
    <div
      key={forecast.time}
      className="flex items-center justify-between rounded-lg border p-2 w-full"
    >
      <p>{forecast.time}</p>
      <p>{forecast.description}</p>
      <p>{forecast.temperature}°</p>
    </div>
  );
}

export default function MiscSection() {
  const hourlyForecast = [
    {
      time: "12:00",
      temperature: 20,
      description: "Cloudy",
    },
    {
      time: "15:00",
      temperature: 22,
      description: "Sunny",
    },
    {
      time: "18:00",
      temperature: 18,
      description: "Rainy",
    },
    {
      time: "21:00",
      temperature: 25,
      description: "Sunny",
    },

    {
      time: "00:00",
      temperature: 20,
      description: "Cloudy",
    },
    {
      time: "03:00",
      temperature: 22,
      description: "Sunny",
    },
    {
      time: "06:00",
      temperature: 18,
      description: "Rainy",
    },
    {
      time: "09:00",
      temperature: 25,
      description: "Sunny",
    },
  ];
  return (
    <section className="border px-4 rounded-lg">
      <Accordion type="multiple">
        <AccordionItem value="hourly-forcast">
          <AccordionTrigger>Hourly Forecast</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-1">
              {hourlyForecast.map((forecast) => (
                <HourlyForecastCard {...forecast} />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="detail">
          <AccordionTrigger>Detail</AccordionTrigger>
          <AccordionContent>Detail content goes here</AccordionContent>
        </AccordionItem>
        <AccordionItem value="Advice">
          <AccordionTrigger>Advice</AccordionTrigger>
          <AccordionContent>Advice content goes here</AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
