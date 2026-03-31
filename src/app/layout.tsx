import type { Metadata } from "next";
import { Playfair_Display, Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Cursor from "@/components/Cursor";
import Particles from "@/components/Particles";
import ScrollProgress from "@/components/ScrollProgress";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/lib/constants";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Tamerlan Musayev — Founder of PeptideLeads",
    template: "%s — Tamerlan Musayev",
  },
  description:
    "Tamerlan Musayev is an Azerbaijani-American entrepreneur and founder of PeptideLeads, based in Houston, Texas.",
  keywords: [
    "Tamerlan Musayev",
    "Tamer Musayev",
    "PeptideLeads",
    "entrepreneur",
    "peptide therapy marketing",
    "Houston entrepreneur",
    "young entrepreneur",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Tamerlan Musayev — Founder of PeptideLeads",
    description:
      "Tamerlan Musayev is an Azerbaijani-American entrepreneur and founder of PeptideLeads, based in Houston, Texas.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tamerlan Musayev — Founder of PeptideLeads",
    description:
      "Tamerlan Musayev is an Azerbaijani-American entrepreneur and founder of PeptideLeads, based in Houston, Texas.",
    creator: "@peptideleads",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${syne.variable} ${jetbrains.variable}`}>
      <body>
        <GoogleAnalytics />
        <Cursor />
        <Particles />
        <ScrollProgress />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
