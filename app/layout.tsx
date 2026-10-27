import type { Metadata, Viewport } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#090817",
};

export const metadata: Metadata = {
  title: "ISHACK S — Software Engineer & AI Explorer",
  description:
    "Portfolio of ISHACK S — Computer Science and Engineering student exploring software engineering, artificial intelligence, computer vision, and game development.",
  keywords: [
    "ISHACK S",
    "software engineer",
    "portfolio",
    "AI",
    "machine learning",
    "computer vision",
    "web development",
    "Chennai Institute of Technology",
  ],
  authors: [{ name: "ISHACK S" }],
  openGraph: {
    title: "ISHACK S — Software Engineer & AI Explorer",
    description:
      "Computer Science and Engineering student building software, exploring AI, and solving technical problems through hands-on projects.",
    type: "website",
    locale: "en_IN",
    siteName: "ISHACK S Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "ISHACK S — Software Engineer & AI Explorer",
    description:
      "Computer Science and Engineering student building software, exploring AI, and solving technical problems through hands-on projects.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content="dark" />
      </head>
      <body>{children}</body>
    </html>
  );
}
