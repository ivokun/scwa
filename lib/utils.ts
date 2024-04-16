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
export type WeatherIconSize = "base" | "2x" | "4x";
export type WeatherIconID =
  | "01d"
  | "01n"
  | "02d"
  | "02n"
  | "03d"
  | "03n"
  | "04d"
  | "04n"
  | "09d"
  | "09n"
  | "10d"
  | "10n"
  | "11d"
  | "11n"
  | "13d"
  | "13n"
  | "50d"
  | "50n";

export function weatherToIconURL(iconID: string, size: WeatherIconSize) {
  return `https://openweathermap.org/img/wn/${iconID}${
    size === "base" ? "" : `@${size}`
  }.png`;
}
