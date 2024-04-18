import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { serverEnv } from "@/lib/env";
import Footer from "@/components/Footer";
import "./globals.css";
import DynamicBackgroundImage from "@/components/DynamicBackgroundImage";
import { getUnsplashImageURLs } from "@/lib/api";

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
  const bgImages = await getUnsplashImageURLs(
    {
      baseURL: serverEnv.UNSPLASH_API_URL,
      apiKey: serverEnv.UNSPLASH_API_ACCESS_KEY,
      secretKey: serverEnv.UNSPLASH_API_SECRET_KEY,
    },
    "cloudy",
  );
  return (
    <html lang="en">
      <body className={inter.className}>
        <DynamicBackgroundImage imageURL={bgImages[0].urls.regular}>
          {children}
        </DynamicBackgroundImage>
        <Footer />
      </body>
    </html>
  );
}
