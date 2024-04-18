# scwa

Super Cool Weather App

## Description

This is a weather app that allows users to search for a city and see the current weather and a 5-day forecast. The app uses the OpenWeather API to retrieve weather data for cities.

## Project Stucture

```shell
scwa
├── LICENSE
├── README.md
├── app
│   ├── error.tsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── not-found.tsx
│   └── page.tsx
├── components
│   ├── CurrentWeatherCard.tsx
│   ├── DynamicBackgroundImage.tsx
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
│   └── bg3_saigetsu0425.jpeg
├── sst-env.d.ts
├── sst.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

### Directories

- `app`: Contains the main layout and error pages.
- `components`: Contains all the components used in the app.
- `components/ui`: Contains all the installed [shadcn/ui components](https://ui.shadcn.com/docs).
- `lib`: Contains utility functions and API calls.
- `public`: Contains static files like images.

## Stack Used

- [Next.js](https://nextjs.org/) (14.2.0 - with app router)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [pnpm](https://pnpm.io/)
- [OpenWeather API](https://openweathermap.org/api)
- [IP2Location API](https://ip2location.com/)
- [Unsplash API](https://unsplash.com/developers)
- [SST](https://sst.dev/)

## Getting started

### Create a local environment file

Make a copy of `.env.example` and rename it to `.env.local`. Fill in each variable with the appropriate value. For example,

```
OPENWEATHERMAP_API_KEY=your_openweathermap_api_key
OPENWEATHERMAP_API_URL=https://api.openweathermap.org/data/3.0/
IP2LOCATION_API_KEY=your_ip2location_api_key
IP2LOCATION_API_URL=https://api.ip2location.io
UNSPLASH_API_KEY=your_unsplash_api_key
UNSPLASH_API_URL=https://api.unsplash.com
```
