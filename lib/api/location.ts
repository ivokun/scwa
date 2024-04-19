import { z } from "zod";
import { APIConfig } from "./utils";

const DEFAULT_LOCATION: IP2LocationAPI = {
  ip: "::1",
  country_code: "ID",
  country_name: "Indonesia",
  region_name: "East Java",
  city_name: "Surabaya",
  zip_code: "60175",
  time_zone: "Asia/Jakarta",
  latitude: -7.2492,
  longitude: 112.7508,
  as: "AS7713 TELKOMNET-AS-AP PT Telekomunikasi Indonesia",
  asn: "7713",
  is_proxy: false,
};

// IP2Location API
// reference: https://www.ip2location.io/ip2location-documentation
const IP2LocationAPISchema = z.object({
  latitude: z.number(),
  longitude: z.number(),
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
  const url = new URL(`/?${queries.toString()}`, config.baseURL);
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

export { getUserCityFromIP };
export type { IP2LocationAPI };
