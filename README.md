# scwa

Super Cool Weather App

## Description

This is a weather app that allows users to search for a city and see the current weather and a 5-day forecast. The app uses the OpenWeather API to retrieve weather data for cities.

## Project Stucture

```
scwa
├── LICENSE
├── README.md
├── app
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components
│   ├── CurrentWeatherCard.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Icons.tsx
│   ├── MiscSection.tsx
│   ├── WeatherForecastCard.tsx
│   ├── WeatherIcon.tsx
│   └── ui
│       ├── accordion.tsx
│       └── scroll-area.tsx
├── components.json
├── lib
│   ├── advice.ts
│   ├── api.ts
│   ├── env.ts
│   └── utils.ts
├── next-env.d.ts
├── next.config.mjs
├── package.json
├── pnpm-lock.yaml
├── postcss.config.mjs
├── public
│   ├── next.svg
│   └── vercel.svg
├── tailwind.config.ts
└── tsconfig.json
```

## Getting started

### Create a local environment file

Make a copy of `.env.example` and rename it to `.env.local`. Fill in each variable with the appropriate value. For example,

```
OPENWEATHERMAP_API_KEY=your_openweathermap_api_key
OPENWEATHERMAP_API_URL=https://api.openweathermap.org/data/3.0/
IP2LOCATION_API_KEY=your_ip2location_api_key
IP2LOCATION_API_URL=https://api.ip2location.io
```
