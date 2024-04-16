import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import CurrentWeatherCard from "@/components/CurrentWeatherCard";
import WeatherForecastCard from "@/components/WeatherForecastCard";
import MiscSection from "@/components/MiscSection";
import Footer from "@/components/Footer";

export default function Home() {
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
    <>
      <main
        className={cn(
          "flex",
          "flex-col",
          "min-h-[90vh]",
          "md:min-h-[92vh]",
          "lg:p-12",
        )}
      >
        <Header />

        <div
          className={cn(
            "flex",
            "flex-col",
            "justify-center",
            "p-4",
            "gap-6",
            "md:items-center",
            "md:gap-12",
          )}
        >
          <section id="CurrentWeather">
            <CurrentWeatherCard
              location="London"
              iconID="10d"
              temperature={20}
              temperatureMin={18}
              temperatureMax={22}
              description="Cloudy"
              feelsLike={22}
              humidity={80}
              windSpeed={5}
              windDirection={180}
              pressure={1013}
            />
          </section>
          <section id="FiveDaysForecast">
            <WeatherForecastCard />
          </section>
          <section
            id="Misc"
            className={cn(
              "w-full",
              "border",
              "px-4",
              "rounded-lg",
              "md:max-w-[736px]",
            )}
          >
            <MiscSection
              hourlyForecast={hourlyForecast}
              currentWeatherDetail="scatered sunny"
              currentWeatherAdvice="okay"
            />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
