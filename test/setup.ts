import "@testing-library/jest-dom";
// import { afterAll, afterEach, beforeAll } from "vitest";

process.env.OPENWEATHERMAP_API_KEY = "owm";
process.env.OPENWEATHERMAP_API_URL =
  "https://api.openweathermap.org/data/2.5/weather";
process.env.IP2LOCATION_API_KEY = "iploc";
process.env.IP2LOCATION_API_URL = "https://api.ip2location.com/v2/?";
process.env.UNSPLASH_API_URL = "https://api.unsplash.com/photos/random";
process.env.UNSPLASH_API_ACCESS_KEY = "unsplash";
//
// beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());
