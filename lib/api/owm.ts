import { z } from "zod";
import { APIConfig } from "@/lib/api/utils";

// OpenWeatherMap API v3.0
// reference: https://openweathermap.org/api/one-call-3
const OpenWeatherMapAPIWeatherSchema = z.object({
  id: z.number(),
  main: z.string(),
  description: z.string(),
  icon: z.string(),
});
type OpenWeatherMapAPIWeather = z.infer<typeof OpenWeatherMapAPIWeatherSchema>;
const OpenWeatherMapAPIHourlySchema = z.object({
  dt: z.number(),
  temp: z.number().transform(Math.round),
  feels_like: z.number(),
  pressure: z.number(),
  humidity: z.number(),
  dew_point: z.number(),
  uvi: z.number(),
  clouds: z.number(),
  visibility: z.number(),
  wind_speed: z.number(),
  wind_deg: z.number(),
  weather: z.array(OpenWeatherMapAPIWeatherSchema).min(1),
  pop: z.number(),
});
type OpenWeatherMapAPIHourly = z.infer<typeof OpenWeatherMapAPIHourlySchema>;

const OpenWeatherMapAPIDailySchema = z.object({
  dt: z.number(),
  sunrise: z.number(),
  sunset: z.number(),
  moonrise: z.number(),
  moonset: z.number(),
  moon_phase: z.number(),
  summary: z.string(),
  temp: z.object({
    day: z.number().transform(Math.round),
    min: z.number().transform(Math.round),
    max: z.number().transform(Math.round),
    night: z.number().transform(Math.round),
    eve: z.number().transform(Math.round),
    morn: z.number().transform(Math.round),
  }),
  feels_like: z.object({
    day: z.number(),
    night: z.number(),
    eve: z.number(),
    morn: z.number(),
  }),
  pressure: z.number(),
  humidity: z.number(),
  dew_point: z.number(),
  wind_speed: z.number(),
  wind_deg: z.number(),
  weather: z.array(OpenWeatherMapAPIWeatherSchema).min(1),
  clouds: z.number(),
  pop: z.number(),
  uvi: z.number(),
});
type OpenWeatherMapAPIDaily = z.infer<typeof OpenWeatherMapAPIDailySchema>;

const OpenWeatherMapAPICurrentWeatherSchema = z.object({
  dt: z.number(),
  temp: z.number().transform(Math.round),
  feels_like: z.number(),
  humidity: z.number(),
  visibility: z.number(),
  wind_speed: z.number(),
  weather: z.array(OpenWeatherMapAPIWeatherSchema).min(1),
});
type OpenWeatherMapAPICurrentWeather = z.infer<
  typeof OpenWeatherMapAPICurrentWeatherSchema
>;

const OpenWeatherMapAPISchema = z.object({
  lat: z.number(),
  lon: z.number(),
  current: OpenWeatherMapAPICurrentWeatherSchema,
  hourly: z.array(OpenWeatherMapAPIHourlySchema),
  daily: z.array(OpenWeatherMapAPIDailySchema).transform((d) => d.slice(0, 6)),
});
type OpenWeatherMapAPI = z.infer<typeof OpenWeatherMapAPISchema>;

async function getWeatherDataFromLocation(
  config: APIConfig,
  location: { latitude: number; longitude: number },
  units: string = "metric",
): Promise<OpenWeatherMapAPI> {
  const queries = new URLSearchParams({
    lat: location.latitude.toString(),
    lon: location.longitude.toString(),
    units,
    appid: config.apiKey,
  });
  const url = new URL(`onecall?${queries.toString()}`, config.baseURL);
  const response = await fetch(url, { next: { revalidate: 600 } });
  const json = await response.json();
  const parsed = OpenWeatherMapAPISchema.safeParse(json);
  if (!parsed.success) {
    throw new Error(
      `Error parsing OpenWeatherMap API data: ${JSON.stringify(
        parsed.error.flatten().fieldErrors,
      )}`,
    );
  }
  return parsed.data;
}

async function getAllWeatherDataFromLocation(
  config: APIConfig,
  location: { latitude: number; longitude: number },
) {
  const data = await getWeatherDataFromLocation(config, location);
  return data;
}

export { getAllWeatherDataFromLocation };
export type {
  OpenWeatherMapAPI,
  OpenWeatherMapAPIWeather,
  OpenWeatherMapAPIHourly,
  OpenWeatherMapAPIDaily,
  OpenWeatherMapAPICurrentWeather,
};
