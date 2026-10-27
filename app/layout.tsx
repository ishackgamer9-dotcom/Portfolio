import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { identity } from "./site-data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${identity.name} | ${identity.system} — Developer & World Builder`,
  description:
    "ISHACK S (ISK) — aspiring software and game developer exploring AI, creative technology, and interactive experiences.",
  applicationName: identity.system,
  authors: [{ name: identity.name }],
  keywords: ["ISHACK S", "ISK", "developer portfolio", "software engineering", "game development"],
  openGraph: {
    title: `${identity.name} | ${identity.system} — Developer & World Builder`,
    description:
      "ISHACK S (ISK) — software, AI, and game development projects.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
