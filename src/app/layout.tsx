import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ClientLayout from "@/components/layout/ClientLayout";
import LoadingBar from "@/components/layout/LoadingBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adin - Investing in Early Stage Ideas",
  description: "ADIN backs teams building the future of the internet focusing on Seed Rounds to Series-A. Investing in biotech, creative tools, and blockchain innovations.",
  keywords: "venture capital, seed funding, series A, biotech, blockchain, creative tools, startup investment",
  authors: [{ name: "Adin" }],
  openGraph: {
    title: "Adin - Investing in Early Stage Ideas",
    description: "ADIN backs teams building the future of the internet focusing on Seed Rounds to Series-A.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LoadingBar />
        <Header />
        <ClientLayout>
          {children}
        </ClientLayout>
        <Footer />
      </body>
    </html>
  );
}
