import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
