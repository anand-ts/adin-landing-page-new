import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ClientLayout from "@/components/layout/ClientLayout";
import LoadingBar from "@/components/layout/LoadingBar";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
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
        className={`${rubik.variable} font-sans antialiased`}
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
