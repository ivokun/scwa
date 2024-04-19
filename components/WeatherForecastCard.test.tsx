import { expect, test } from "vitest";

import { render, screen } from "@testing-library/react";
import WeatherForecastCard from "./WeatherForecastCard";
import {
  generateCurrentWeather,
  generateDailyWeatherForecast,
  generateHourlyForecast,
} from "@/test/utils";
import { weatherToIconURL } from "@/lib/utils";

test("renders the daily weather forecast card", async () => {
  const dailyForecast = generateDailyWeatherForecast();
  render(
    <WeatherForecastCard
      daily={dailyForecast}
      lat={0}
      lon={0}
      current={generateCurrentWeather()}
      hourly={generateHourlyForecast()}
    />,
  );
  expect(screen.getByRole("img")).toHaveAttribute(
    "src",
    weatherToIconURL(dailyForecast[0].weather[0].icon, "base"),
  );
});
