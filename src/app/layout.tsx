import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoadingAnimation from "@/components/LoadingAnimation";

const displayFont = Poppins({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://clockworq.ai';
const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'Clockworq.ai';

export const metadata: Metadata = {
  title: `${siteName} – Agents That Work Like Clockworq`,
  description:
    "We build AI agents that automate the repetitive and monotonous, so your team can focus on growth and strategy.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: `${siteName} – Agents That Work Like Clockworq`,
    description:
      "AI agents that automate marketing reports, customer workflows, and more.",
    url: siteUrl,
    siteName: siteName,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} – Agents That Work Like Clockworq`,
    description:
      "AI agents that automate marketing reports, customer workflows, and more.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${displayFont.variable} ${bodyFont.variable} antialiased`}>
        <LoadingAnimation />
        <Navbar />
        <div className="pt-20">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
