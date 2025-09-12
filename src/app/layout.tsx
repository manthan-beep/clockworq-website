import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const displayFont = Poppins({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clockworq.ai – Agents That Work Like Clockworq",
  description:
    "We build AI agents that automate the repetitive and monotonous, so your team can focus on growth and strategy.",
  metadataBase: new URL("https://clockworq.ai"),
  openGraph: {
    title: "Clockworq.ai – Agents That Work Like Clockworq",
    description:
      "AI agents that automate marketing reports, customer workflows, and more.",
    url: "https://clockworq.ai",
    siteName: "Clockworq.ai",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Clockworq.ai",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clockworq.ai – Agents That Work Like Clockworq",
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
      <body className={`${displayFont.variable} ${bodyFont.variable} antialiased`}>{children}</body>
    </html>
  );
}
