import { expect, test } from "vitest";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MiscSection from "./MiscSection";
import { generateHourlyForecast } from "@/test/utils";

test("renders the current weather card", async () => {
  const hourlyForecast = generateHourlyForecast();
  const currentWeatherDetail = "Sunshine and rainbows.";
  const currentWeatherAdvice = "Bring an umbrella.";
  render(
    <MiscSection
      hourlyForecast={hourlyForecast}
      currentWeatherDetail={currentWeatherDetail}
      currentWeatherAdvice={currentWeatherAdvice}
    />,
  );
  await userEvent.click(screen.getByText("Hourly Forecast"));
  expect(screen.getByText(`${hourlyForecast[0].temp}°`)).toBeInTheDocument();
});
