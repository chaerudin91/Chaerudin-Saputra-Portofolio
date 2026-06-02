import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://chaerudinsaputra-portofolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Chaerudin Saputra | Data Analyst Portfolio",
    template: "%s | Chaerudin Saputra",
  },
  description:
    "Portfolio Chaerudin Saputra - Data Analyst, Business Intelligence, Business Analyst, Product QA, AI projects, competitions, leadership, and Management Trainee readiness.",
  applicationName: "Chaerudin Saputra Portfolio",
  authors: [{ name: "Chaerudin Saputra" }],
  creator: "Chaerudin Saputra",
  publisher: "Chaerudin Saputra",
  keywords: [
    "Chaerudin Saputra",
    "Chaerudin Saputra Portfolio",
    "Data Analyst Indonesia",
    "Data Analyst Jakarta",
    "Business Intelligence Portfolio",
    "Power BI Portfolio",
    "SQL Portfolio",
    "Python Data Analyst",
    "Business Analyst Portfolio",
    "Product Analyst Portfolio",
    "Management Trainee Indonesia",
    "Universitas Trisakti Information Systems",
    "Pertamina Data Analyst Intern",
    "BISA AI Academy Data Science",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Chaerudin Saputra | Data Analyst Portfolio",
    description:
      "Explore data analytics, Power BI dashboards, business analysis, AI projects, competition achievements, leadership, and direct contact information.",
    url: siteUrl,
    siteName: "Chaerudin Saputra Portfolio",
    type: "website",
    locale: "en_ID",
    images: [{ url: "/portfolio-images/page-01.jpg", width: 1440, height: 810, alt: "Chaerudin Saputra portfolio cover" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chaerudin Saputra | Data Analyst Portfolio",
    description: "Data Analyst, BI, AI, Product QA, and Management Trainee portfolio.",
    images: ["/portfolio-images/page-01.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: { icon: "/favicon.svg" },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
