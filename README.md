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
│   ├── loading.tsx
│   ├── not-found.tsx
│   └── page.tsx
├── components
│   ├── CurrentWeatherCard.test.tsx
│   ├── CurrentWeatherCard.tsx
│   ├── DynamicBackgroundImage.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Icons.tsx
│   ├── MiscSection.test.tsx
│   ├── MiscSection.tsx
│   ├── WeatherForecastCard.test.tsx
│   ├── WeatherForecastCard.tsx
│   ├── WeatherIcon.tsx
│   └── ui
│       ├── accordion.tsx
│       ├── button.tsx
│       ├── input.tsx
│       ├── scroll-area.tsx
│       └── skeleton.tsx
├── components.json
├── lib
│   ├── advice.ts
│   ├── api
│   │   ├── location.ts
│   │   ├── owm.ts
│   │   ├── unsplash.ts
│   │   └── utils.ts
│   ├── env.ts
│   └── utils.ts
├── next-env.d.ts
├── next.config.mjs
├── package.json
├── pnpm-lock.yaml
├── postcss.config.mjs
├── public
├── sst-env.d.ts
├── sst.config.ts
├── tailwind.config.ts
├── test
│   ├── setup.ts
│   └── utils.ts
├── tsconfig.json
└── vitest.config.ts
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

### Running the app locally

#### Create a local environment file

Make a copy of `.env.example` and rename it to `.env.local`. Fill in each variable with the appropriate value. For example,

```
OPENWEATHERMAP_API_KEY=your_openweathermap_api_key
OPENWEATHERMAP_API_URL=https://api.openweathermap.org/data/3.0/
IP2LOCATION_API_KEY=your_ip2location_api_key
IP2LOCATION_API_URL=https://api.ip2location.io
UNSPLASH_API_KEY=your_unsplash_api_key
UNSPLASH_API_URL=https://api.unsplash.com
```

#### Install dependencies

```shell
pnpm install
```

#### Run the app

```shell
pnpm dev
```

The app should now be running on [http://localhost:3000](http://localhost:3000).

#### Running tests

```shell
pnpm test
```

## Deploying the app

### Deploying to AWS

#### Pre-requisites

- Configure your AWS credentials using the [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html).

#### Deploy the app

Deploy the app using your AWS account.

```shell
pnpm sst deploy
```

SST support multiple stages, you can deploy to a specific stage using the `--stage` flag.
You can also deploy to a specific region using the `--region` flag.

```shell
pnpm sst deploy --stage prod --region us-east-1
```
