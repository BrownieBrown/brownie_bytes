import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Marco Braun | Developer",
  description: "Machine Learning Engineer building cloud-native AI infrastructure",
  metadataBase: new URL("https://browniebytes.me"),
  openGraph: {
    title: "Marco Braun | Developer",
    description: "Machine Learning Engineer building cloud-native AI infrastructure",
    url: "https://browniebytes.me",
    siteName: "Marco Braun",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marco Braun | Developer",
    description: "Machine Learning Engineer building cloud-native AI infrastructure",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
