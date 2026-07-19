import type { Metadata } from "next";
import { Caveat, Geist, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const caveat = Caveat({
  variable: "--font-ink-note",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "GTM Engineer — Autonomous AI Systems for Revenue Teams.",
  description:
    "Freelance GTM Engineer. I design and build AI-powered agents, automations, and revenue workflows for Seed to Series B teams — your pipeline, on autopilot.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${instrumentSerif.variable} ${caveat.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
