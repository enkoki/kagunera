import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AuthProvider } from '@/app/hooks/useAuth'
import "./globals.css";
import { AvatarProvider } from "./hooks/useAvatar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kagunera · Start Exploring Anime From Today",
  description: "Track your favorite anime, discover upcoming releases, and manage your watchlist effortlessly in one organized platform. Stay updated with the latest episodes, release schedules, and trending series so you never miss a moment of the anime you love.",
  authors: [{ name: "EMA", url: "https://github.com/enkoki/kagunera" }],
  openGraph: {
    title: "Kagunera · Start Exploring Anime From Today",
    description: "Explore your favorite anime, discover upcoming releases effortlessly in one organized platform. Stay updated with the latest episodes, release schedules, and trending series so you never miss a moment of the anime you love..",
    url: "https://kagunera.vercel.app/",
    siteName: "Kagunera",
    images: [
      {
        url: "https://i.imgur.com/jAvIeGK.png",
        alt: "Kagunera App Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kagunera · Start Exploring Anime From Today",
    description: "Explore your favorite anime, discover upcoming releases effortlessly in one organized platform. Stay updated with the latest episodes, release schedules, and trending series so you never miss a moment of the anime you love.",
    images: ["https://i.imgur.com/jAvIeGK.png"],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AvatarProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </AvatarProvider>
      </body>
    </html>
  );
}
