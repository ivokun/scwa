import { IP2LocationAPI, OpenWeatherMapAPIDaily } from "../lib/api";

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

function generateHourlyForecast() {
  return [
    {
      dt: 1629781200,
      temp: 20,
      feels_like: 20,
      pressure: 1010,
      humidity: 50,
      dew_point: 10,
      uvi: 5,
      clouds: 0,
      visibility: 10000,
      wind_speed: 10,
      wind_deg: 180,
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01d" },
      ],
      pop: 0,
    },
  ];
}

function generateDailyWeatherForecast(): OpenWeatherMapAPIDaily[] {
  return [
    {
      dt: 1629781200,
      sunrise: 1629781200,
      sunset: 1629781200,
      moonrise: 1629781200,
      moonset: 1629781200,
      moon_phase: 0.5,
      summary: "clear sky",
      temp: {
        day: 20,
        min: 10,
        max: 30,
        night: 20,
        eve: 20,
        morn: 20,
      },
      feels_like: {
        day: 20,
        night: 20,
        eve: 20,
        morn: 20,
      },
      pressure: 1010,
      humidity: 50,
      dew_point: 10,
      wind_speed: 10,
      wind_deg: 180,
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01d" },
      ],
      clouds: 0,
      pop: 0,
      uvi: 5,
    },
  ];
}

export {
  generateLocation,
  generateCurrentWeather,
  generateHourlyForecast,
  generateDailyWeatherForecast,
};
