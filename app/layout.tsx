import type { Metadata } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nirvana Intelix — Digital products built for the MENA market",
  description:
    "Nirvana Intelix is a product studio building and operating digital products for the Middle East — from our Webziq multi-tenant platform to AI commerce, content platforms, marketplaces, community networks and Islamic technology.",
  keywords: [
    "Nirvana Intelix",
    "Webziq",
    "MENA",
    "Saudi Arabia",
    "Product studio",
    "Multi-tenant SaaS",
    "AI commerce",
    "Headless commerce",
    "Arabic SaaS",
    "BigCommerce",
    "Next.js",
  ],
  authors: [{ name: "Nirvana Intelix" }],
  openGraph: {
    title: "Nirvana Intelix — Digital products for the MENA market",
    description:
      "Product studio building and operating MENA-focused digital products: Webziq platform, AI commerce, content platforms, marketplaces, communities and Islamic technology.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${serif.variable} ${mono.variable}`}
    >
      <body className="min-h-screen bg-paper font-sans text-ink antialiased">
        <div className="noise pointer-events-none fixed inset-0 z-[1] opacity-50 mix-blend-multiply" />
        <div className="relative z-[2]">{children}</div>
      </body>
    </html>
  );
}
