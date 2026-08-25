import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
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
  metadataBase: new URL("https://www.stroopeffecttest.com"),
  title: {
    default: "Stroop Effect Test — Free Online Cognitive & Reaction Tests",
    template: "%s | Stroop Effect Test",
  },
  description:
    "Take the classic Stroop Effect Test online for free, plus 19+ other cognitive, reaction, memory, vision, and hearing tests. Instant results, no sign-up.",
  openGraph: {
    title: "Stroop Effect Test — Free Online Cognitive & Reaction Tests",
    description:
      "Take the classic Stroop Effect Test online for free, plus 19+ other cognitive, reaction, memory, vision, and hearing tests. Instant results, no sign-up.",
    url: "https://www.stroopeffecttest.com",
    siteName: "Stroop Effect Test",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Stroop Effect Test",
  url: "https://www.stroopeffecttest.com",
  logo: "https://www.stroopeffecttest.com/icon-512.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1010914018637240"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-EBS4T6KM9K" />
    </html>
  );
}
