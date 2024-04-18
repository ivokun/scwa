import { z } from "zod";

const DEFAULT_LOCATION: IP2LocationAPI = {
  ip: "::1",
  country_code: "ID",
  country_name: "Indonesia",
  region_name: "East Java",
  city_name: "Surabaya",
  zip_code: "60175",
  time_zone: "Asia/Jakarta",
  latitude: "-7.2492",
  longitude: "112.7508",
  as: "AS7713 TELKOMNET-AS-AP PT Telekomunikasi Indonesia",
  asn: "7713",
  is_proxy: false,
};

type APIConfig = {
  baseURL: string;
  apiKey: string;
};

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
  weather: z.array(OpenWeatherMapAPIWeatherSchema).length(1),
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
  weather: z.array(OpenWeatherMapAPIWeatherSchema).length(1),
  clouds: z.number(),
  pop: z.number(),
  uvi: z.number(),
});
type OpenWeatherMapAPIDaily = z.infer<typeof OpenWeatherMapAPIDailySchema>;

const OpenWeatherMapAPICurrentWeatherSchema = z.object({
  dt: z.number(),
  sunrise: z.number(),
  sunset: z.number(),
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
  weather: z.array(OpenWeatherMapAPIWeatherSchema).length(1),
});
type OpenWeatherMapAPICurrentWeather = z.infer<
  typeof OpenWeatherMapAPICurrentWeatherSchema
>;

const OpenWeatherMapAPISchema = z.object({
  lat: z.number(),
  lon: z.number(),
  timezone: z.string(),
  timezone_offset: z.number(),
  current: OpenWeatherMapAPICurrentWeatherSchema,
  minutely: z.array(
    z.object({
      dt: z.number(),
      precipitation: z.number(),
    }),
  ),
  hourly: z.array(OpenWeatherMapAPIHourlySchema),
  daily: z.array(OpenWeatherMapAPIDailySchema).transform((d) => d.slice(0, 5)),
  alerts: z
    .array(
      z.object({
        sender_name: z.string(),
        event: z.string(),
        start: z.number(),
        end: z.number(),
        description: z.string(),
      }),
    )
    .optional(),
});
type OpenWeatherMapAPI = z.infer<typeof OpenWeatherMapAPISchema>;

async function getWeatherDataFromLocation(
  config: APIConfig,
  location: { latitude: string; longitude: string },
  units: string = "metric",
): Promise<OpenWeatherMapAPI> {
  const queries = new URLSearchParams({
    lat: location.latitude,
    lon: location.longitude,
    units,
    appid: config.apiKey,
  });
  const url = new URL(`onecall?${queries.toString()}`, config.baseURL);
  const response = await fetch(url, { next: { revalidate: 600 } });
  const json = await response.json();
  const parsed = OpenWeatherMapAPISchema.safeParse(json);
  if (!parsed.success) {
    throw new Error(
      `Error parsing OpenWeatherMap API data: ${
        parsed.error.flatten().fieldErrors
      }`,
    );
  }
  return parsed.data;
}

async function getAllWeatherDataFromLocation(
  config: APIConfig,
  location: { latitude: string; longitude: string },
) {
  const data = await getWeatherDataFromLocation(config, location);
  return data;
}

// IP2Location API
// reference: https://www.ip2location.io/ip2location-documentation
const IP2LocationAPISchema = z.object({
  latitude: z.string(),
  longitude: z.string(),
  ip: z.string(),
  country_code: z.string(),
  country_name: z.string(),
  city_name: z.string(),
  region_name: z.string(),
  zip_code: z.string(),
  time_zone: z.string(),
  asn: z.string(),
  as: z.string(),
  is_proxy: z.boolean(),
});

type IP2LocationAPI = z.infer<typeof IP2LocationAPISchema>;

async function getUserCityFromIP(
  config: APIConfig,
  ipAddress: string,
): Promise<IP2LocationAPI> {
  const isLocal =
    ipAddress === "0000:0000:0000:0000:0000:0000:0000:0001" ||
    ipAddress === "::1" ||
    ipAddress === "localhost" ||
    ipAddress === "127.0.0.1";

  // If the IP address is local, return the default location (Surabaya, Indonesia)
  if (isLocal) {
    return DEFAULT_LOCATION;
  }

  const queries = new URLSearchParams({
    key: config.apiKey,
    ip: ipAddress,
  });
  const url = new URL(queries.toString(), config.baseURL);
  const response = await fetch(url, { next: { revalidate: 600 } });
  const json = await response.json();
  const parsed = IP2LocationAPISchema.safeParse(json);
  if (!parsed.success) {
    throw new Error(
      `Error parsing IP2Location API data: ${
        parsed.error.flatten().fieldErrors
      }`,
    );
  }
  return parsed.data;
}

export { getAllWeatherDataFromLocation, getUserCityFromIP };
export type {
  IP2LocationAPI,
  OpenWeatherMapAPI,
  OpenWeatherMapAPIWeather,
  OpenWeatherMapAPIHourly,
  OpenWeatherMapAPIDaily,
  OpenWeatherMapAPICurrentWeather,
  APIConfig,
};
