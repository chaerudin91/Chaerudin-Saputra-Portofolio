import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chaerudin Saputra | Data Analyst Portfolio",
  description:
    "Portfolio Chaerudin Saputra, Information Systems graduate focused on data analytics, business intelligence, product QA, and management trainee readiness.",
  keywords: [
    "Chaerudin Saputra",
    "Data Analyst",
    "Business Intelligence",
    "Power BI",
    "SQL",
    "Python",
    "Management Trainee",
    "Portfolio",
  ],
  openGraph: {
    title: "Chaerudin Saputra | Data Analyst Portfolio",
    description:
      "Data analytics, BI dashboards, business analysis, AI projects, achievements, and leadership portfolio.",
    type: "website",
    images: ["/portfolio-images/page-01.webp"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
