import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aryan Mishra | Data Analyst Portfolio",
  description:
    "Explore Aryan Mishra's data analytics projects, financial analysis case study, skills, education and contact details.",
  openGraph: {
    title: "Aryan Mishra | Data Analyst Portfolio",
    description:
      "Selected analytics projects, case studies and professional profile.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
