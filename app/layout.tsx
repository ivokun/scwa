import { headers } from "next/headers";
import type { Metadata } from "next";
import { cn, getUserIP } from "@/lib/utils";
import { Inter } from "next/font/google";
import { serverEnv } from "@/lib/env";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DynamicBackgroundImage from "@/components/DynamicBackgroundImage";
import { getUserCityFromIP } from "@/lib/api/location";
import { getAllWeatherDataFromLocation } from "@/lib/api/owm";
import { getRandomUnsplashImageURL } from "@/lib/api/unsplash";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Super Cool Weather App",
  description: "A super cool weather app made with love from Surabaya.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const userIP = getUserIP(headers());
  const location = await getUserCityFromIP(
    {
      baseURL: serverEnv.IP2LOCATION_API_URL,
      apiKey: serverEnv.IP2LOCATION_API_KEY,
    },
    userIP,
  );
  const weather = await getAllWeatherDataFromLocation(
    {
      baseURL: serverEnv.OPENWEATHERMAP_API_URL,
      apiKey: serverEnv.OPENWEATHERMAP_API_KEY,
    },
    location,
  );
  const bgImages = await getRandomUnsplashImageURL(
    {
      baseURL: serverEnv.UNSPLASH_API_URL,
      apiKey: serverEnv.UNSPLASH_API_ACCESS_KEY,
    },
    weather.current.weather[0].main,
  );
  return (
    <html lang="en">
      <body className={inter.className}>
        <DynamicBackgroundImage
          imageURL={bgImages.urls.regular}
          imageColor={bgImages.color}
        >
          <div
            className={cn(
              "flex",
              "flex-col",
              "min-h-[90vh]",
              "md:min-h-[92vh]",
              "lg:p-12",
            )}
          >
            <Header />

            {children}
          </div>
        </DynamicBackgroundImage>
        <Footer />
      </body>
    </html>
  );
}
