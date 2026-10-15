import type { Metadata } from "next";
import { Geist, Great_Vibes } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const script = Great_Vibes({
  variable: "--font-script",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "T.Javkhlan | Software Engineer Student",
  description:
    "Portfolio of T.Javkhlan, a software engineering student. Projects include KHALX, an online store, and NEORIX, an education product.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${geistSans.variable} ${script.variable}`}>
      <body>{children}</body>
    </html>
  );
}
