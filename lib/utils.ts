import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function weatherToIcon(weather: string) {
  switch (weather) {
    case "Clear":
      return "☀️";
    case "Clouds":
      return "☁️";
    case "Rain":
      return "🌧";
    case "Snow":
      return "❄️";
    default:
      return "🌈";
  }
}

// Get the URL for the weather icon from OpenWeatherMap API
// https://openweathermap.org/weather-conditions
export function weatherToIconURL(
  iconID: string,
  size: "base" | "2x" | "4x" = "base",
) {
  return `http://openweathermap.org/img/wn/${iconID}${
    size === "base" ? "" : `@${size}`
  }.png`;
}
