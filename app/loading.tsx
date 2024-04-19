import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import CurrentWeatherCard from "@/components/CurrentWeatherCard";

export default function Loading() {
  const mockCurrent = {
    dt: 0,
    sunrise: 0,
    sunset: 0,
    temp: 0,
    feels_like: 0,
    pressure: 0,
    humidity: 0,
    dew_point: 0,
    uvi: 0,
    clouds: 0,
    visibility: 0,
    wind_speed: 0,
    wind_deg: 0,
    weather: [
      {
        id: 0,
        main: "Loading...",
        description: "Loading...",
        icon: "01d",
      },
    ],
  };
  const mockLocation = {
    ip: "::1",
    region_name: "Loading...",
    zip_code: "Loading...",
    latitude: 0,
    longitude: 0,
    city_name: "Loading...",
    country_name: "Loading...",
    country_code: "Loading...",
    time_zone: "Loading...",
    asn: "Loading...",
    isp: "Loading...",
    is_proxy: false,
    as: "Loading...",
  };
  return (
    <main>
      <div
        className={cn(
          "flex",
          "flex-col",
          "justify-center",
          "px-4",
          "py-8",
          "gap-6",
          "md:items-center",
          "md:gap-12",
        )}
      >
        <section id="CurrentWeather">
          <CurrentWeatherCard
            isLoading
            location={mockLocation}
            current={mockCurrent}
          />
        </section>
        <section id="FiveDaysForecast">
          <Skeleton className="w-full h-96" />
        </section>
        <section id="Misc" className={cn("w-full", "md:max-w-[736px]")}>
          <Skeleton className="w-full h-96" />
        </section>
      </div>
    </main>
  );
}
