import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import "./globals.css";
import DynamicBackgroundImage from "@/components/DynamicBackgroundImage";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Super Cool Weather App",
  description: "A super cool weather app made with love from Surabaya.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DynamicBackgroundImage>{children}</DynamicBackgroundImage>
        <Footer />
      </body>
    </html>
  );
}
