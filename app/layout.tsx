import type { Metadata } from "next";
import { Anybody, Hanken_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const anybody = Anybody({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-anybody",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hanken",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fitrybe",
  description:
    "Record your run, ride or walk, then put it where your people are: a club with a weekly goal, a live session you can join from another city, a feed only your Trybe sees.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${anybody.variable} ${hanken.variable} ${plexMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
