import { expect, test } from "vitest";

import { render, screen } from "@testing-library/react";
import CurrentWeatherCard from "./CurrentWeatherCard";
import { generateCurrentWeather, generateLocation } from "@/test/utils";

test("renders the current weather card", () => {
  const location = generateLocation();
  const currentWeather = generateCurrentWeather();
  render(<CurrentWeatherCard location={location} current={currentWeather} />);
  expect(screen.getByText(location.city_name)).toBeInTheDocument();
  expect(screen.getByText(currentWeather.weather[0].main)).toBeInTheDocument();
});
