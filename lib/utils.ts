import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

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

const headersSchema = z.object({
  "x-forwarded-for": z.string().min(1),
});

type ParsedHeaders = z.infer<typeof headersSchema>;

function parseHeaders(headers: Headers): ParsedHeaders {
  const parsedHeaders = headersSchema.safeParse(Object.fromEntries(headers));
  if (!parsedHeaders.success) {
    console.error(
      "❌ Invalid headers:",
      parsedHeaders.error.flatten().fieldErrors,
    );
    throw new Error("Invalid headers");
  }
  return parsedHeaders.data;
}

export function getUserIP(headers: Headers) {
  const { "x-forwarded-for": ips } = parseHeaders(headers);
  const ip = ips.split(",")[0];
  return ip;
}

// Return time in HH:MM format
export function parseTimeFromTimestamp(timestamp: number) {
  return new Date(timestamp * 1000).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function parseDateFromTimestamp(timestamp: number) {
  const today = new Date();
  const date = new Date(timestamp * 1000);
  if (today.toDateString() === date.toDateString()) {
    return "Today";
  }
  return date.toLocaleDateString();
}
