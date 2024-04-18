import { headers } from "next/headers";
import { cn, getUserIP } from "@/lib/utils";
import { serverEnv } from "@/lib/env";
import { getAllWeatherDataFromLocation, getUserCityFromIP } from "@/lib/api";
import CurrentWeatherCard from "@/components/CurrentWeatherCard";
import WeatherForecastCard from "@/components/WeatherForecastCard";
import MiscSection from "@/components/MiscSection";
import { getRandomWeatherAdvice } from "@/lib/advice";

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
  const currentWeatherAdvice = getRandomWeatherAdvice(
    weather.current.weather[0].id,
  );

  return (
    <main>
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
          <CurrentWeatherCard current={weather.current} location={location} />
        </section>
        <section id="FiveDaysForecast">
          <WeatherForecastCard {...weather} />
        </section>
        <section id="Misc" className={cn("w-full", "md:max-w-[736px]")}>
          <MiscSection
            hourlyForecast={weather.hourly}
            currentWeatherDetail={weather.daily[0].summary}
            currentWeatherAdvice={currentWeatherAdvice}
          />
        </section>
      </div>
    </main>
  );
}
