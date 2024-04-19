import { IP2LocationAPI } from "../lib/api";

function generateLocation(): IP2LocationAPI {
  return {
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
}

function generateCurrentWeather() {
  return {
    weather: [
      { id: 800, main: "Clear", description: "clear sky", icon: "01d" },
    ],
    temp: 20,
    feels_like: 20,
    humidity: 50,
    wind_speed: 10,
    visibility: 10000,
    dt: 1629781200,
  };
}

export { generateLocation, generateCurrentWeather };
