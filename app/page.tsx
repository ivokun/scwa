import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import CurrentWeatherCard from "@/components/CurrentWeatherCard";
import WeatherForecastCard from "@/components/WeatherForecastCard";

export default function Home() {
  return (
    <main className={cn("flex", "min-h-screen", "flex-col", "lg:p-12")}>
      <Header />

      <div className="flex flex-col justify-center p-4 gap-4">
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
        <WeatherForecastCard />
      </div>
    </main>
  );
}
