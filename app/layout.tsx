import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";

import { TailwindIndicator } from "@/components/shared/TailwindIndicator";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nischal Kotamraju",
  description:
    "Hello, I'm Nischal—a passionate developer, designer, and problem solver. I specialize in creating fast, accessible, and user-friendly digital experiences.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nischalkotamraju.netlify.app/",
    title: "Nischal Kotamraju",
    description:
      "Hello, I'm Nischal—a passionate developer, designer, and problem solver. I specialize in creating fast, accessible, and user-friendly digital experiences.",
    siteName: "Nischal Kotamraju",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0E0E10",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className} antialiased`}>
        {children}
        <TailwindIndicator />
        <Analytics />
      </body>
    </html>
  );
}
