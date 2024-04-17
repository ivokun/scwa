import { headers } from "next/headers";
import { cn, getUserIP } from "@/lib/utils";
import { serverEnv } from "@/lib/env";
import { getAllWeatherDataFromLocation, getUserCityFromIP } from "@/lib/api";
import Header from "@/components/Header";
import CurrentWeatherCard from "@/components/CurrentWeatherCard";
import WeatherForecastCard from "@/components/WeatherForecastCard";
import MiscSection from "@/components/MiscSection";
import Footer from "@/components/Footer";

export default async function Home() {
  const userIP = getUserIP(headers());
  const location = await getUserCityFromIP(
    {
      baseURL: serverEnv.IP2LOCATION_API_URL,
      apiKey: serverEnv.IP2LOCATION_API_KEY,
    },
    userIP,
  );
  const weather = await getAllWeatherDataFromLocation(
    {
      baseURL: serverEnv.OPENWEATHERMAP_API_URL,
      apiKey: serverEnv.OPENWEATHERMAP_API_KEY,
    },
    location,
  );

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
            <CurrentWeatherCard {...weather.current} />
          </section>
          <section id="FiveDaysForecast">
            <WeatherForecastCard {...weather} />
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
              hourlyForecast={weather.hourly}
              currentWeatherDetail={weather.current.weather[0].description}
              currentWeatherAdvice={weather.current.weather[0].description}
            />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
